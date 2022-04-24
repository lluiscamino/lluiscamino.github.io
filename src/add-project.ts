import * as fs from 'fs';
import path from 'path';
import Project from './types/Project';
import prompts from 'prompts';

const projectsDir = path.join(__dirname, '..', 'src', 'data', 'projects');

(async () => {
  const protect = await buildProjectObject();
  createProjectsDirIfNotExists();
  const jobJsonPath = saveProjectJson(protect);
  console.log('Project saved in ' + jobJsonPath);
})();

async function buildProjectObject(): Promise<Project> {
  const responses = await prompts(
    [
      {
        type: 'text',
        name: 'projectName',
        message: 'Project name',
      },
      {
        type: 'date',
        name: 'startDate',
        message: 'Start date',
        mask: 'YYYY-MM-DD',
      },
      {
        type: 'date',
        name: 'lastUpdateDate',
        message: 'Last update date',
        mask: 'YYYY-MM-DD',
      },
    ],
    {
      onCancel: () => process.exit(),
    },
  );
  return {
    id:
      responses.projectName.replace(' ', '-').toLowerCase() +
      '#' +
      responses.startDate.toISOString().slice(0, 10).replace(/-/g, ''),
    name: responses.projectName,
    startDate: responses.startDate,
    lastUpdateDate: responses.lastUpdateDate,
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
