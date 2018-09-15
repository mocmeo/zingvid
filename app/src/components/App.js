import React, { Component } from 'react';
import VideoForm from '../containers/VideoForm';
import VideoPlayer from '../containers/VideoPlayer';
// import { BrowserRouter, Route } from 'react-router-dom';
// import {connect} from 'react-redux';
// import * as actions from '../actions';

class App extends Component {
    render() {
        return (
            <div>
                <VideoForm />
                <VideoPlayer />
            </div>
        );
    }
}

export default App;