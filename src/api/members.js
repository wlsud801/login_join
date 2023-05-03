import axios from "axios";

// 로그인 API, method : post, url : login
const login = async (userIdPw) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}login`,
      userIdPw
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};
// 회원가입 : 회원정보 추가
const addMembers = async (newMember) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}register`,
      newMember
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { login, addMembers};
