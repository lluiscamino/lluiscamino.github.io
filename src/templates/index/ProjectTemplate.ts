import Template from '../Template';
import ConfigOptions from '../../types/ConfigOptions';
import Project from '../../types/Project';

class ProjectTemplate implements Template {
  render(config: ConfigOptions, {project}: {project: Project}): string {
    return `
    <div class="card mb-3 card-item">
      <div class="card-body">
          <div class="row g-0">
              <div class="col-md-1" style="text-align: center">
                <img
                  src="${project.image}"
                  alt="${project.name}"
                  height="48"
                  width="48"
                  class="card-item-thumbnail"
                >
              </div>
              <div class="col-md-11">
              <div class="project-links">
                ${project.links
                  .map(
                    (link) =>
                      `<a href="${link.path}" target="_blank" rel="noopener norefferrer" title="${link.name}" aria-label="${link.name}"><i class="${link.fontAwesomeClass}"></i></a>`,
                  )
                  .join(' ')}
              </div>
              <h4 class="card-title h5">${project.name}</h4>
              <p class="card-text">${project.description}</p>
              <div class="card-pics">
                ${project.pictures
                  .map(
                    (picture) =>
                      `<a href="${picture.image}" data-toggle="lightbox" data-gallery="${project.id}" data-caption="${picture.description}"><img src="${picture.thumbnail}" alt="${picture.description}" title="${picture.description}" width="171" height="128" class="img-thumbnail"></a>`,
                  )
                  .join('')}
                </div>
              </div>
          </div>
        </div>
    </div>
    `;
  }
}

export default ProjectTemplate;
