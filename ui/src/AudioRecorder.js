import React, { Component } from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import axios from 'axios'

export default class AudioRecorder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }


  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }



  


  onStop = (data) => {
    this.setState({
      audioData: data
    })
    // convert blob url to wav file 
    //TO-DO: see if we can process audio without saving 
    const formData = new FormData() 
    formData.append('audio-file',data.blob) 
    axios.post('http://localhost:8000/api/audioUpload', formData,{
      headers:{
        'Content-Type': 'multipart/form-data',

      }
    })

    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (
      <div>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor='rgb(255,255,255)'
        />
        <audio
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <button id='record' onClick={this.start}>
          Start
        </button>
        <button id='stop' onClick={this.stop}>
          Stop
        </button>
      </div>
    )
  }
}
