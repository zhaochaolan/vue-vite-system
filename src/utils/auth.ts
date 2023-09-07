const TokenKey = 'LPlus-token';
const TokenPreFix = 'Bearer ';
const isLogin = () => {
	return !!localStorage.getItem(TokenKey)
}

const getToken = () => {
	return localStorage.getItem(TokenKey);
}

const setToken = (token:string) => {
	return localStorage.setItem(TokenKey,token)
}

const clearToken = () => {
	localStorage.removeItem(TokenKey)
}

export {TokenPreFix, isLogin, getToken, setToken, clearToken}
