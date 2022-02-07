import React from "react";
import { Grid, Button, Text } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  //세션 있는지 체크
  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;
  // console.log(is_session);

  //로그인 상태이면
  // if (is_login && is_session) {
  //   return (

  //   );
  // }
  if (is_login) {
    return (
      <Permit>
        <React.Fragment>
          <Grid padding="16px">
            <Grid is_flex>
              <Text bold>Home</Text>
              <Grid is_flex width="60%">
                <Button>내정보</Button>
                <Button margin="0px 10px">알림</Button>
                <Button
                  _onClick={() => {
                    dispatch(userActions.logoutFB());
                  }}
                >
                  로그아웃
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </Permit>
    );
  }

  //로그인 상태가 아니면
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Text bold>Home</Text>
          <Grid is_flex width="50%">
            <Button
              margin="0px 10px"
              _onClick={() => {
                history.push("/login");
              }}
            >
              로그인
            </Button>
            <Button
              _onClick={() => {
                history.push("/signup");
              }}
            >
              회원가입
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
