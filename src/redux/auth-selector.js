const getUserName = state => state.auth.user.name;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRefreshCurrentUser = state => state.auth.isRefreshCurrentUser;
const AuthSelector = { getUserName, getIsLoggedIn, getIsRefreshCurrentUser };
export default AuthSelector;
