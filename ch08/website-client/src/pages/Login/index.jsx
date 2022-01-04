import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';

@connect(({ login }) => ({
    login
}))
export default class UserLogin extends React.Component {
    onChange(type, value) {
        let payload = {};
        payload[type] = value.target.value;
        this.props.dispatch({
            type: 'login/overrideStateProps',
            payload
        })
    }
    login() {
        this.props.dispatch({
            type: 'login/login',
        })
    }
    register() {
        this.props.dispatch({
            type: 'login/register',
        })
    }
    render() {
        const { login } = this.props;
        const { username, password } = login;
        return (
            <div>
                username <Input
                    onChange={this.onChange.bind(this, 'username')}
                    value={username} />
                password <Input.Password
                    onChange={this.onChange.bind(this, 'password')}
                    value={password} />
                <Button onClick={this.login.bind(this)}> login </Button>
                <Button onClick={this.register.bind(this)}> register </Button>
            </div>
        );
    }
}