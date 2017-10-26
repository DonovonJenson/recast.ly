class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    };

    this.onSearch('');
  }

  onTitleClick(video) {
    this.setState({video: video});
  }

  onSearch(term) {
    var app = this;
    searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: term, 
      maxResults: '5', 
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    }, 
      function(data) {
        console.log(data);
        app.setState({
          videos: data.items,
          video: data.items[0]
        });
      } 
    );
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
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickListener={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
