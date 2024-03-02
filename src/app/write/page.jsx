"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const write = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>write a post</h1>
      <input type="text" placeholder="Title"></input>
      <button>
        <Image
          src="/plus.png"
          alt=""
          width={16}
          height={16}
          onClick={() => setOpen(!open)}
        ></Image>
      </button>
      {open && (
        <div>
          <button>
            <Image src="/image.png" alt="" width={16} height={16}></Image>
          </button>
          <button>
            <Image src="/external.png" alt="" width={16} height={16}></Image>
          </button>
        </div>
      )}
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="tell your story"
      />
      <button className="btn btn-success">
        Publish
      </button>
    </div>
  );
};
export default write;
