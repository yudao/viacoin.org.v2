import preact from 'preact';

import GaugeCircular from "components/gauge/circle";

import './styles.sass'

/** @jsx preact.h */

export default class RoadmapMedia extends preact.Component {
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
    // e.target.closest(".columns").querySelectorAll("." + this.activeClassName).forEach(c => {
    //   c.classList.remove(this.activeClassName);
    // });
    this.setState({ activeClass: currentActiveClass });
  }

  notificationColor(progress) {
    if(progress <= 30) {
      return "is-danger";
    }else if(progress <= 60) {
      return "is-warning";
    }else if(progress < 100) {
      return "is-info";
    }else {
      return "is-success";
    }
  }

  render(props, state) {
    const {progress, title, text} = props;
    const icons = this.props.children[0];
    const colorClass = this.notificationColor(progress)
    const classes = "timeline-item " + colorClass + " " + this.state.activeClass;

    return <article class={ classes } data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
      <div class="timeline-marker">
        <GaugeCircular value={ progress } classes={ colorClass } />
      </div>
      <div class="timeline-content">
        <p class="heading">{ title }</p>
        <p>{ text }</p>
      </div>
    </article>
  }
}
