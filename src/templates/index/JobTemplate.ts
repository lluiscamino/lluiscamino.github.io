import Template from '../Template';
import Job from '../../types/Job';
import ConfigOptions from '../../types/ConfigOptions';
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

class JobTemplate implements Template {
  render(config: ConfigOptions, {job}: {job: Job}): string {
    const dateOptions: DateTimeFormatOptions = {
      month: 'short',
      year: 'numeric',
    };
    const startDate = job.startDate.toLocaleDateString('default', dateOptions);
    const endDate = job.endDate
      ? job.endDate.toLocaleDateString('default', dateOptions)
      : 'present';
    return `
    <div class="card mb-3 card-item">
      <div class="card-body">
          <div class="row g-0">
              <div class="col-md-1" style="text-align: center">
                <img
                  src="${job.company.logo}"
                  alt="${job.company.name}"
                  height="48"
                  width="48"
                  class="card-item-thumbnail"
                >
              </div>
              <div class="col-md-11">
              <h4 class="card-title h5">${job.title}</h4>
              <h5 class="card-subtitle h6">
                ${job.company.name} | 
                <small>${startDate} - ${endDate}</small>
              </h5>
              <p class="card-text">${job.description}</p>
              ${job.pictures
                .map(
                  (picture) =>
                    `<a href="${picture.image}" data-toggle="lightbox" data-gallery="${job.id}" data-caption="${picture.description}"><img src="${picture.thumbnail}" alt="${picture.description}" title="${picture.description}" width="171" height="128" class="img-thumbnail"></a>`,
                )
                .join('')}
              </div>
          </div>
        </div>
    </div>
    `;
  }
}

export default JobTemplate;
