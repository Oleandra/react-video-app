import React, { Component } from 'react';
import VideoPlayerLayout from "../components/VideoPlayerLayout";
import Video from '../components/Video';
import VideoTitle from '../components/VideoTitle';
import PlayPause from '../components/PlayPause';
import Timer from '../components/Timer';
import VideoControls from '../components/VideoControls';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/Spinner';
import Volume from '../components/Volume';
import FullScreen from '../components/FullScreen';

class VideoPlayer extends Component {
  state={
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false
  }
  togglePlay = (event) => {
    this.setState({
     pause:!this.state.pause
    })
  }
  componentDidMount(){
this.setState({
  pause: (!this.props.autoplay)
})
  }
  handleLoadedMetadata = event => {
this.video=event.target;
this.setState({
  duration: this.video.duration
})
  }
  handleTimeUpdate = event => {
    this.setState({
     currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading:true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading:false
    })
  }
  handleVolumeChange = event =>{
    this.video.volume = event.target.value;
  }
  handleFullScreenClick = event =>{
    if(!document.webkitIsFullScreen){
this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
    }
  }
setRef = element => {
  this.player = element
}
  render() {
return(
  <VideoPlayerLayout
  setRef={this.setRef}>
    <VideoTitle 
    title={this.props.title}
    />
    <VideoControls>
    <PlayPause 
    pause={this.state.pause}
    handleClick={this.togglePlay}
    />
    <Timer 
    duration={this.state.duration}
    currentTime={this.state.currentTime}
    />
    <ProgressBar 
    duration={this.props.duration}
    value={this.state.currentTime}
    handleProgressChange={this.handleProgressChange}
    />
    <Volume 
    handleVolumeChange={this.handleVolumeChange}
    />
    <FullScreen 
    handleFullScreenClick={this.handleFullScreenClick}
    />
    </VideoControls>
    <Spinner 
    active={this.state.loading}/>
<Video 
handleLoadedMetadata={this.handleLoadedMetadata}
handleTimeUpdate={this.handleTimeUpdate}
handleSeeking={this.handleSeeking}
handleSeeked={this.handleSeeked}
autoplay={this.props.autoplay}
pause={this.state.pause}
src={this.props.src}
/>
  </VideoPlayerLayout>
)

  }
}

export default VideoPlayer;