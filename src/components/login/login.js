import React from 'react'
import './login.css';
const Login = () => {
    return (
        <div className='log'>
            <h2>AI-BasedSocial
                Distancing
                Monitoring
                System</h2>
            <form className="loginForm">
                <div className="loginFormItem">
                    <label>Email</label>
                    <input type="text" placeholder="example@gmail.com" />
                </div>
                <div className="loginFormItem">
                    <label>Password</label>
                    <input type="password" placeholder="*************" />
                </div>
                <div className="loginFormItem">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
