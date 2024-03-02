import React from "react";

const Comments = () => {
  const authenticated = "authenticated";
  {
    authenticated === "authenticated" ? (
      <div>write a comment</div>
    ) : (
      <div>pls login first</div>
    );
  }
  return (
    <div className="container">
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
