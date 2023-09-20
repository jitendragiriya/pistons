import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import a from "../assets/carousel/a.png";
import b from "../assets/carousel/b.png";
import c from "../assets/carousel/c.png";
import d from "../assets/carousel/d.png";

const data = [a, b, c, d];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OurCarousel = () => {
  return (
    <div className="sm:grid grid-cols-2 p-8 aboutus">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" 
        autoPlay={true}
      >
        {data?.map((d) => (
          <div key={d}>
            <img src={d} width={"100%"} />
          </div>
        ))}
      </Carousel>
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">ABOUT PISTONS </h2>
        <p className="text-[13px]">
          Established in 1897, our beloved fountain pen haven, 'PISTONS,' has
          been a haven for pen enthusiasts for generations. With a century-long
          dedication to fine writing instruments, we've bridged tradition and
          modernity, offering a curated selection of vintage and contemporary
          fountain pens. Our little shop, nestled in the heart of town,
          continues to inspire a love for the art of writing, connecting past
          and present through the timeless elegance of ink on paper.
        </p>
      </div>
    </div>
  );
};

export default OurCarousel;
