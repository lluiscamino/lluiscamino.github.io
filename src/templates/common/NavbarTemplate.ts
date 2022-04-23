import Template from '../Template';
import ConfigOptions from '../../types/ConfigOptions';

class NavbarTemplate implements Template {
  render(config: ConfigOptions): string {
    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="z-index: 3">
          <div class="container">
              <a class="navbar-brand" href="index.html" title="Home page">
                  <img src="media/favicon/favicon-64x64.png" alt="Home page" width="32" height="32">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto flex-nowrap navbar-dark bg-dark">
                      ${config.menuLinks.map(
                        (link) => `<li class="nav-item">
                          <a href="${link.path}" class="nav-link m-2 menu-item nav-active">${link.name}</a>
                      </li>`,
                      )}
                  </ul>
              </div>
          </div>
      </nav>
    `;
  }
}

export default NavbarTemplate;
