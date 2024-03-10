"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const login = () => {
  const router = useRouter()
  const { data, status } = useSession();
  if(status === 'loading'){
    return(
      <div>Loading...</div>
    )
  }
  if(status === 'authenticated'){
    router.push('/')
  }
  
  return (
    <div className="container">
      <h1>Login page</h1>
      <button className="btn btn-danger" onClick={() => signIn("google")}>
        {" "}
        Sign in with Google
      </button>
      <button className="btn btn-dark"> Sign in with Github</button>
    </div>
  );
};
export default login;
