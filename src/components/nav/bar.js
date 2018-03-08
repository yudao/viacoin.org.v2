import preact from 'preact';

import './styles.sass'

import Logo from 'components/logo/picture';
import Hamburger from 'components/icons/hamburger';

/** @jsx preact.h */

export default class Navbar extends preact.Component {
  render() {
    return <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <Logo circle="true" text="true" />
        </a>
        <Hamburger />
      </div>
    </nav>;
  }
}
