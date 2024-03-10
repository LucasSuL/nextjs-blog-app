"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const write = () => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState("");
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

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
      <button className="btn btn-success">Publish</button>
    </div>
  );
};
export default write;
