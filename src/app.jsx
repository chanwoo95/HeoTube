import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  // const [currentSearch, setcurrentSearch] = useState(null);
  const [selectedVideo, setselectedVideo] = useState(null);
  // const [videoData, setvideoData] = useState({
  //   channelImg: "",
  // });

  const search = (query) => {
    youtube
      .search(query) //
      .then(
        (item) => {
          setVideos(item);
          setselectedVideo(null);
        }

        // setcurrentSearch(item);
      );
  };

  const onVideoClick = (video) => {
    setselectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((item) => setVideos(item));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onChange={search} />
      <div className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} youtube={youtube} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            displayType={selectedVideo ? "grid" : "list"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
