import React from 'react';
import MovieMedia from '../MovieMedia/MovieMedia';
import './styles.scss'

const MovieItem = ({movie, playerTrigger}) => {
    return <div className="row">
            <div className="col col-md-6">
                <MovieMedia playerTrigger={playerTrigger} media={movie.Media}></MovieMedia>
            </div>
            
            <div className="col col-md-6 align-self-end">
            <p className="title">{movie.Title}</p>
                     <p className="pubdate">{movie.PubDate}</p>

                     {movie.Tags.map(({Title}) =>
                    <a className="tag" href="#">#{Title} | </a>
                    )}

                     <p className="description">{movie.Description}</p>
                  
               
            </div>
               
    </div>
}

export default MovieItem;