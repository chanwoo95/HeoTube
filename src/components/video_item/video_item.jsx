import React, { useEffect, useState, useRef } from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, displayType, onVideoClick }) => {
  // const display = displayType === "list" ? "styles.list" : "styles.normal";
  // const slideRef = useRef();

  // useEffect(() => {
  //   slideRef.current.style.transition = "all 0.2s linear";
  //   slideRef.current.style.transform = `translateX(-${idx}00%)`;
  // });

  const display = displayType === "grid" ? "styles.grid" : "styles.list";

  return (
    <div className={`${display}`}>
      <li className={styles.container} onClick={() => onVideoClick(video)}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={video.snippet.thumbnails.medium.url}
            alt="thumbnails"
          />
          <div className={styles.metadata}>
            <h2 className={styles.title}>{video.snippet.title}</h2>
            <p className={styles.channel}>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoItem;
