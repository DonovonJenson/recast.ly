class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData,
      description: exampleVideoData[0].snippet.description,
      autoplay: false
    };

    this.onSearch('');  
  }

  onAutoPlayClick() {
    this.setState({autoplay: !this.state.autoplay});
  }

  onTitleClick(video) {
    this.setState({video: video, description: video.snippet.description});
  }

  onSearch(term) {
    var app = this;
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: term, 
      max: '5',
    }, 
      function(data) {
        app.setState({
          videos: data,
          video: data[0],
          description: data[0].snippet.description
        });
      } 
    );
  }

  onDetails() {
    searchVideo(this.state.video.id.videoId, (data) => {
      this.setState({description: data[0].snippet.description});
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchClick={this.onSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">  
            <VideoPlayer video={this.state.video} description={this.state.description} autoplay={(this.state.autoplay) ? 1 : 0} detailsListener={this.onDetails.bind(this)} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} autoPlayListener={this.onAutoPlayClick.bind(this)} clickListener={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
