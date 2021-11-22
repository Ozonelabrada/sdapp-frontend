import React from 'react'
import Home from '../dashboard/Home';
import './login.css';
const Login = () => {
    return (
        <div className="bg-yellow">
            <h1 className="bg-blue">AI-BasedSocial
                Distancing
                Monitoring
                System </h1>
            <form className="bg-green">
                <div className="loginFormItem">
                    <label>Email</label>
                    <input type="text" placeholder="example@gmail.com" />
                </div>
                <div className="loginFormItem">
                    <label>Password</label>
                    <input type="password" placeholder="*************" />
                </div>
                <div classname="loginFormItem">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default Login
