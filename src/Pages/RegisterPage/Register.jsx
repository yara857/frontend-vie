import React from 'react'
import './register.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Google from './assets/logos_google-icon.svg'
import Apple from './assets/ic_baseline-apple.svg'
import Facebook from './assets/logos_facebook.svg'
import {Link} from 'react-router-dom'
const Register = () => {
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            '_self'
        );
    };
   
    return (
        <div className="parent">
            <Navbar></Navbar>
            <div className="login-and-register">
                <div className="login">
                    <h1>LOGIN</h1>
                    <p className='pw'>Forgot your password?</p>
                    <form action="" className='Form'>
                        <input type="email" name="" placeholder='Email' className='inputField' id="" /><br></br>
                        <input type="password" name="" placeholder='Password' className='inputField' id="" /><br></br>
                        <button className='login-button'><p className="login-text">LOGIN</p></button>
                    </form>
                    <div className="frames">
                        <button onClick={googleAuth} className="frame-1">
                            <img src={Google} alt="" className='icon' />
                        </button>
                        <div className="frame-1" id="icon-1">
                            <img src={Apple} alt="" className='icon' />
                        </div>
                        <div className="frame-1" id="icon-1">
                            <img src={Facebook} alt="" className="icon" />
                        </div>
                    </div>
                    <p className='text'>
                        By clicking 'Log In' you agree to our website Terms & Conditions, <br /> Vie Privacy Notice and
                        Terms & Conditions.</p>
                </div>

                <div className="register">
                    <h1 className='header'>REGISTER</h1>
                    <p className="sw">Sign up with</p>
                    <div className="frames">
                        <button onClick={googleAuth} className="frame-1">
                            <img src={Google}  alt="" className='icon' />
                        </button>
                        <div className="frame-1" id="icon-1">
                            <img src={Apple} alt="" className='icon' />
                        </div>
                        <div className="frame-1" id="icon-1">
                            <img src={Facebook} alt="" className="icon" />
                        </div>
                    </div>
                    <p className="sw">
                        OR
                    </p>
                    <form action="" className="Form">
                        <h2 className='header-2' id="header-2">
                            Your Name
                        </h2>
                        <input type="text" name="" placeholder='First Name' className='inputField' id="" /><br></br>
                        <input type="text" name="" placeholder='Last Name' className='inputField' id="" /><br></br>
                        <h2 className='header-2'>
                            Gender
                        </h2>
                        <div className="gender">
                            <input type="radio" name="myRadioButton" id="radioButton1" class="square-radio" />
                            <label for="radioButton1">Male</label>
                            <input type="radio" name="myRadioButton" id="radioButton1" class="square-radio" />
                            <label for="radioButton1">Female</label>
                            <input type="radio" name="myRadioButton" id="radioButton1" class="square-radio" />
                            <label for="radioButton1">Other</label>
                        </div>
                        <h2 className='header-2'>
                            Login Details
                        </h2>
                        <input type="email" name="" placeholder='Email' className='inputField' id="" /><br></br>
                        <input type="password" name="" placeholder='Password' className='inputField' id="" /><br></br>
                        <p className="small">Minimum 8 characters with at least one uppercase, one lowercase, one special <br />character and a number</p>
                        <div className="privacy">
                            <input type="radio" name="myRadioButton" id="radioButton2" class="square-radio" />
                            <label for="radioButton2">
                                By clicking 'Log In' you agree to our website Terms & Conditions, <br /> Vie Privacy Notice and
                                Terms & Conditions.</label>
                        </div>
                        <button className='login-button'><p className="login-text">Register</p></button>
                    </form>
                </div>
            </div>
            <div class="vl"></div>

        </div>
    )
}

export default Register