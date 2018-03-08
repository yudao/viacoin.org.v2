import preact from 'preact';
import AlloyFinger from 'alloyFinger';

import './styles.sass';

/** @jsx preact.h */

export default class SliderIntro extends preact.Component {
  constructor() {
    super();
    this.toggleControls = this.toggleControls.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.setSlide = this.setSlide.bind(this);
    this.hiddenClass = "is-hidden";
    this.af = null;

    this.state = {
      active: 0,
      slides: null,
      prev: null,
      next: null
    }
  }

  componentDidMount() {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slide") || [];
    const that = this;
    this.af = new AlloyFinger(slider, {
      swipe: function (evt) {
        if (evt.direction == "Right") {
          that.previous();
        } else {
          that.next();
        }
      }
    });

    if (slides.length > 0) {
      const prev = slider.querySelector(".prev");
      const next = slider.querySelector(".next");

      slides[0].classList.remove(this.hiddenClass);

      this.setState({
        slides: slides,
        prev: prev,
        next: next
      });
    }

    this.toggleControls();
  }

  componentDidUnMount() {
    this.af = this.af.destroy();
  }

  setSlide() {
    this.state.slides.forEach((element, idx) => {
      if (this.state.active == idx) {
        element.classList.remove(this.hiddenClass)
      } else {
        element.classList.add(this.hiddenClass)
      }
    });
  }

  next() {
    if (this.state.active < this.state.slides.length - 1) {
      this.state.active++
      this.setSlide();
      this.toggleControls();
    }
  }
  previous() {
    if (this.state.active > 0) {
      this.state.active--
      this.setSlide();
      this.toggleControls();
    }
  }

  toggleControls() {
    if (this.state.active == 0 ) {
      this.state.prev.classList.add(this.hiddenClass);
      this.state.next.classList.remove(this.hiddenClass);
    } else if (this.state.active == this.state.slides.length - 1) {
      this.state.prev.classList.remove(this.hiddenClass);
      this.state.next.classList.add(this.hiddenClass);
    } else {
      if (this.state.prev.classList.contains(this.hiddenClass)){
        this.state.prev.classList.remove(this.hiddenClass);
      }
      if (this.state.next.classList.contains(this.hiddenClass)){
        this.state.next.classList.remove(this.hiddenClass);
      }
    }
  }

  navigation(){
    return <div class="navigation"></div>
  }

  renderSlides(slides){
    return slides.map(slide => {
      return <div class="slide is-hidden has-text-centered" dangerouslySetInnerHTML={{__html: slide}}></div>
    });
  }

  render(props, state) {
    const slides = this.renderSlides(props.config);
    return <div class="slider">
      <div class="container">
        {slides}
      </div>
      <span class="prev" onclick={this.previous}>
        <svg viewBox="0 0 50 80">
          <polyline fill="none" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
      </span>

      <span class="next" onclick={this.next}>
        <svg viewBox="0 0 50 80">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </span>
    </div>;
  }
}
