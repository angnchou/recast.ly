import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.example.js';
import Search from './Search.js';
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      selectedVideo: exampleVideoData[0]
    };
  }

  handleClick(video) {
    this.setState({
      selectedVideo: video
    });
  }

  handleSearch(search) {
    var options = {
      querry: search,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
      
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this)} />
          </div>
        </nav>
        
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selectedVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.handleClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


