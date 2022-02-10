import React from "react";
import { Grid, Button, Text } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import Permit from "../shared/Permit";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  //로그인 상태일때,
  if (is_login) {
    return (
      <Permit>
        <React.Fragment>
          <Grid padding="16px">
            <Grid is_flex>
              <Text
                bold
                _onClick={() => {
                  history.push("/");
                }}
              >
                <FontAwesomeIcon
                  icon={faHome}
                  style={{
                    fontSize: "30px",
                    margin: "0px 10px",
                    color: "#B39CD0",
                  }}
                />
              </Text>
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

  //로그인 상태가 아닐때,
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid is_flex>
          <Text
            bold
            _onClick={() => {
              history.push("/");
            }}
          >
            <FontAwesomeIcon
              icon={faHome}
              style={{ fontSize: "30px", margin: "0px 10px", color: "#B39CD0" }}
            />
          </Text>
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
