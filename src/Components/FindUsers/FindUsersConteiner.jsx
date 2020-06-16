import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, unFollowUser, followUser } from '../../Redux/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOCS/withAuthRedirect';
import { getUsers, getPageSize, getTotalUserCount, getActivePage, getIsFetching, getIsFollowed } from '../../Redux/usersSelectors';

//Контейнерная компонента для отображения списка пользователей (Container component for displaying a list of users)
class FindUsers extends React.Component {

    componentDidMount() {
        let { activePage, pageSize } = this.props;
        this.props.requestUsers(activePage, pageSize); //Показывает определенное количество пользователей на активной странице (Shows a certain number of users on the active page)
    };

    newPageChanged(newPage) {
        let { pageSize } = this.props;
        this.props.requestUsers(newPage, pageSize); //Переключает страницы с определенным количеством пользователей (Switch pages with a certain number of users)
    };

    render() {
        return <div>
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                activePage={this.props.activePage}
                newPageChanged={this.newPageChanged.bind(this)}
                isFollowed={this.props.isFollowed}
                unFollowUser={this.props.unFollowUser}
                followUser={this.props.followUser}
                isFetching={this.props.isFetching}
            />
        </div>
    }
};

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        activePage: getActivePage(state),
        isFetching: getIsFetching(state),
        isFollowed: getIsFollowed(state),
    }
};


let newDispatchToProps = {
    requestUsers,
    unFollowUser,
    followUser,
};


export default compose(
    connect(mapStateToProps, newDispatchToProps),
    withAuthRedirect
)(FindUsers);