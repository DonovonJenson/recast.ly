var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet',
    },
    success: function(data) {
      callback(data.items);
    }
  });
};

var searchVideo = (id, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {
      id: id,
      key: window.YOUTUBE_API_KEY,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    },
    success: function(data) {
      //console.log(data);
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
