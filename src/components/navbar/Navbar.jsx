//react-shortcut : rafc
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className="container border py-4">
        <div className="row d-flex align-items-center">
          <div className="col-4 d-flex d-none d-lg-block border">
            <Image
              className="me-2"
              src="/facebook.png"
              alt="facebook"
              width={24}
              height={24}
            />
            <Image
              className="me-2"
              src="/youtube.png"
              alt="youtube"
              width={24}
              height={24}
            />
            <Image
              className="me-2"
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image
              className="me-0"
              src="/tiktok.png"
              alt="tiktok"
              width={24}
              height={24}
            />
          </div>
          <h2 className="fw-bold col-4 border text-center m-0">lucassublog</h2>
          <div className="border d-flex align-items-center gap-3 col-4">
            <ThemeToggle />
            <Link href="/" className="d-none d-md-block fs-7">
              Homepage
            </Link>
            <Link href="/" className="d-none d-md-block fs-7">
              Contact
            </Link>
            <Link href="/" className="d-none d-md-block fs-7">
              About
            </Link>
            <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
