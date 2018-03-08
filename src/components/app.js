import preact from 'preact';

import Particles from 'components/particles/background';
import Intro from 'components/layout/intro/section';
import Features from 'components/layout/features/section';
import Roadmap from 'components/layout/roadmap/section';

import './app.sass'
import './bg-blue-space.jpg'

import Rellax from 'rellax/rellax';
import AOS from 'aos/dist/aos';

/** @jsx preact.h */

export default class App extends preact.Component {

  componentDidMount() {
    this.rellax = new Rellax('.rellax', {center: true});
    AOS.init();
  }

  componentWillUnMount() {
    this.rellax.destroy();
  }

  render() {
    return <section class="app">
      <Particles />
      <Intro />
      <div class="has-background-blue-space">
        <Features />
        <Roadmap />
      </div>
    </section>;
  }
}
