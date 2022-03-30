import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, youtube, displayType, idx, onVideoClick }) => {
  // const display = displayType === "normal" ? styles.normal : styles.list;
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          displayType={displayType}
          idx={idx}
          onVideoClick={onVideoClick}
        />
      ))}
    </ul>
  );
};

export default VideoList;
