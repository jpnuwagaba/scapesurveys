import React, { Component } from "react";
import Slide from "./Slide";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import Dots from "../components/Dots";
import SliderHeader from "./SlideHeader";
// import "./styles.scss";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "./img/surveyor-img.jpg",
        "./img/engineering.jpg",
        "./img/landing-img.jpeg"
      ],
      currentIndex: 0,
      translateValue: 0
    };
  }

  componentDidMount() {
    this.startCarousel();
  }

  startCarousel = () => {
    this.carouselInterval = setInterval(() => {
      this.goToNextSlide();
    }, 15000);
  };

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  autoplay = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      window.setInterval(() => {
        this.goToNextSlide();
      }, 3000);
    }
  };

  handleDotClick = i => {
    const { index, translateValue, setTranslateValue, setIndex } = this.props;

    // Do nothing if someone clicks on the currently active dot
    if (i === index) return;

    // If the number taken from the i argument passed into handleDotClick is
    // less than the currently active dot, we obviously need to move backwards to a previous slide.
    if (i > index) {
      setTranslateValue(-i * this.slideWidth());
    }
    // We need to go forward to a particular slide
    else {
      setTranslateValue(translateValue + (index - i) * this.slideWidth());
    }

    setIndex(i);
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            display: "inline-block",
            backgroundColor: "#333",
            transition: "background-color 100ms, color 100ms"
          }}
          autoplay={this.autoplay}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>
        <SliderHeader />
        <Dots
          imageId={currentIndex}
          images={images}
          dotClick={this.handleDotClick}
        />
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}