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
      part: 'snippet'
    },
    success: function(data) {
      callback(data.items);
    }
  });
  // fetch('https://www.googleapis.com/youtube/v3/search', { data: options}).then(
  //   function(response) {
  //     if (response.ok) {
  //       console.log(response.blob());
  //       return response.blob();
  //     }
  //   });
};

window.searchYouTube = searchYouTube;
