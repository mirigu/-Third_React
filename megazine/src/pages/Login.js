import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

const Login = (props) => {
  console.log(getCookie("user_id"));
  //로그인버튼에 콜백으로 줄 로그인 함수

  const login = () => {
    setCookie("user_id", "midi", 3);
    setCookie("user_pwd", "pppp", 3);
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="30px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input label="아이디" placeholder=" 아이디를 입력해주세요." />
        </Grid>
        <Grid padding="10px 0px">
          <Input label="비밀번호" placeholder=" 비밀번호를 입력해주세요." />
        </Grid>
        <Grid padding="16px 0px">
          <Button
            _onClick={() => {
              login();
            }}
          >
            로그인하기
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
