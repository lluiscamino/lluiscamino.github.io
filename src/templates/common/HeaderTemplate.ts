import Template from '../Template';
import ConfigOptions from '../../types/ConfigOptions';

class HeaderTemplate implements Template {
  render(config: ConfigOptions): string {
    return `
      <header>
            <div class="overlay"></div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="media/video/video.mp4" type="video/mp4">
            </video>
            <div class="container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                    <div itemscope itemtype="https://schema.org/Person" class="w-100 text-white">
                        <img src="media/images/lluis.jpg" itemprop="image" height="128" width="128" class="profile-picture" alt="${config.shortName}"/>
                        <h1 itemprop="name" class="display-3">${config.shortName}</h1>
                        <p class="lead mb-0" itemprop="jobTitle">${config.shortBio}</p>
                        <div class="icons">
                            <a href="${config.socialLinks.github}" aria-label="GitHub" target="_blank" rel="noreferrer">
                                <i class="bi bi-github"></i>
                            </a>
                            <a href="${config.socialLinks.linkedin}" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="${config.socialLinks.twitter}" aria-label="Twitter" target="_blank" rel="noreferrer">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="mailto:${config.socialLinks.email}" itemprop="email" aria-label="Send me an email">
                                <i class="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
  }
}

export default HeaderTemplate;
