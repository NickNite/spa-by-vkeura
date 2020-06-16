import Friends from './Friends';
import { connect } from 'react-redux';
//Компонента на стадии разработки (Component under development)!!!!!!!


let mapStateToProps = (state) => {
    return {
        friends: state.messagePage.dialogData
    }
}


const MyFriends = connect(mapStateToProps, null)(Friends);

export default MyFriends;