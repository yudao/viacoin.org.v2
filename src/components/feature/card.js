import preact from 'preact';

import './styles.sass'

/** @jsx preact.h */

export default class FeatureCard extends preact.Component {
  render(props, state) {
    const {title, text } = props;
    const icon = this.props.children[0];
    const classes = "card is-vcentered has-text-centered";
    return <article class={ classes }>
      <div class="card-image">
        <span class="is-icon">{ icon }</span>
        <h4 class="title is-4">{ title }</h4>
      </div>
      <div class="card-content">
        <div class="content">{ text }</div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">...</p>
      </footer>
    </article>
  }
}
