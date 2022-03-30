import React, { useEffect, useState } from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, youtube }) => {
  const [videoData, setvideoData] = useState({
    channelImg: "",
  });

  useEffect(() => {
    youtube
      .getChannelData(video.snippet.channelId) //
      .then((item) =>
        setvideoData({ channelImg: item[0].snippet.thumbnails.default.url })
      );
  }, [video]);

  return (
    <div>
      <iframe
        id={`${video.id}`}
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="fullscreen"
      ></iframe>

      <div className={styles.detail}>
        <h1>{video.snippet.title}</h1>
        <img className={styles.channelImg} src={videoData.channelImg} />
        {/* <p>{`조회수 ${video.statistics.viewCount}회`}</p> */}
        {/* <p>{video.snippet.publishedAt}</p> */}
        <h2 className={styles.channelTitle}>{video.snippet.channelTitle}</h2>
        <pre className={styles.description}>{video.snippet.description}</pre>
      </div>
    </div>
  );
};

export default VideoDetail;
