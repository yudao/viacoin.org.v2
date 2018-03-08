import preact from 'preact';

// import Slider from "./slider"
import Slider from 'components/slider/container';
import Navbar from 'components/nav/bar';
import ScrollingChevrons from 'components/icons/scrolling-chevrons';

import "./styles.sass"
import './bg-intro.jpg';

const Config = require('Config');

/** @jsx preact.h */

export default class LayoutIntro extends preact.Component {
  render() {
    return <section class="hero is-fullheight is-intro">
      <div class="hero-head">
        <Navbar />
      </div>
      <div class="hero-body is-paddingless">
        <Slider config={Config.slider.slides} />
      </div>
      <div class="hero-foot" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1600">
        <ScrollingChevrons />
      </div>
    </section>;
  }
}
