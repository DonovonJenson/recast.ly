var VideoDetails = (props) => (
  <div className="video-player-details" onClick={props.onClick}>
    <h3>{props.video.snippet.title}</h3>
    <div>{props.description}</div>
  </div>
);

window.VideoDetails = VideoDetails;