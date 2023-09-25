import "./Signin.css";
import { ReactComponent as GithubIcon } from "../SVG/carbon_logo-github.svg";
import { ReactComponent as TwiterIcon } from "../SVG/carbon_logo-twiter.svg";
import { ReactComponent as LinkedinIcon } from "../SVG/carbon_logo-linkedin.svg";
import { ReactComponent as DiscordIcon } from "../SVG/carbon_logo-discord.svg";
import { ReactComponent as GoogleIcon } from "../SVG/google_icon.svg";
import { ReactComponent as AppleIcon } from "../SVG/apple_icon.svg";
import SigninOption from "./SigninOption";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";


const SignIn = () => {
  const navigate  = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const signin = useGoogleLogin({
    onSuccess: credentialResponse => {
      // const fetchUserInfo = await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${credentialResponse.access_token}`}});
      localStorage.setItem("access-token",credentialResponse.access_token);
      navigate("/");

    },
    onError: () => {
      console.log('Login Failed');
    },
  });
  return (
    <div className="signin-page">
      <div className="left">
        <span>Board.</span>
        <div className="brand">
          <h1>Board.</h1>
        </div>
        <div className="social-links">
          <GithubIcon />
          <TwiterIcon />
          <LinkedinIcon />
          <DiscordIcon />
        </div>
      </div>
      <div className="right">
        <div className="signin-box">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <div className="signin-form-box">
            <div className="signin-options">
              <SigninOption brandIcon={<GoogleIcon />} brandName="Google" signin={ signin } />
              <SigninOption brandIcon={<AppleIcon />} brandName="Apple"  />
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input type="text" id="email" />
              <label htmlFor="pass">Password</label>
              <input type="password" id="pass" />
              <p className="link">Forgot password?</p>
              <button type="submit" >Sign In</button>
            </form>
            <p>
              Don't have an account? <span className="link">Register here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn ;
