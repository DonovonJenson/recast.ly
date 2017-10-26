var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(data) {
      callback(data);
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
