// 액션을 편하게 만들어주는, 리듀서를 편하게 만들어주는
import { createAction, handleActions } from "redux-actions";
// 불변성 관리를 편하게 해주는
import { produce } from "immer";
import { setCookie, deleteCookie } from "../../shared/Cookie";

import { auth } from "../../shared/firebase";
import firebase from "firebase/compat/app";

// actions: 액션타입 만들기
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER ";

// action creators: 액션 생성 함수 만들기
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState 만들기
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
//로그인했을때, 세션에 로그인 상태를 기록하도록 바꿔주기
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    // history - 페이지 이동때 사용
    //로그인 유지, 작업끝나고나면 로그인하기
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        // 로그인하고 뭐 할건지
        .then((user) => {
          console.log(user);

          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          );
          //로그인 성공하면 메인페이지 이동
          history.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });
    });
  };
};

//회원가입
const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth // firebase 웹 비밀번호 인증 복사
      .createUserWithEmailAndPassword(id, pwd)
      // 완료되었을 때
      .then((user) => {
        // 회원가입이 정상이면 회원가입 버튼 눌렀을 때 콘솔 확인
        console.log(user);

        // 유저 닉네임 업데이트 (사용자 프로필 업데이트)
        // 로그인한 유저를 가져오는 방법
        auth.currentUser
          .updateProfile({
            //displayName -> user_name으로 변경
            displayName: user_name,
          })
          //성공했을때,
          .then(() => {
            // 닉네임이 성공적으로 바뀌었을 때, 로그인 상태 바꾸기
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })

          .catch((error) => {
            console.log(error);
          });
      })

      // 오류 났을 때
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};

//파이어베이스 통해서 로그인상태 맞는지 확인
const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    // 유저 있는지 확인
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        // 로그인 안되있으면 리덕스 로그아웃
        dispatch(logOut());
      }
    });
  };
};

//로그아웃
const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    auth
      .signOut()
      .then(() => {
        dispatch(logOut());
        //기존 페이지를 "/"페이지로 바꾸기
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
