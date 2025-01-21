import Carousel from 'react-bootstrap/Carousel';
import { CarouselImage1, CarouselImage2, CarouselImage3 } from './Section5-Carousel_Support.js';
import './Section5-Carousel.css'

function Section5_Carousel() {
  return (
    <div className='carousel-container'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <CarouselImage1 text="First slide" />
          <Carousel.Caption>
            <div id="heading-carousel1">First slide label</div>
            <div id="paragraph-carousel1">Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <CarouselImage2 text="Second slide" />
          <Carousel.Caption>
            <div id="heading-carousel2">Second slide label</div>
            <div id="paragraph-carousel2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <CarouselImage3 text="Third slide" />
          <Carousel.Caption>
            <div id="heading-carousel3">Third slide label</div>
            <div id="paragraph-carousel3">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Section5_Carousel;