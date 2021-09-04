import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
    return (
        <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20 bottom-0" />
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={4000}
        >
            <div>
                <img loading="lazy" src="/primeGamingAd.jpg" alt="" /> 
            </div>
            <div>
            <img loading="lazy" src="/echoBuds.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/haloAmazonAd.jpg" alt="" />
            </div>
        </Carousel>
        </div>
    );
}

export default Banner;