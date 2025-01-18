import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Poster from '@/components/Poster';

function index({ data, loading }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    waitForAnimate: false,
    appendDots: (dots) => {
      if (!dots || dots.length === 0) {
        return (
          <div className="dots-container">
            <ul className="custom-dots"></ul>
          </div>
        );
      }

      const totalDots = dots.length;

      // Find the active dot index
      const activeIndex = dots.findIndex(dot =>
        dot.props.className.includes("slick-active")
      );

      // Ensure that we are always showing 3 dots and that the active dot is included
      let start = activeIndex - 1; // Show one dot before the active dot
      let end = activeIndex + 2; // Show one dot after the active dot

      // Adjust the start and end indices to always show 3 dots
      if (start < 0) {
        start = 0;
        end = Math.min(start + 3, totalDots); // Ensure we don't exceed the total number of dots
      }
      if (end > totalDots) {
        end = totalDots;
        start = Math.max(0, totalDots - 3); // Adjust the start to show the last 3 dots
      }

      return (
        <div className="dots-container">
          <ul className="custom-dots">
            {dots.slice(start, end)} {/* Always show 3 dots */}
          </ul>
        </div>
      );
    },
    customPaging: (i) => (
      <div className="custom-dot"></div>
    ),
  };

  if (loading) {
    return <div key={index} className='border border-customBlue  rounded-[50px] bg-white/20  min-w-fit max-w-[600px] min-h-[300px]  overflow-hidden'><div className="min-w-[600px] min-h-[500px] bg-slate-200 animate-pulse text-center ">Loading...</div>
    </div>
  }

  if (!data) {
    return <div>No data available</div>; 
  }

  return (
    <section>
      <div className="slider-container min-w-[600px] max-w-[600px] min-h-[600px]">
        <Slider {...settings} className='min-w-[600px] max-w-[600px]'>
          {data.map((poster, index) => (
            <div key={index} className='border border-customBlue  mb-10 rounded-[50px] bg-white/20  min-w-fit max-w-[600px] min-h-[300px]  overflow-hidden'>
              <Poster data={poster} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default index
