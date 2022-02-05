//키 값 기준으로 쿠키 저장된 값 가져오는 함수
const getCookie = (name) => {
  //쿠키 값 가져오기
  let value = "; " + document.cookie;
  // 키값 기준으로 파싱
  let parts = value.split(`; ${name}=`); // 예시:[aa=xx / aaa; abbb=ssss;]
  // value를 return!
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

//쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  //날짜 만들어주기
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  //저장!
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

//만료일 전으로 설정해서 쿠키 삭제하기
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);

  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
