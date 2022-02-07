//아이디(이메일) 형식 체크
export const emailCheck = (email) => {
  let re = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([0-9a-zA-Z])*.[a-zA-Z]*/;
  return re.test(email);
};

//비밀번호 형식 체크(최소8자, 하나이상의 문자, 하나의 숙자 및 하나의 특수문자)
export const pwdCheck = (pwd) => {
  let re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(pwd);
};
