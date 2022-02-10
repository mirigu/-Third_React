import React from "react";
import { Grid, Image, Text, Button } from "../elements/index";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();

  //게시글 삭제하기
  const deletePost = () => {
    dispatch(postActions.deletePostFB(props.id));
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_left>
            <Image shape="circle" src={props.src} />
            <Text margin="0px 5px" bold>
              {props.user_info.user_name}
            </Text>
          </Grid>
          <Grid is_right>
            <Text margin="0px 2px" bold>
              {props.insert_dt}
            </Text>
            {/* props에 버튼이 있는 경우에만, 수정버튼 보여주기 */}
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            {/* props에 버튼이 있는 경우에만, 삭제버튼 보여주기 */}
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="0px 5px"
                _onClick={deletePost}
              >
                삭제
              </Button>
            )}
          </Grid>
        </Grid>
        {/* 레이아웃이 right 일때 게시글 형태 */}
        {props.layout === "right" && (
          <Grid is_flex padding="16px 0px">
            <Grid padding="16px">
              <Text textAlign bold>
                {props.contents}
              </Text>
            </Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
        )}
        {/* 레이아웃이 left 일때 게시글 형태 */}
        {props.layout === "left" && (
          <Grid is_flex padding="16px 0px">
            <Image shape="rectangle" src={props.image_url} />
            <Grid padding="16px">
              <Text textAlign bold>
                {props.contents}
              </Text>
            </Grid>
          </Grid>
        )}
        {/* 레이아웃이 bottom 일때 게시글 형태 */}
        {props.layout === "bottom" && (
          <Grid padding="16px 0px">
            <Grid padding="5px 16px">
              <Text bold>{props.contents}</Text>
            </Grid>
            <Image shape="rectangle" src={props.image_url} />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "miri",
    user_profile:
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/29/Ouc00W5WCPWU637764128299973913.jpg",
  },
  image_url:
    "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2021/12/29/Ouc00W5WCPWU637764128299973913.jpg",
  contents: "예쁘네용",
  comment_cnt: 10,
  insert_dt: " 2022-02-04 21:00:00",
  is_me: false,
};

export default Post;
