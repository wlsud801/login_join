import axios from "axios";

// 회원가입 : 회원정보 추가
const addMembers = async (newMember) => {
    try{
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`, newMember);
        return response.data;
    } catch(error) {
        console.error(error);
    }
    
};

export { addMembers };