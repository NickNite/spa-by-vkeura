import Friends from './Friends';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        friends: state.messagePage.dialogData
    }
}



const MyFriends = connect(mapStateToProps, null)(Friends);

export default MyFriends;