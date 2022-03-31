class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 12,
        regionCode: "KR",
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 12,
        regionCode: "KR",
      },
    });
    return response.data.items;
  }

  async getVideoData(videoId) {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet, statistics",
        id: videoId,
      },
    });

    return response.data.items;
  }

  async getChannelData(channelId) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet, statistics",
        id: channelId,
      },
    });
    return response.data.items;
  }

  async getAllData()
}

export default Youtube;
