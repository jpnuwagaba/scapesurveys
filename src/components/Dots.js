import React from "react";
import Dot from "../components/Dot";

const Dots = ({ imageId, images }) => {
  return (
    <div className="dots-container">
      {images.map((image, id) => (
        <Dot imageId={imageId} dotId={id} key={id} />
      ))}
    </div>
  );
};

export default Dots;