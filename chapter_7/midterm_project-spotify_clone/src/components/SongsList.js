import React, { Component } from 'react';
import {Link} from 'react-router';

class SongsList extends Component {
    render() {
        // console.log("this.props.routes[0].songs = ", this.props.routes[0].songs)
        return (
            <div>
                {this.props.songs.map((song, index) => 
                    <div key={song.id}>
                        <button
                            className="btn btn-success"
                            style={{marginRight: 10, marginBottom: 5}}
                            onClick={()=>this.props.handlePlayClick(index)}
                        >
                            <i className="fa fa-play"></i>
                        </button>
                        <Link to={'/songs/' + song.id}>{song.title}</Link>
                    </div>
                )}
            </div>
        )
    }
}

export default SongsList;