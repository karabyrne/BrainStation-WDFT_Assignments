import React, { Component } from 'react';
// import {Link} from 'react-router';

class AudioPlayer extends Component {
    render() {
        // console.log("this.props.routes[0].songs = ", this.props.routes[0].songs)
        return (
            <div>
                <audio className="audio" controls src={this.props.routes.songs[this.props.source]} /> 
            </div>
        );
    }
}





export default AudioPlayer;