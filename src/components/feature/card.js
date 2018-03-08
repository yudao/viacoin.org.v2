import preact from 'preact';

import './styles.sass'

/** @jsx preact.h */

export default class FeatureCard extends preact.Component {
  constructor() {
    super();
    this.toggleActiveClass= this.toggleActiveClass.bind(this);
    this.activeClassName = "is-active";
    this.state = {
      activeClass: ""
    }
  }

  toggleActiveClass(e) {
    const currentActiveClass = (this.state.activeClass == "") ? this.activeClassName : "";
    e.target.closest(".columns").querySelectorAll("." + this.activeClassName).forEach(c => {
      c.classList.remove(this.activeClassName);
    });
    this.setState({ activeClass: currentActiveClass });
  }

  render(props, state) {
    const {title, text } = props;
    const icon = this.props.children[0];
    // const isActive = this.state.activeClass || false;
    const classes = "card is-vcentered has-text-centered " + this.state.activeClass;
    return <article class={ classes } onclick={ this.toggleActiveClass }>
      <div class="card-image">
        <span class="is-icon">{ icon }</span>
        <h4 class="title is-4">{ title }</h4>
      </div>
      <div class={"card-content " + this.state.activeClass}>
        <div class="content">{ text }</div>
      </div>
      <footer class={"card-footer " + this.state.activeClass}>
        <p class="card-footer-item">...</p>
      </footer>
    </article>
  }
}
