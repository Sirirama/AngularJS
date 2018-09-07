import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyB13PsM6NG9Y9nplJbzgNvfoO1tGjusM1o';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('football');
        
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch_Loadash = _.debounce( term => { this.videoSearch(term)}, 300);
        return (
                <div>
                    <SearchBar onSearchTermChange={ videoSearch_Loadash } />
                    <VideoDetail vItem={this.state.selectedVideo} />
                    <VideoList 
                    video={this.state.videos} 
                    onSelecteVideo={ (videoSelect) => this.setState({selectedVideo: videoSelect})}
                    />
                </div>
               )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

/*
 * used const keyword, the value should not re-assign.
 * Functional components does not have state object and render method. We can directly using return statement with Parentheses
 * Use ReactDOM render method having two parameters are App instance and document object where it render the template.
 *
 * We are using class based component inside the functional component.
 * */
