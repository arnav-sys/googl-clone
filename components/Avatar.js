import React from "react";

function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      className={`group-hover:h-10 transition duration-150 transform hover:scale-110 rounded-full cursor-pointer ${className}`}
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;
