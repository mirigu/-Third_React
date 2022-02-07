// 액션을 편하게 만들어주는, 리듀서를 편하게 만들어주는
import { createAction, handleActions } from "redux-actions";
// 불변성 관리를 편하게 해주는
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

// actions: 액션타입 만들기
// 목록 가져오기
const SET_POST = "SET_POST";
// 목록 추가하기
const ADD_POST = "ADD_POST";

// action creators: 액션 생성 함수 만들기
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

//initialState 만들기
const initialState = {
  list: [],
};

const initialPost = {
  id: 0,
  uesr_info: {
    user_name: "miri",
    user_profile:
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/29/Ouc00W5WCPWU637764128299973913.jpg",
  },
  image_url:
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/29/Ouc00W5WCPWU637764128299973913.jpg",
  contents: "예쁘네용",
  comment_cnt: 10,
  insert_dt: " 2022-02-04 21:00:00",
};

//파이어스토어 연동
const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = {
          id: doc.id,
          ...doc.data(),
        };
        //데이터 모양 맞추기
        let post = {
          id: doc.id,
          user_info: {
            user_name: _post.user_name,
            user_profile: _post.user_profile,
            user_id: _post.user_id,
          },
          contents: _post.contents,
          image_url: _post.image_url,
          comment_cnt: _post.comment_cnt,
          imsert_dt: _post.insert_dt,
        };
        post_list.push(post);
      });
      //리스트 확인
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

//reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};

export { actionCreators };
