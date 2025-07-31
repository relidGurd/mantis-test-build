import Image from "next/image";
import styles from "./video.module.css";
import { useRef, useState } from "react";

const Video = ({ url }: any) => {
  // const refElement = useRef<HTMLVideoElement>(null);
  // const [isActive, setIsActive] = useState(false);

  // const playButtonHandler = () => {
  //   setIsActive(!isActive);
  //   isActive ? refElement.current?.pause() : refElement.current?.play();
  // };

  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.videoContainerItem}
        width="100%"
        controls={false}
        loop={true}
        autoPlay={true}
        muted={true}
      >
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
