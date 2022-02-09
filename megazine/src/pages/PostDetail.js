import React from "react";
import Post from "../components/Post";

import { useSelector, useDispatch } from "react-redux";
import { firestore } from "../shared/firebase";
import { Button, Grid } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const PostDetail = (props) => {
  const dispatch = useDispatch();

  const { history } = props;
  //게시글 id값 가져오기
  const id = props.match.params.id;
  console.log(id);

  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post_data = post_list[post_idx];
  console.log(post_data);

  const [post, setPost] = React.useState(post_data ? post_data : null);

  React.useEffect(() => {
    if (post) {
      return;
    }
    const postDB = firestore.collection("post");
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        console.log(doc.data());

        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );
        setPost(post);
      });
  }, []);

  //
  const deletePost = () => {
    dispatch(postActions.deletePostFB(id));
    history.push("/");
  };

  return (
    <React.Fragment>
      {post && (
        <Grid>
          <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
          <Grid padding="16px">
            <Button _onClick={deletePost}>삭제</Button>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default PostDetail;
