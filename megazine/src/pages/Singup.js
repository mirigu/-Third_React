import React from "react";
import { Button, Grid, Input, Text } from "../elements";

const Singup = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="30px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input label="아이디" placeholder=" 아이디를 입력해주세요." />
        </Grid>
        <Grid padding="10px 0px">
          <Input label="닉네임" placeholder=" 닉네임을 입력해주세요." />
        </Grid>
        <Grid padding="10px 0px">
          <Input label="비밀번호" placeholder=" 비밀번호를 입력해주세요." />
        </Grid>
        <Grid padding="10px 0px">
          <Input
            label="비밀번호확인"
            placeholder=" 비밀번호를 다시 입력해주세요."
          />
        </Grid>
        <Grid padding="16px 0px">
          <Button>회원가입하기</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Singup;
