import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "../../config";

export default function GoogleButton({ text = "signin_with", onSuccess, onError }) {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="flex justify-center">
        <GoogleLogin
          text={text}
          theme="outline"
          size="large"
          shape="pill"
          width="320"
          onSuccess={onSuccess || ((cred) => console.log(cred))}
          onError={onError || (() => console.log("Google sign-in failed"))}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export function OrDivider({ children = "or continue with email" }) {
  return (
    <div className="my-7 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-slate-400">
      <span className="h-px flex-1 bg-slate-200" />
      {children}
      <span className="h-px flex-1 bg-slate-200" />
    </div>
  );
}
