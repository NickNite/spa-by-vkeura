import React from 'react';
import './App.css';
import Nav from './Components/Navs/Navs';
import { Route, withRouter } from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inicializedApp } from './Redux/appReducer';
import Preloader from './Components/CommonFile/Preloader/Preloader';
import { withSuspense } from './HOCS/withSuspense';
const LoginContainer = React.lazy(() => import('./Components/Login/LoginContainer'));
const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));
const FindUsersContainer = React.lazy(() => import('./Components/FindUsers/FindUsersConteiner'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const News = React.lazy(() => import('./Components/News/News'));
const Setting = React.lazy(() => import('./Components/Setting/Setting'));

class App extends React.Component {

  componentDidMount() {
    this.props.inicializedApp();// запускаем thunk для инициализации пользователя и отображения app компоненты
  }

  render() {
    if (!this.props.inicialized) {// Проверяем инициализирован ли пользователь
      return <Preloader />
    }
    return (
      <div className='appMain'>
        <HeaderContainer />
        <Nav />
        <div className='appMain_content'>
          <Route path='/login' render={withSuspense(LoginContainer)} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/messages' render={withSuspense(MessagesContainer)} />
          <Route path='/news' render={withSuspense(News)} />
          <Route path='/music' render={withSuspense(Music)} />
          <Route path='/findusers' render={withSuspense(FindUsersContainer)} />
          <Route path='/setting' render={withSuspense(Setting)} />
        </div>
      </div>
    )
  }
};

let mapStateToProps = (state) => {
  return {
    inicialized: state.app.initialized
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, { inicializedApp }))// Оборачиваем app в withRouter для корректной работы Route, коннектим store для получения стейта и запуска thunk из appReducer
  (App);
