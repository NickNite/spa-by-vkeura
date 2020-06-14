import React from 'react';
import Pagination from '../CommonFile/Pagination/Pagination';
import User from './User';
import Preloader from '../CommonFile/Preloader/Preloader';
import styles from './Users.module.css';

let Users = (props) => {
    return (<div >
        <div className={styles.pagination} id='top'>
            <Pagination totalItemCount={props.totalUserCount} pageSize={props.pageSize} newPageChanged={props.newPageChanged} activePage={props.activePage} partSize={10} />
        </div>
        {props.isFetching ? <Preloader /> : null}
        <div className={styles.users}>
            {
                props.users.map(item => <User users={item} isFollowed={props.isFollowed} unFollowUser={props.unFollowUser} followUser={props.followUser} key={item.id} />)}
        </div>
    </div >)
}

export default Users;