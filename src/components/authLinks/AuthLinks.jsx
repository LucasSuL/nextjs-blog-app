"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {status} = useSession()
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className="fs-7">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="fs-7">
            Write
          </Link>
          <Link href="" className="fs-7" onClick={signOut}>
            Logout
          </Link>
        </>
      )}
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <Link href="">Logout</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
