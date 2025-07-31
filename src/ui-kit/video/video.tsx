import Image from "next/image";
import styles from "./video.module.css";
import { useRef, useState } from "react";

const Video = ({ url }: any) => {
  const refElement = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  const playButtonHandler = () => {
    setIsActive(!isActive);
    isActive ? refElement.current?.pause() : refElement.current?.play();
  };

  return (
    <div onClick={playButtonHandler} className={styles.videoContainer}>
      <div
        style={isActive ? { display: "none" } : { display: "block" }}
        className={styles.videoPlayContainer}
      >
        <Image
          className={styles.videoPlayImage}
          src={"/play.svg"}
          width={50}
          height={50}
          alt=""
        />
      </div>
      <video
        ref={refElement}
        className={styles.videoContainerItem}
        width="100%"
        controls={false}
        loop={true}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
