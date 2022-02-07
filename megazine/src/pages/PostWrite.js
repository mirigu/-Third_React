import React from "react";
import { Grid, Image, Text, Input, Button } from "../elements";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="24px" bold>
          게시글 작성
        </Text>
        <input type="file" />
      </Grid>
      <Grid padding="16px">
        <Grid>
          <Text margin="5px 0px" size="14px" bold>
            미리보기
          </Text>
          <Image shape="rectangle" margin="0px 0px 20px 0px" />
        </Grid>
        <Grid>
          <Input multiLine label="게시글 내용" placeholder=" 게시글 작성" />
        </Grid>
        <Grid padding="16px 0px">
          <Button>게시물 작성</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
