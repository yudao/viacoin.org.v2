import preact from 'preact';

import Media from 'components/roadmap/media'

import "./styles.sass"

const Config = require('Config');

/** @jsx preact.h */

export default class LayoutRoadmap extends preact.Component {

  medias() {
    const icons = {
      // FastAndSecureIcon,
      // DigitIcon,
      // AtomicSwapIcon,
      // ScalableIcon,
      // LightningNetworkIcon
    };
    return Config.roadmap.map((r, idx) => {
      // const Icon = icons[f.icon];
      return <Media title={r.title} text={r.text} progress={r.progress} />
    })
  }

  render() {
    const medias = this.medias();
    return <section class="section is-roadmap">
      <div class="container">
        <h3 class="title is-1 has-text-weight-light" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <strong>2018</strong>
          FOCUSED ON <strong>
          IMPROVING</strong> <strong>PERFORMANCE</strong>
        </h3>
        <div class="timeline is-centered">
          { medias }
        </div>
      </div>
    </section>;
  }
}
