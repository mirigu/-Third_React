import React from "react";
import { Grid, Image, Text } from "../elements/index";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.uesr_info.user_name}</Text>
          <Text bold>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="10px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="10px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
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

export default Post;
