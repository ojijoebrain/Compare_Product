"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
    { imgUrl: '/assets/images/hero-6.jpg', alt: 'smart phone' }, 
    { imgUrl: '/assets/images/hero-7.png', alt: 'headphone' },
    { imgUrl: '/assets/images/hero-8.png', alt: 'computer' },
    { imgUrl: '/assets/images/hero-9.png', alt: 'smart electronics' },
    { imgUrl: '/assets/images/hero-10.png', alt: 'camera' },
    { imgUrl: '/assets/images/hero-11.png', alt: 'compuertset' },
    { imgUrl: '/assets/images/hero-12.png', alt: 'frezzer' },
    { imgUrl: '/assets/images/hero-13.png', alt: 'monitor' },
];

const HeroCarousel = () => {
  return (
    <div className="carousel-container">
        <Carousel 
            showThumbs={false}
            //autoPlay
            infiniteLoop
            //interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image) => (
                <div key={image.alt} className="carousel-item"> 
                    <Image 
                        src={image.imgUrl} 
                        alt={image.alt}
                        width={484} 
                        height={484} 
                        className="object-contain" 
                    />
                </div>
            ))}
        </Carousel>
    </div>
  );
}

export default HeroCarousel;
