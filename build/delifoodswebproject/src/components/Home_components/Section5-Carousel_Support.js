import React from 'react';


function CarouselImage1({ text, src }) {
  return (
    <img
        // src={'https://i.ytimg.com/vi/Dj-3ScWxCGo/sddefault.jpg'}
        src={require("../../asset/18k.jpg")}
        alt={'siuuuu'}
        className="d-block w-100"
    />
  );
}

function CarouselImage2({ text, src }) {
  return (
    <img
        // src={'https://storage.googleapis.com/cdn-entrade/bovagau-meme/shocked_black_guy_1713933316'}
        src={require("../../asset/25k.jpg")}
        alt={'ohmagod'}
        className="d-block w-100"
    />
  );
}

function CarouselImage3({ text, src }) {
  return (
    <img
        // src={'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84e0213f984705f55cfe89b82b'}
        src={require("../../asset/35k.jpg")}
        alt={'ricardomilos'}
        className="d-block w-100"
    />
  );
}

export { CarouselImage1, CarouselImage2, CarouselImage3 };

const CarouselImages = { CarouselImage1, CarouselImage2, CarouselImage3 };
export default CarouselImages;