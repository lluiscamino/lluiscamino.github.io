import readline from 'readline';
import * as fs from 'fs';
import path from 'path';
import Project from './types/Project';

const projectsDir = path.join(__dirname, '..', 'src', 'data', 'projects');

(async () => {
  const protect = await buildProjectObject();
  createProjectsDirIfNotExists();
  const jobJsonPath = saveProjectJson(protect);
  console.log('Project saved in ' + jobJsonPath);
})();

async function buildProjectObject(): Promise<Project> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const prompt = (query: string) =>
    new Promise<string>((resolve) => rl.question(query + ': ', resolve));

  const name = await prompt('Project name');
  const startDateStr = await prompt('Start date (format: yyyy-mm-dd)');
  const lastUpdateDateStr = await prompt(
    'Last update date (format: yyyy-mm-dd)',
  );
  const startDate = new Date(Date.parse(startDateStr));
  const lastUpdateDate = new Date(Date.parse(lastUpdateDateStr));
  rl.close();
  return {
    id:
      name.replace(' ', '-').toLowerCase() +
      '#' +
      startDate.toISOString().slice(0, 10).replace(/-/g, ''),
    name: name,
    startDate: startDate,
    lastUpdateDate: lastUpdateDate,
    image: '',
    description: '',
    links: [],
  };
}

function createProjectsDirIfNotExists(): void {
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, {recursive: true});
  }
}

function saveProjectJson(project: Project): string {
  const jobPath = path.join(projectsDir, project.id + '.json');
  fs.writeFileSync(jobPath, JSON.stringify(project, null, 2));
  return jobPath;
}
