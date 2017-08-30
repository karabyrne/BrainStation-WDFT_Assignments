import React, { Component } from 'react';
import { Link } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      currentSong: 0,
      playing: false
    };


    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);

    let player = null;


  }
  
  componentDidMount(){
      this.player = document.getElementById("audio");
  }
  
  handlePlayClick= (song) => {
    // console.log("player = " , this.player);
    this.setState({
      currentSong: song,
      playing: true
    }, () => {
        this.player.play()
      }
  );
      // console.log("this.state.playing " , this.state.playing);
  }

  handlePauseClick= (song) => {
    this.player.pause()
    // console.log("player = " , this.pause);
    this.setState({
      currentSong: song,
      playing: false
    });
      // console.log("this.state.playing " , this.state.playing);
  }

   nextSong = (song) => { 
     const self = this;
    //go to next song
    // const songs = this.props.route.songs;

    //first get index of current song
    // const song = this.props.route.songs[this.state.currentSong].id

    //figure out index of next song
    const nextSong = this.props.route.songs[this.state.currentSong].id + 1;

    this.setState({
      currentSong: nextSong
    }, ()=>{
      if(self.state.playing === true) {
        self.handlePlayClick(self.state.currentSong);
      } 
    });
    // play song if already playing
    // don't play it if it's not
  };

    prevSong = (song) => { 
     const self = this;
    //go to next song
    // const songs = this.props.route.songs;

    //first get index of current song
    // const song = this.props.route.songs[this.state.currentSong].id

    //figure out index of next song
    const prevSong = this.props.route.songs[this.state.currentSong].id - 1;

    this.setState({
        currentSong: prevSong
    }, ()=>{
      if(self.state.playing === true) {
        self.handlePlayClick(self.state.currentSong);
      } 
    });

    // play song if already playing
    // don't play it if it's not
  };



  render() {
    const songs = this.props.route.songs;
    
    return (
        <div className="App">
           <h1> Audio Player </h1>
           <ul>
             <li><Link className="songsListHeader" to="/">Songs List</Link></li>
           </ul>

            <div className="currentSong">Current song: {songs[this.state.currentSong].title}</div> 

            <div className="controls btn-group">
              
              <button 
                className="btn btn-secondary"
                disabled={this.state.currentSong === 0 ? true: false}
                onClick={this.prevSong} 
              >
                <i className="fa fa-step-backward"></i>
              </button>
              
              <button 
                className="btn btn-secondary"
                onClick={()=>{this.handlePlayClick(this.state.currentSong)}}
              >
                <i className="fa fa-play"></i>
              </button> 
              
              <button 
                className="btn btn-secondary"
                onClick={()=>{this.handlePauseClick(this.state.currentSong)}}
              >
                <i className="fa fa-pause"></i>
              </button>
              
              <button
                className="btn btn-secondary"
                disabled={this.state.currentSong === songs.length -1 ? true: false}
                onClick={this.nextSong}
              >
                <i className="fa fa-step-forward"></i>
              </button>

            </div>

              <audio id="audio" className="audio" src={songs[this.state.currentSong].source} />  
          
            {React.cloneElement(this.props.children, {songs, handlePlayClick: this.handlePlayClick, handlePauseClick: this.handlePauseClick})}
         </div>
      );
    }
  }




export default App; 






