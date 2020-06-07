export const getUsers = (state) => {
    return state.findUsersPage.users
};
export const getPageSize = (state) => {
    return state.findUsersPage.pageSize
};
export const getTotalUserCount = (state) => {
    return state.findUsersPage.totalUserCount
};
export const getActivePage = (state) => {
    return state.findUsersPage.activePage
};
export const getIsFetching = (state) => {
    return state.findUsersPage.isFetching
};
export const getIsFollowed = (state) => {
    return state.findUsersPage.isFollowed
};
