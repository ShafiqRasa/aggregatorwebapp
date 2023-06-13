import React from "react";

const BounceLoader = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default BounceLoader;
