'use client'

import { signIn, useSession } from "next-auth/react";
import React from "react";

const login = () => {

  const {data, status} = useSession()
  console.log(data,status);
  return (
    <div className="container">
      <h1>Login page</h1>
      <button className="btn btn-danger" onClick={()=>signIn('google')}> Sign in with Google</button>
      <button className="btn btn-dark"> Sign in with Github</button>
    </div>
  );
};
export default login;
