import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck, pwdCheck } from "../shared/common";

const Singup = (props) => {
  const dispatch = useDispatch();

  //id, pwd, 닉네임 가져오기
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const singup = () => {
    // 아이디, 유저네임, 비밀번호 값이 없으면 return
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    //아이디(이메일) 형식이 맞지 않으면,
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    //비밀번호 형식이 맞지 않으면,
    if (!pwdCheck(pwd)) {
      window.alert("비밀번호 형식이 맞지 않습니다!");
      return;
    }

    // 비밀번호와 비밀번호 확인이 다르면 return (실행 x)
    if (pwd !== pwd_check) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="30px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder=" 아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px">
          <Input
            label="닉네임"
            placeholder=" 닉네임을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px">
          <Input
            label="비밀번호"
            placeholder=" 비밀번호를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px">
          <Input
            label="비밀번호확인"
            placeholder=" 비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Button _onClick={singup}>회원가입하기</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Singup;
