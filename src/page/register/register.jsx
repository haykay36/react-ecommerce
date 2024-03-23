import AuthWrapper from "../../component/auth/AuthWrapper";
import CustomInput from "../../component/inputs/custominput/CustomInput";
import "./register.css";

const Register = () => {
  return (
    <AuthWrapper page="register">
      <div className="signUp-cont">
        <form>
          <h2>Sign up</h2>
          <CustomInput
            type="text"
            label="Full name"
            placeholder="Ali Uthman"
            htmlFor="Full name"
          />
          <CustomInput
            type="Email"
            label="Email"
            placeholder="user@gmail.com"
            htmlFor="email"
          />
          <CustomInput
            type="password"
            label="Password"
            placeholder="********"
            htmlFor="password"
          />
          <CustomInput
            type="password"
            label="Confirm Password"
            placeholder="********"
            htmlFor="password"
          />
          <div className="btn-con">
            <button type="submit" className="submit-bt">
              SIGNUP
            </button>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Register;
