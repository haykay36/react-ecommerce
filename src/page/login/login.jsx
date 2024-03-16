import AuthWrapper from '../../component/auth/AuthWrapper';
import CustomInput from '../../component/inputs/custominput/CustomInput';
import { GoogleIcon } from '../../component/icons/AllIcons';
import './login.css';

const Login = () => {
  return (
    <AuthWrapper>
      <div className="login-container">
        <form>
          <CustomInput
            type="email"
            label="Email"
            placeholder="Enter your email"
            htmlFor="Email"
          />
          <CustomInput
            type="password"
            label="Password"
            placeholder="Enter your password"
            htmlFor="Password"
          />
          <div className="form-bottom">
            <a href="#">Forget password?</a>
          </div>
        </form>
        <div className="btn-cont">
          <button type="submit" className="submit-btn">
            LOGIN
          </button>
          <div className="google-login">
            <GoogleIcon /> <a>Log in with your google account</a>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
