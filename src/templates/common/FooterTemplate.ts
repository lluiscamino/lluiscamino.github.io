import Template from '../Template';
import ConfigOptions from '../../types/ConfigOptions';

class FooterTemplate implements Template {
  render(config: ConfigOptions): string {
    return `
      <footer>
          <div class="container">
              <div class="copyright">${
                config.shortName
              } © ${new Date().getUTCFullYear()}</div>
              <div class="small-social-icons">
                  <a href="${
                    config.socialLinks.github
                  }" aria-label="GitHub" title="GitHub" target="_blank" rel="noreferrer">
                      <i class="bi bi-github"></i>
                  </a>
                  <a href="${
                    config.socialLinks.linkedin
                  }" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer">
                      <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="${
                    config.socialLinks.twitter
                  }" aria-label="Twitter" title="Twitter" target="_blank" rel="noreferrer">
                      <i class="bi bi-twitter"></i>
                  </a>
                  <a href="mailto:${
                    config.socialLinks.email
                  }" aria-label="Send me an email" title="Send me an email">
                      <i class="bi bi-envelope-fill"></i>
                  </a>
              </div>
          </div>
      </footer>
    `;
  }
}

export default FooterTemplate;
