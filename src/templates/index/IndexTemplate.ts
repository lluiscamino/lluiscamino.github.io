import NavbarTemplate from '../common/NavbarTemplate';
import Template from '../Template';
import HeaderTemplate from '../common/HeaderTemplate';
import FooterTemplate from '../common/FooterTemplate';
import HeadTemplate from '../common/HeadTemplate';
import ConfigOptions from '../../types/ConfigOptions';
import JobTemplate from './JobTemplate';
import ProjectTemplate from './ProjectTemplate';

class IndexTemplate implements Template {
  render(config: ConfigOptions): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      ${new HeadTemplate().render(config)}
      <body>
          ${new NavbarTemplate().render(config)}
          ${new HeaderTemplate().render(config)}
          <div class="container main-content">
              <div class="sections">
                  <div class="section" id="about">
                      <h2>About me</h2>
                      ${config.longBio}
                  </div>
                  <div class="section" id="projects">
                      <h3>Employment</h3>
                      ${config.jobs
                        .map((job) =>
                          new JobTemplate().render(config, {job: job}),
                        )
                        .join('')}
                      <h3>Projects</h3>
                      ${config.projects
                        .map((project) =>
                          new ProjectTemplate().render(config, {
                            project: project,
                          }),
                        )
                        .join('')}
                  </div>
                  <div class="section" id="contact">
                      <h2>Contact</h2>
                      <p>You can contact me by <a href="mailto:${
                        config.socialLinks.email
                      }">email</a> or sending me a DM on
                      <a href="${
                        config.socialLinks.twitter
                      }" target="_blank" rel="noreferrer">Twitter</a>.</p>
                  </div>
              </div>
          </div>
          ${new FooterTemplate().render(config)}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.0/dist/index.bundle.min.js"></script>
      </body>
      </html>
  `;
  }
}

export default IndexTemplate;
