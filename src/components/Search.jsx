class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  updateState(event) {
    this.setState({
      text: event.target.value
    });
    _.debounce(() => this.props.searchClick(this.state.text), 500)();
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.updateState.bind(this)} />
        <button className="btn hidden-sm-down" onClick={() => this.props.searchClick(this.state.text)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
