// 액션을 편하게 만들어주는, 리듀서를 편하게 만들어주는
import { createAction, handleActions } from "redux-actions";
// 불변성 관리를 편하게 해주는
import { produce } from "immer";

import { storage } from "../../shared/firebase";

// actions: 액션타입 만들기
//업로드중인지 아닌지 알게해주는 액션
const UPLOADING = "UPLOADING";
//파일을 업로드 하는 액션
const UPLOAD_IMAGE = "UPLOAD_IMAGE";

// action creators: 액션 생성 함수 만들기
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));

//initialState 만들기
const initialState = {
  image_url: "",
  uploading: false, //처음엔 업로드중이 아니기때문에 false로 지정
};

//파이어베이스에 업로드하기
const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));

    const _upload = storage.ref(`images/${image.name}`).put(image);

    //업로드!
    _upload.then((snapshot) => {
      //뭘 업로드했는지 알려줘
      console.log(snapshot);

      //업로드 파일 다운로드 경로 가져오기
      snapshot.ref.getDownloadURL().then((url) => {
        dispatch(uploadImage(url));
        console.log(url);
      });
    });
  };
};

//reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  uploadImage,
  uploadImageFB,
};

export { actionCreators };
