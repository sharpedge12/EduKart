import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/drthsaowz/image/upload/v1740481135/assets/qekszfydguilhcf3lsdq.jpg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/drthsaowz/image/upload/v1740481465/assets/jfyivzea7pxwdsy0laf6.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/drthsaowz/image/upload/v1740481786/assets/itjpiactx06wil5fj4ie.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/drthsaowz/image/upload/v1740482475/assets/arslc6i9gjut0mxcmbyz.png"
            style={{width:"200px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/drthsaowz/image/upload/v1740482618/assets/snd9l0elyzpverurspgg.png"
            style={{width:"180px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
