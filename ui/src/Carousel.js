import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';


function Carousel() {
  return (
    <div>
      <MDBCarousel showControls showIndicators dark fade>
        <MDBCarouselItem
          className='d-block'
          style={{ height: 600, width: 2000 }}
          itemId={1}
          src='http://www.dimensions-architect.com/wp-content/uploads/2014/07/Scholars-Institute-building.png'
          alt='...'
        >
        </MDBCarouselItem>
        
        <MDBCarouselItem
          className='d-block'
          style={{ height: 600, width: 2000 }}
          itemId={2}
          src='https://thumbs.dreamstime.com/b/hostel-dormitory-beds-arranged-room-98117029.jpg'
          alt='...'
        >
        </MDBCarouselItem>

        <MDBCarouselItem
          className='d-block'
          style={{ height: 600, width: 2000 }}
          itemId={3}
          src='https://thumbs.dreamstime.com/b/bunk-beds-hostel-room-54783462.jpg'
          alt='...'
        >
        </MDBCarouselItem>
      </MDBCarousel>

    </div>
  )
}

export default Carousel
