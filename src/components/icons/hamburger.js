import preact from 'preact';

/** @jsx preact.h */

export default class Hamburger extends preact.Component {
  constructor() {
    super();
    this.toggleActiveClass= this.toggleActiveClass.bind(this);
    this.state = {
      activeClass: ""
    }
  }

  toggleActiveClass() {
    const currentActiveClass = (this.state.activeClass == "") ? "is-active" : "";
    this.setState({ activeClass: currentActiveClass });
  }

  render(props, state) {
    let classes = "hamburger hamburger--spin " + state.activeClass
    return <button class={ classes.trim() } type="button" onclick={ this.toggleActiveClass }>
      <span class="hamburger-box">
      <span class="hamburger-inner"></span>
      </span>
    </button>;
  }
}
