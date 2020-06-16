import React from 'react';
import './App.css';
import Nav from './Components/Navs/Navs';
import { Route, withRouter, Switch } from 'react-router-dom';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inicializedApp } from './Redux/appReducer';
import Preloader from './Components/CommonFile/Preloader/Preloader';
import { withSuspense } from './HOCS/withSuspense';
import NotFound from './Components/NotFound/NotFound';
const LoginContainer = React.lazy(() => import('./Components/Login/LoginContainer'));
const MessagesContainer = React.lazy(() => import('./Components/Messages/MessagesContainer'));
const FindUsersContainer = React.lazy(() => import('./Components/FindUsers/FindUsersConteiner'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const News = React.lazy(() => import('./Components/News/News'));
const Setting = React.lazy(() => import('./Components/Setting/Setting'));

class App extends React.Component {

  componentDidMount() {
    this.props.inicializedApp();    // Запускаем thunk для инициализации пользователя и отображения app компоненты (Run thunk to initialize the user and display the app components)
  }

  render() {
    if (!this.props.inicialized) {  // Проверяем инициализацию пользователя (Check user initialization)
      return <Preloader />
    }
    return (
      <div className='appMain'>
        <HeaderContainer />
        <Nav />
        <div className='appMain_content'>
          <Switch>
            <Route exact path='/' render={withSuspense(LoginContainer)} />
            <Route path='/login' render={withSuspense(LoginContainer)} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/messages' render={withSuspense(MessagesContainer)} />
            <Route path='/news' render={withSuspense(News)} />
            <Route path='/music' render={withSuspense(Music)} />
            <Route path='/findusers' render={withSuspense(FindUsersContainer)} />
            <Route path='/setting' render={withSuspense(Setting)} />
            <Route path='*' render={() => <NotFound />} />
          </Switch>
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
  (App);                                       //(We wrap the app in withRouter for Route to work correctly, connect the store to get the state and start thunk from appReducer)


