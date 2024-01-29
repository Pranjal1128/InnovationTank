import React from "react"; 
import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, login} from "../../actions/userActions.js";
import { useRef } from "react";
import { useEffect } from "react";
import logo from "../../Assets/images/NITrr.png";

function Login() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const codeRef = useRef(null);
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.authReducer);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/portfolios");
  //   }
  //   if (error) {
  //     alert(error);
  //   }

  //   dispatch(isLoggedIn());
  // }, [isAuthenticated, error, dispatch, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const code = codeRef.current.value;

    console.log(code, name);
    dispatch(login(code, name));
  };
 
  return (
    <div className="entry">
      <div className="container">
        <div className="nit-logo">
          <img src={logo} alt="" width="140px" height="150px" />
        </div>
        <div className="card">
          <form className="content">
            <h3>Sign In</h3>
            <p>
              <input type="text" placeholder="Name" ref={nameRef} />
            </p>
            <p>
              <input type="text" placeholder="Code" ref={codeRef} />
            </p>
            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
      <div className="powered">Powered by <span className="icell">Innovation Cell</span></div>
    </div>
  );
}

export default Login;
