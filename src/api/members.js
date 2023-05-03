import axios from "axios";

// 회원가입 : 회원정보 추가
const addMembers = async (newMember) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, newMember)
};

export { addMembers };