import React, {Component} from 'react';

class SongDetails extends Component {
    render() {
        return (
            <div>
                <div className="songTitle">{this.props.routes[0].songs[this.props.params.id].title}</div>
                <div>{this.props.routes[0].songs[this.props.params.id].description}</div>
                <button
                    className="btn btn-success"
                    style={{marginRight: 10, marginBottom: 5, marginTop: 10}}
                    onClick={()=>this.props.handlePlayClick(this.props.params.id)}
                >
                    <i className="fa fa-play"></i>
                </button>            
            </div>
        )
    }
}

export default SongDetails;