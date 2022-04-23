import readline from 'readline';
import * as fs from 'fs';
import Job from './types/Job';
import path from 'path';

const jobsDir = path.join(__dirname, '..', 'src', 'data', 'jobs');

(async () => {
  const job = await buildJobObject();
  createJobsDirIfNotExists();
  const jobJsonPath = saveJobJson(job);
  console.log('Job saved in ' + jobJsonPath);
})();

async function buildJobObject(): Promise<Job> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const prompt = (query: string) =>
    new Promise<string>((resolve) => rl.question(query + ': ', resolve));

  const jobTitle = await prompt('Job title');
  const companyName = await prompt('Company');
  const startDateStr = await prompt('Start date (format: yyyy-mm-dd)');
  const endDateStr = await prompt('End date (format: yyyy-mm-dd or empty)');
  const startDate = new Date(Date.parse(startDateStr));
  const endDate = endDateStr ? new Date(Date.parse(endDateStr)) : undefined;
  rl.close();
  return {
    id:
      companyName.replace(' ', '-').toLowerCase() +
      '#' +
      startDate.toISOString().slice(0, 10).replace(/-/g, ''),
    title: jobTitle,
    company: {
      name: companyName,
    },
    startDate: startDate,
    endDate: endDate,
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
