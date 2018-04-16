import preact from 'preact';

import Logo from 'components/logo/picture';

import './styles.sass'

/** @jsx preact.h */

export default class Sidebar extends preact.Component {
  render(props, state) {
    return <aside class="menu" role="menu" aria-label="menu">
      <p class="menu-label">NAVIGATION</p>
      <ul class="menu-list">
        <li><a>Home</a></li>
        <li><a>Features</a></li>
        <li><a>Roadmap</a></li>
        <li><a>Team</a></li>
        <li><a>Wallet</a></li>
        <li><a>Resources</a></li>
      </ul>
    </aside>;
  }
}
