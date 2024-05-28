import {Component} from 'react'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return (
      <div className="prime-video-container">
        <img
          className="prime-video-image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />

        <div className="slider-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo

/*
(
            <div className="movies-container">
              <h1 className="movies-heading">Comedy Movies</h1>
              {this.renderComedyMovies(eachList)}
            </div>
          ),
*/
