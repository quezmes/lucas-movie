import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-regular-svg-icons";
import { faBackward, faForward, faVolumeUp, faCog, faExpand, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Player = ({ onclose, video }) => {

  const vidRef = useRef(null);

  const [btnPlay, setBtnPlay] = useState(faPlayCircle)
  const [barDuration, setBarDuration] = useState(0);
  const [duration, setDuration] = useState(0)

  const handlePlayVideo = () => {
    if (vidRef.current.paused){
      vidRef.current.play();
      setBtnPlay(faPauseCircle);
    }
    else{
      vidRef.current.pause();
      setBtnPlay(faPlayCircle);
    }
      
  }


  // useEffect(() => {
  //   setDuration(vidRef.current.currentTime)
   
  // }, [vidRef])

  // useEffect(() => {
  //   setBarDuration(vidRef.current.currentTime);
  // }, [vidRef === null ?  vidRef.current.currentTime: null])

  return <div className="player">
    <button className="button-close" onClick={onclose}><FontAwesomeIcon icon={faTimes} className="close-icon"></FontAwesomeIcon></button>
    <div className="c-video">
      <video ref={vidRef} className="player-video" autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="controls">
        <div className="bar">
          <div className="color-bar" style={{width : barDuration}}></div>
        </div>
        <div className="buttons">
          <div className="volume-buttons">
            <button className="volume-btn"><FontAwesomeIcon icon={faVolumeUp} className="volume-icon" /></button>
          </div>

          <div className="media-buttons">
            <button className="backward-btn"><FontAwesomeIcon icon={faBackward} className="backward-icon" /></button>
            <button id="play-pause-btn" onClick={handlePlayVideo}><FontAwesomeIcon icon={btnPlay} className="play-icon" /></button>
            <button id="forward-btn"><FontAwesomeIcon icon={faForward} className="forward-icon" /></button>
            {/* <h1>{duration}</h1> */}
          </div>

          <div className="settings-buttons">
            <button className="settings-btn"><FontAwesomeIcon icon={faCog} className="settings-icon" /></button>
            <button className="quality-btn" >HD</button>
            <button className="expand-btn"><FontAwesomeIcon icon={faExpand} className="expand-icon" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Player;