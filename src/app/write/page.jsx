"use client";

import  { useEffect, useState } from "react";
import Image from "next/image";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();

  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);

    const upload = () => {
      const name = new Date().getTime() + file.name; // Make the name unique
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  // Change 'Lucas Dev' to 'lucas-dev'
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="container mt-4">
      <input
        class="form-control form-control-lg color-cust"
        theme="bubble"
        type="text"
        placeholder="Title"
        aria-label=".form-control-lg example"
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option selected>Open this select menu</option>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>

      <div className="d-flex align-items-center  mt-4 gap-3">
        <div className="">
          <Image
            className=" border rounded-5"
            role="button"
            src="/plus.png"
            alt=""
            width={30}
            height={30}
            onClick={() => setOpen(!open)}
          ></Image>
        </div>
        {open && (
          <div className="d-flex  gap-3">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="image" role="button">
              <div>
                <Image
                  src="/image.png"
                  alt="upload an image"
                  width={30}
                  height={30}
                  className=" "
                ></Image>
              </div>
            </label>
            <div role="button">
              <Image
                src="/external.png"
                alt=""
                width={27}
                height={28}
                className=" "
              ></Image>
            </div>
          </div>
        )}
      </div>

      {/* <ReactQuill
        // className="color-cust"
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Tell your story..."
      /> */}

      <textarea
        class="form-control mt-3"
        id="exampleFormControlTextarea1"
        placeholder="Tell your story..."
        rows="5"
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button className="btn btn-success" onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};
export default WritePage;
