/* eslint-disable react/prop-types */
import { CartIcon } from '../../icons/AllIcons';
import './mainwrapper.css';

const MainWarpper = ({ children }) => {
  return (
    <div className="main-wrapper-container">
      <div className="main-wrapper-top-bar">
        <nav>
          <ul>
            <li className="nav-link">Home</li>
            <li className="nav-link">My Account</li>
            <li className="nav-link">Contact</li>
          </ul>
        </nav>
        <div className="top-bar-right">
          <CartIcon />
          <a href="/register">Sign up</a>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainWarpper;
