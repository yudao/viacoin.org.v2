import preact from 'preact';

import Logo from 'components/logo/picture';

import Card from 'components/feature/card';

import FastAndSecureIcon from 'components/icons/fast-and-secure';
import DigitIcon from 'components/icons/digit';
import AtomicSwapIcon from 'components/icons/atomic-swap';
import ScalableIcon from 'components/icons/scalable';
import LightningNetworkIcon from 'components/icons/lightning-network';

import "./styles.sass"

const Config = require('Config');

/** @jsx preact.h */

export default class LayoutFeatures extends preact.Component {

  cards() {
    const icons = {
      FastAndSecureIcon,
      DigitIcon,
      AtomicSwapIcon,
      ScalableIcon,
      LightningNetworkIcon
    }
    return Config.features.map(f => {
      const Icon = icons[f.icon];
      return <div class="column is-narrow rellax" data-rellax-speed="3" data-aos="fade-up" data-aos-easing="ease">
        <Card title={f.title} text={f.text}><Icon /></Card>
      </div>
    })
  }

  render() {
    const cards = this.cards();
    return <section class="container is-features">
      <div class="has-text-centered rellax" data-rellax-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-bottom">
        <Logo text="true" />
        <h3 class="title is-1 has-text-weight-light">
          4 YEARS OF EXPERIENCE <strong>FEATURES FOR THE FUTURE</strong>
        </h3>
      </div>
      <div class="columns is-centered rellax" data-rellax-speed="4" data-aos="fade-down" data-aos-easing="ease" data-aos-anchor-placement="top-bottom">
        {cards}
      </div>
    </section>;
  }
}
