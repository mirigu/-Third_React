import React from "react";
import { Grid, Button, Text } from "../elements";

const Header = () => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Text bold>Home</Text>
          <Grid is_flex width="50%">
            <Button margin="0px 10px">로그인</Button>
            <Button>회원가입</Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
