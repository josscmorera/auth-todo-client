const tokenHeaderKey = process.env.REACT_APP_HEADER_KEY;

const setUserToken = (token) => {
    localStorage.setItem(tokenHeaderKey, JSON.stringify(token));
};

const getUserToken = () => {
    const token = localStorage.getItem(tokenHeaderKey);
    return JSON.parse(token);
};

export { setUserToken, getUserToken };
