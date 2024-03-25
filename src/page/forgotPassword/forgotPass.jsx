import React from "react";
import FullyCustomInput from "../../component/inputs/fullycustominput/FullyCustomInput";
import MainWarpper from "../../component/layput/MainWrapper/MainWarpper";
import "./forgotPass.css";

const ForgotPass = () => {
  return (
    <MainWarpper>
      <div className="forgotpass-cont">
        <div className="forgot-password-form-box">
          <form className="forgot-password">
            <h1>Forgot Password?</h1>

            <FullyCustomInput
              type="email"
              label="Email"
              htmlFor="Email"
              style=""
            />
            <div className="btn-container">
              <button type="submit" className="continue-btn">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainWarpper>
  );
};

export default ForgotPass;
