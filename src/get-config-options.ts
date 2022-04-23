import ConfigOptions from './types/ConfigOptions';
import configJson from './data/config.json';
import path from 'path';
import * as fs from 'fs';
import Job from './types/Job';
import Project from './types/Project';

const jobsDir = path.join(__dirname, '..', 'src', 'data', 'jobs');
const projectsDir = path.join(__dirname, '..', 'src', 'data', 'projects');

function getConfigOptions(): ConfigOptions {
  return {
    ...configJson,
    jobs: getAllJobs(),
    projects: getAllProjects(),
  };
}

function getAllJobs(): Job[] {
  const jobJsonFiles = fs.readdirSync(jobsDir);
  const jobs = jobJsonFiles.map((filePath) =>
    readJob(path.join(jobsDir, filePath)),
  );
  const sortFactor = (job: Job) =>
    job.endDate ? job.endDate.getTime() : Number.POSITIVE_INFINITY;
  jobs.sort((a, b) => sortFactor(b) - sortFactor(a));
  return jobs;
}

function readJob(path: string): Job {
  const jobJson = fs.readFileSync(path);
  const job = JSON.parse(jobJson.toString());
  job.startDate = new Date(job.startDate);
  if (job.endDate) {
    job.endDate = new Date(job.endDate);
  }
  return job;
}

function getAllProjects(): Project[] {
  const projectJsonFiles = fs.readdirSync(projectsDir);
  const projects = projectJsonFiles.map((filePath) =>
    readProject(path.join(projectsDir, filePath)),
  );
  projects.sort(
    (a, b) => b.lastUpdateDate.getTime() - a.lastUpdateDate.getTime(),
  );
  return projects;
}

function readProject(path: string): Project {
  const projectJson = fs.readFileSync(path);
  const project = JSON.parse(projectJson.toString());
  project.startDate = new Date(project.startDate);
  project.lastUpdateDate = new Date(project.lastUpdateDate);
  return project;
}

export default getConfigOptions;
