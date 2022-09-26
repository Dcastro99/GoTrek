import React from "react";
import Location from "../../assets/images/map1.png";

// console.log(Location);

const MapFunction = () => {
  // Import result is the URL of your image
  return (
    <img
      className="img"
      width={300}
      height={300}
      mode="fit"
      src={Location}
      alt="Location"
    />
  );
};
export default MapFunction;
