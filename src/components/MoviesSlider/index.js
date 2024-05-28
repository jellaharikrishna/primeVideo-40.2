import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
}

const MoviesSlider = props => {
  const {moviesList} = props

  return (
    <Slider {...settings}>
      {moviesList.map(eachList => (
        <MovieItem key={eachList.id} movieDetails={eachList} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
