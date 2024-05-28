import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            className="popup-close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={30} color="#231f20" aria-label="close" />
          </button>
          <ReactPlayer className="popup-videourl" url={videoUrl} controls />
        </>
      )}
    </Popup>
  )
}
export default MovieItem
