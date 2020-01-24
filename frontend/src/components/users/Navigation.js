import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon, Menu} from 'antd';
import {LogoutUserAC} from '../../redux/creators';

class Navigation extends Component {
  
  render () {
    return (<Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">
          <Icon type="code"/> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/slider">
          <Icon type="copy"/> Slider
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/game">
          <Icon type="snippets"/> AppartmentDesigh
        </Link>
      </Menu.Item>
      
      {this.props.isLogin ? (<Menu.Item style={{float: 'right'}}>
        <Link to="/logout" onClick={async (e) => {
          e.preventDefault ();
          localStorage.removeItem ('login');
          let response = await fetch (`/logout`, {
            method: 'get', headers: {
              'Content-Type': 'application/json',
            }
          });
          let result = await response.json ();
          this.props.logout (!result);
          this.props.history.push ('/login');
        }}>
          <Icon type="logout"/> Logout
        </Link>
      </Menu.Item>) : (<Menu.Item style={{float: 'right'}}>
        <Link to="/login">
          <Icon type="login"/> Login
        </Link>
      </Menu.Item>)}
      
      {this.props.isLogin ? <Menu.Item style={{float: 'right'}}>
        <Icon type="user"/> {this.props.username}
      </Menu.Item> : <Menu.Item style={{float: 'right'}}>
        <Link to="/registration">
          <Icon type="form"/> Registration
        </Link>
      </Menu.Item>}
    </Menu>);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    logout: (status, user) => {
      dispatch (LogoutUserAC (status, user));
    }
  };
}

function mapStateToProps (store) {
  return {
    isLogin: store.isLogin, username: store.username
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (Navigation);