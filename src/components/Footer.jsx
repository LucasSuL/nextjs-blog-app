import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container border">
      <div className="mt-5 row">
        <div className="col-12 col-sm-6 col-lg-8 border">
          <div className="d-flex align-items-center gap-3">
            <Image width={45} height={45} src="/logo.png"></Image>
            <p className="m-0">Lucassublog</p>
          </div>
          <p className="mt-3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aut libero facilis consectetur commodi amet ab nostrum numquam!
            Quas, non?
          </p>
          <div className="d-flex gap-2">
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
            <Image src="/youtube.png" alt="youtube" width={24} height={24} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between border mt-3">
          <div className="d-flex flex-column">
            <p className="fw-bold">Links</p>
            <li className="d-flex flex-column fs-7 text-soft gap-2">
              <a>Homepage</a>
              <a>Blog</a>
              <a>About</a>
              <a>Contact</a>
            </li>
          </div>
          <div className="d-flex flex-column">
            <p className="fw-bold">Tags</p>
            <li className="d-flex flex-column fs-7 text-soft gap-2">
              <a>Style</a>
              <a>Fashion</a>
              <a>Coding</a>
              <a>Travel</a>
            </li>
          </div>
          <div className="d-flex flex-column">
            <p className="fw-bold">Social</p>
            <li className="d-flex flex-column fs-7 text-soft gap-2">
              <a>Facebook</a>
              <a>Instagram</a>
              <a>Tiktok</a>
              <a>Youtube</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
