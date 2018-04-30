import preact from 'preact';

import Logo from 'components/logo/picture';
import WindowsIcon from 'components/icons/os/windows';
import MacOsIcon from 'components/icons/os/macosx';
import AndroidIcon from 'components/icons/os/macosx';
import LinuxIcon from 'components/icons/os/linux';
import VialectrumIcon from 'components/icons/wallets/vialectrum';
import ViacoinPaperWalletIcon from 'components/icons/wallets/viacoin-paper-wallet';
import MobileIcon from 'components/icons/wallets/mobile';
import LedgerIcon from 'components/icons/wallets/ledger';
import CopayIcon from 'components/icons/wallets/copay';

import './bg-blue-cosmos.jpg';
import './styles.sass'

/** @jsx preact.h */

export default class LayoutTeam extends preact.Component {

  resource(obj) {
    const icons = {
      WindowsIcon,
      MacOsIcon,
      VialectrumIcon,
      ViacoinPaperWalletIcon,
      MobileIcon,
      LedgerIcon,
      LinuxIcon,
      CopayIcon,
      AndroidIcon
    };
    const Icon = icons[obj.icon];
    return <article class={obj.classes} data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-delay={obj.delay} data-aos-anchor-placement="top-center">
      <div class="box">
        { obj.version &&
          <span class="tags has-addons">
            <span class="tag is-light">Via Core</span>
            <span class="tag">{obj.version}</span>
          </span>
        }
        <h4 class="title is-6">{obj.title}</h4>
        <p class="is-icon"><Icon /></p>
        <p>
          <a class="button is-large is-link" href={obj.url} target="_blank">
            {obj.button}
          </a>
        </p>
      </div>
    </article>
  }

  wallets() {
    return {
      first: this.props.config.first.map(p => {
        p.classes = "column"
        return this.resource(p)
      }),
      third: this.props.config.third.map(p => {
        p.classes = "column"
        return this.resource(p)
      }),
    }
  }

  render(props, state) {
    const wallets = this.wallets();
    return <section class="is-wallet">
      <div class="container">
        <div class="has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            <span class="has-text-weight-light">THE</span> WALLETS
          </h3>
        </div>
        <div class="columns is-first-wallet has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column">
            <h4 class="title is-4">1<sup>st</sup> PARTY WALLET</h4>
            <div class="columns">
              { wallets.first }
            </div>
          </div>
        </div>
        <div class="columns is-third-wallet has-text-centered"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column">
            <h4 class="title is-4">3<sup>rd</sup> PARTY WALLET</h4>
            <div class="columns">
              { wallets.third }
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}
