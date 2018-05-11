import preact from 'preact';
import AOS from 'aos/dist/aos';
import numbro from 'numbro';
import analytics from 'universal-ga';

import SplashScreen from 'components/splash/screen';
import Particles from 'components/particles/background';
import Intro from 'components/layout/intro/section';
import Features from 'components/layout/features/section';
import Roadmap from 'components/layout/roadmap/section';
import Wallet from 'components/layout/wallet/section';
import Team from 'components/layout/team/section';
import Resources from 'components/layout/resources/section';
import Footer from 'components/layout/footer/section';
import Sidebar from 'components/nav/side';

import './app.sass'
import './bg-blue-space.jpg'

/** @jsx preact.h */

export default class App extends preact.Component {
  constructor() {
    super();
    this.state = {
      config: {},
      loading: true
    }
  }

  config() {
    let host = '//' + window.location.hostname + '/' + window.location.pathname + '/';
    if(process.env.NODE_ENV == 'development') host = '';
    fetch(host + 'config.json')
    .then(res => res.json())
    .then(data => this.setState({config: data}))
    .then(fetch('https://api.coinmarketcap.com/v1/ticker/viacoin/')
    .then(res => res.json())
    .then(data => {
      this.state.config.coinmarketcap = data[0];
      this.state.config.slider.slides = this.state.config.slider.slides.map(s => {
        return s.replace(
          "{rank}",
          numbro(this.state.config.coinmarketcap.rank).format({
            output: "ordinal"
          })
        )
        .replace(
          "{market_cap_usd}",
          numbro(this.state.config.coinmarketcap.market_cap_usd).format({
            average: true,
            mantissa: 2
          })
        )
        .replace(
          "{24h_volume_usd}",
          numbro(this.state.config.coinmarketcap["24h_volume_usd"]).format({
            average: true,
            mantissa: 2
          })
        )
      });
      this.setState({config: this.state.config, loading: false})
    }))
  }

  componentDidMount() {
    this.config();
    AOS.init();
    if(process.env.NODE_ENV != 'development') {
      analytics.initialize('UA-119053871-1');
      analytics.pageview('/');
    }
  }

  render(props, state) {
    if (state.loading) return <SplashScreen />;
    return <section class="app">
      <Particles />
      <Sidebar />
      <a id="home"></a>
      <Intro config={state.config} />
      <a id="features"></a>
      <Features config={state.config.features} />
      <a id="roadmap"></a>
      <Roadmap config={state.config.roadmap} />
      <a id="wallets"></a>
      <Wallet config={state.config.wallets} />
      <a id="team"></a>
      <Team config={state.config.team} />
      <a id="resources"></a>
      <Resources config={state.config.resources} />
      <a id="contact"></a>
      <Footer config={state.config.donate} />
    </section>;
  }
}

/*
import Ribbon from 'components/ribbon/ribbon';
<Ribbon classes="top-right sticky shadow">
  <a href="https://github.com/viacoin/documents/tree/master/whitepapers" target="_blank">WhitePaper</a>
</Ribbon>
*/
//
