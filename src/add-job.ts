import * as fs from 'fs';
import Job from './types/Job';
import path from 'path';
import prompts from 'prompts';

const jobsDir = path.join(__dirname, '..', 'src', 'data', 'jobs');

(async () => {
  const job = await buildJobObject();
  createJobsDirIfNotExists();
  const jobJsonPath = saveJobJson(job);
  console.log('Job saved in ' + jobJsonPath);
})();

async function buildJobObject(): Promise<Job> {
  const responses = await prompts(
    [
      {
        type: 'text',
        name: 'jobTitle',
        message: 'Job title',
      },
      {
        type: 'text',
        name: 'companyName',
        message: 'Company',
      },
      {
        type: 'date',
        name: 'startDate',
        message: 'Start date',
        mask: 'YYYY-MM-DD',
      },
      {
        type: 'confirm',
        name: 'currentlyOnJob',
        message: 'Current job',
      },
      {
        type: (prev) => (prev ? null : 'date'),
        name: 'endDate',
        message: 'End date',
        mask: 'YYYY-MM-DD',
      },
    ],
    {
      onCancel: () => process.exit(),
    },
  );

  return {
    id:
      responses.companyName.replace(' ', '-').toLowerCase() +
      '#' +
      responses.startDate.toISOString().slice(0, 10).replace(/-/g, ''),
    title: responses.jobTitle,
    company: {
      name: responses.companyName,
    },
    startDate: responses.startDate,
    endDate: responses.endDate,
    description: '',
    pictures: [],
  };
}

function createJobsDirIfNotExists(): void {
  if (!fs.existsSync(jobsDir)) {
    fs.mkdirSync(jobsDir, {recursive: true});
  }
}

function saveJobJson(job: Job): string {
  const jobPath = path.join(jobsDir, job.id + '.json');
  fs.writeFileSync(jobPath, JSON.stringify(job, null, 2));
  return jobPath;
}
