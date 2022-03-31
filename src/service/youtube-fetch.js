class YoutubeFetch {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async search(video) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&regionCode=KR&q=${video}&type=video&key=${this.key}`,
      this.getRequestOptions
    );

    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos/?part=snippet%2C%20statistics&chart=mostPopular&maxResults=12&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    );

    const result = await response.json();
    return result.items;
  }
}

export default YoutubeFetch;
