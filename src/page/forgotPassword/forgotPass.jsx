import React from "react";
import FullyCustomInput from "../../component/inputs/fullycustominput/FullyCustomInput";
import MainWarpper from "../../component/layput/MainWrapper/MainWarpper";
import "./forgotPass.css";

const ForgotPass = () => {
  return (
    <MainWarpper>
      <div className="forgotpass-cont">
        <div className="forgot-password-form-box">
          <h1>Forgot Password?</h1>

          <form className="forgot-password">
            <div className="box-cont-inner">
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
            </div>
          </form>
        </div>
      </div>
    </MainWarpper>
  );
};

export default ForgotPass;
