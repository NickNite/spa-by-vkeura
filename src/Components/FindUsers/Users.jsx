import React from 'react';
import Pagination from '../CommonFile/Pagination/Pagination';
import User from './User';
import Preloader from '../CommonFile/Preloader/Preloader';

let Users = (props) => {

    return (<div>
        <Pagination totalItemCount={props.totalUserCount} pageSize={props.pageSize} newPageChanged={props.newPageChanged} activePage={props.activePage} partSize={10} />
        {props.isFetching ? <Preloader /> : null}
        {
            props.users.map(item => <User users={item} isFollowed={props.isFollowed} unFollowUser={props.unFollowUser} followUser={props.followUser} key={item.id} />)}
    </div >)
}

export default Users;