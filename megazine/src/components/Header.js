import React from "react";
import { Grid, Button, Text } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = (props) => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie("user_id");

    console.log(cookie);

    //쿠키가 있으면?
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  //로그인 상태이면
  if (is_login) {
    return (
      <React.Fragment>
        <Grid padding="16px">
          <Grid is_flex>
            <Text bold>Home</Text>
            <Grid is_flex width="60%">
              <Button>내정보</Button>
              <Button margin="0px 10px">알림</Button>
              <Button
                _onClick={() => {
                  deleteCookie("user_id");
                }}
              >
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  //로그인 상태가 아니면
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
