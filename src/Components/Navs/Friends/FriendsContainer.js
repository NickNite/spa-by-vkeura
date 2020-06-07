import Friends from './Friends';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        friends: state.messagePage.dialogData
    }
}

let mapDispatchToProps = (dispatch) => {

}

const MyFriends = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default MyFriends;