import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/navbaricon1.png";
import { AuthContext } from "../Auth/AuthContext";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
// import GoogleLogin from "react-google-login";
// import { refreshTokenSetup } from '../utils/refreshToken';
// import axios from "axios";

const Navbar = () => {
  const { token, setToken, setGoogleId } = useContext(AuthContext);
  // console.log('token', token)
  const history = useHistory();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:',);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  // async function loginWithGoogle(e) {
  //   try {
  //     await window.gapi.auth2.getAuthInstance().signIn();
  //     const auth2 = await window.gapi.auth2.getAuthInstance();
  //     if (auth2.isSignedIn.get()) {
  //       console.log("[Google] Signed in successfully!");
  //       var profile = auth2.currentUser.get();
  //       console.log(profile);
  //       window.localStorage.setItem("token", profile.getAuthResponse().id_token);
  //       window.localStorage.setItem("googleId", profile.getId());

  //       const serverRes = await axios.post(
  //         `${process.env.REACT_APP_SERVER_URL}/patients/google-login/`,
  //         {
  //           tokenId: profile.getAuthResponse().id_token,
  //         }
  //       );

  //       if (serverRes) {
  //         console.log(serverRes.data.phoneNumberExists);

  //         setToken(profile.getAuthResponse().id_token);
  //         setGoogleId(profile.getId());

  //         if (serverRes.data.phoneNumberExists === true) {
  //           history.push("/patient");
  //         } else {
  //           history.push("/patient/update-phone");
  //         }
  //       }
  //       else {
  //         const err = {err : "Server Didn't respond"}
  //         throw err;
  //       }
  //     }
  //   } catch (err) {
  //     console.log("Navbar.js -> loginWithGoogle")

  //     console.log(`[Google] Some error occurred while signing in! ${JSON.stringify(err)}`);
  //   }
  // }

  // function signOutGoogle() {
  //   // Different logic for doctor and patient

  //   // Patient logic
  //   if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
  //     window.gapi.auth2.getAuthInstance().signOut().then(() => {
  //       console.log("[Google] Signed out successfully!");
  //       window.localStorage.removeItem("token");
  //       window.localStorage.removeItem("googleId");
  //       setToken(null);
  //       setGoogleId(null);
  //       history.push("/");
  //     }).catch((err) => {
  //     console.log("Navbar.js -> signOutGoogle")

  //       console.log(`[Google] Some error occurred while signing out! ${err}`);
  //     });
  //   }

  //   // Doctor logic
  //   else {
  //     window.localStorage.removeItem("token");
  //     console.log("[Doctor] Signed out successfully!");
  //     setToken(null);
  //     history.push("/");
  //   }
  // }
  const responseGoogle = async(response) => {
    //console.log(response);
     const userObject = jwt_decode(response.credential);

     console.log(userObject);
     console.log(response.credential);
     localStorage.setItem('user', JSON.stringify(userObject));
     window.localStorage.setItem("googleId", userObject.sub);
     const serverRes = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/patients/google-login/`,
      {
        tokenId: response.credential,
      }
    );

    if (serverRes) {
      console.log(serverRes.data.phoneNumberExists);

      setToken(response.credential);
      setGoogleId(userObject.sub);

      if (serverRes.data.phoneNumberExists === true) {
        history.push("/patient");
      } else {
        history.push("/patient/update-phone");
      }
    }
    else {
      const err = {err : "Server Didn't respond"}
      throw err;
    }
    //  const { name, sub, picture } = userObject;
    //  const doc = {
    //    _id: sub,
    //    _type: 'user',
    //    userName: name,
    //    image: picture,
    //  };
    //  console.log('doc', doc)
     
    //  client.createIfNotExists(doc).then(() => {
    //    navigate('/', { replace: true });
    //  });
 
   }

  return (
    <nav
      className="navbar navbar-dark bg-dark navbar-expand-lg pl-4 pr-4 w-100 "
      style={{ backgroundColor: " #1a1a1a" }}
    >
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          alt=""
          width="30"
          height="24"
          className="d-inline-block align-top mr-2 mt-1"
        ></img>
        Hospital Management System
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto text-light bg-dark">
          <li className="navbar-item" style={{ textAlign: "right" }}>
            <link to="/" className="nav-link " style={{ padding: 0 }} />
            {/* {!token && ( */}
            <GoogleOAuthProvider 
                clientId="318149998650-1q80e414061fkp2288fb80v07useq66m.apps.googleusercontent.com"
                // clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                scope="profile"
                redirect_uri="http://localhost:3000/patient"
                >
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
              
            />
            </GoogleOAuthProvider>
              {/* <button
                onClick={loginWithGoogle}
                className="btn btn-outline-primary"
              >
                Login As A Patient
              </button>
            )}
            {token && (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={signOutGoogle}
              >
                Logout
              </button> */}
            {/* )} */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
