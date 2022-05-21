import './App.css';
import './styles.css';
import {useState} from "react";
import { useMediaQuery } from 'react-responsive'
// import logo from './logo.svg';
// import Signup from ./
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

function App() {
  const [newClass, setClass]=useState("");
  const [currentState,setcurrentState]= useState(false);

  const signUpFunction =() => {

	setClass("right-panel-active");
	setcurrentState(!currentState);
}




const signInFunction= () => {
	setClass("");
	setcurrentState(!currentState);
} 

	return (
    <>
<div className={`container ${newClass}`} id="container">
	<div className="form-container sign-up-container ">
		<form action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="social"><i class="fab fa-github"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>-
			<div className="social-container">
				<a href="#" className="social"><i class="fab fa-github"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className={`overlay-panel overlay-left ${currentState===false? "colorClass":""}`}>
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button onClick={signInFunction} className="ghost" id="signIn">Sign In</button>
			</div>
			<div className={`overlay-panel overlay-right ${currentState===true? "colorClass":""}`}>
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button onClick={signUpFunction} className="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</>
  );
}

export default App;
