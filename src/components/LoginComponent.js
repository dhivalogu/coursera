import React from 'react';
import "./css/login.css";
import Logo from './images/logo.png';
import Main from './images/main.jpg';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';
class LoginComponent extends React.Component
{
   constructor()
   {
     super();
     this.state={
       username:'',
       password:''
     }
   }
   updateUsername(newname)
   {
     this.setState({username : newname});
   }
   updatePassword(newname)
   {
     this.setState({password : newname});
   }
   redirectTo= () =>
   {
     this.props.history.push("/courses");
   }
    render()
    {
      return ( 
        <div className="parent">
        <div className="flex-container">
        <div className="twoflex">
        
        <img className="bimg" src={Logo}/>
       <form>
            <h1>Sign In</h1>   
            <InputComponent   type="text" className="username" placeholder="Username" value={this.state.username} onChange={event=>this.updateUsername(event.target.value)}/>
            <InputComponent   type="password" className="password" placeholder="Password" value={this.state.password} onChange={event=>this.updatePassword(event.target.value)}/><br/>
            <ButtonComponent name="Login" type="button" value="LOGIN" onClick={this.redirectTo}/><br/>
            
        </form>
        
        </div>
        <div className="oneflex">
        
        </div>
    </div>
    </div>
      );
    }
}
export default LoginComponent;