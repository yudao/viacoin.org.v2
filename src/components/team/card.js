import preact from 'preact';

import GithubIcon from 'components/icons/social/github';
import TwitterIcon from 'components/icons/social/twitter';
import LinkedinIcon from 'components/icons/social/linkedin';

import './styles.sass'


/** @jsx preact.h */

export default class TeamCard extends preact.Component {

  icons(config) {
    return config.icons.map((i, idx) => {
      if (i == "GithubIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><GithubIcon /></a>
      } else if (i == "TwitterIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><TwitterIcon /></a>
      } else if (i == "LinkedinIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><LinkedinIcon /></a>
      }
    });
  }

  render(props, state) {
    const {name, job, picto, icons, url, index} = props;
    const title = name + " - " + job;
    const socialIcons = this.icons(props);
    const speed = index * 100
    return <article class="card has-text-centered" data-aos-duration={speed} data-aos="fade-up" data-aos-easing="ease">
      <div class="card-image" data-aos="flip-left" data-aos-easing="ease" data-aos-anchor-placement="center-center" data-aos-duration={speed}>
        <img src={picto} alt={title} title={title} />
      </div>
      <div class="card-content" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="center-center" data-aos-duration={speed}>
        <div class="media-content has-text-centered">
          <p class="title is-4">{name}</p>
          <p class="subtitle is-6">{job}</p>
        </div>
      </div>
      <footer class="card-footer" data-aos="fade-in" data-aos-easing="ease" data-aos-anchor-placement="center-center" data-aos-duration={speed}>
        { socialIcons }
      </footer>
    </article>
  }
}
