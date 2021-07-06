import React, { useState } from 'react';
import Player from '../Player/Player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import './styles.scss';

const MovieMedia = ({ media, playerTrigger }) => {


    const baseUrl = "http://lucas-movie-app.azurewebsites.net/";

    const showPlayer= e => {
        playerTrigger(baseUrl + media.Video);
    }

    switch (media.MediaToDisplay) {
        case "Image":
            return <div><img className="img" src={baseUrl + media.Images[0]} alt="image" /></div>

        case "Images":
            return <div><ul>
                {media.Images.map(image => <li key="">
                    <img className="img" src={baseUrl + image} alt="image" />
                </li>)}
            </ul></div>

        case "Video":
            return <div  className="video"><video>
                <source src={baseUrl + media.Video} type="video/mp4" />
            </video>
            <button onClick={showPlayer} className="show-player-btn"><FontAwesomeIcon icon={faPlayCircle} className="play-icon"></FontAwesomeIcon></button>
            </div>

        case "EmbedVideo":
            return <div><iframe className="embedVideo" src={baseUrl + media.EmbedVideoUrl} ></iframe></div>

        default:
            return <div>Media</div>

    }
}

export default MovieMedia;