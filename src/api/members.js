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
    console.error(error);
  }
};

export { login };
