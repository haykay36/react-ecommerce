/* eslint-disable react/prop-types */
import "./auth.css";
// import LogoIcon from './icons/LogoIcon';
import LogoIcon from "../../assets/logo.png";

const AuthWrapper = ({ children, page }) => {
  return (
    <div className="auth-container">
      <div className="logo-cont">
        <img src={LogoIcon} alt="" />
      </div>
      <div className="child-cont">{children}</div>
      <div className="footer">
        {page === "register" ? (
          <p>
            Already have an account ? <a href="#">sign in!</a>
          </p>
        ) : (
          <p>
            Don’t have an account? <a href="#">Sign up!</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthWrapper;
