import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

// Use your own Youtube API KEY here by getting it on https://developers.google.com/youtube/
const API_KEY = 'YOUR YOUTUBE API KEY HERE';

// Create a new component and produce some html.
class App extends Component {

  constructor (props) {
      super(props);

      this.state = { videos: [],
      selectedVideo : null };

      this.videoSearch = this.videoSearch.bind(this); // bind actual "this" to make use of "this" inside videoSearch method

      this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // our added npm package youtube-api-search and it's call
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      
      this.setState({
        videos: videos,
        selectedVideo: videos[0]});
      
    })
  }

  render() {
    // makes it being called only every 300milliseconds to delay while typing
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    )
  }
}

// Take generated HTML and put it on the page (in the DOM!).
ReactDOM.render(<App />, document.querySelector('.container'));
