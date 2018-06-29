import preact from 'preact';

// import Slider from "./slider"
import Slider from 'components/slider/container';
import Navbar from 'components/nav/bar';
import ScrollingChevrons from 'components/icons/scrolling-chevrons';

import "./styles.sass"
import './pictures/bg-intro.jpg';
import './pictures/ledger.png';
import './pictures/copay.png';

/** @jsx preact.h */

export default class LayoutIntro extends preact.Component {
  render(props, state) {
    const {config} = props;
    return <section class="hero is-fullheight is-intro" data-aos="hide" data-aos-easing="ease-in-out-cubic" data-aos-anchor-placement="center-top">
      <div class="hero-head">
        <Navbar marketcap={config.coinmarketcap} />
      </div>
      <div class="hero-body is-paddingless">
        <Slider config={config} />
      </div>
      <div class="hero-foot" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="1600">
        <ScrollingChevrons />
      </div>
    </section>;
  }
}
