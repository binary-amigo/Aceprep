import React from "react";
import Form from "./LogIn/Form";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  return (
    <div>
      <GoogleOAuthProvider clientId="616250879564-fcmts04ko7j71r4hi1tkpg9jlf13etkf.apps.googleusercontent.com">
        <Form />
      </GoogleOAuthProvider>
      ;
    </div>
  );
}

<GoogleLogin
  onSuccess={cred => {
    console.log(cred)
  }}
  onerror={() => {
    console.log("error");
  }}
/>  ;



export default Login;
