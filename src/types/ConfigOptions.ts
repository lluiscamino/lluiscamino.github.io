import SocialLinks from './SocialLinks';
import Job from './Job';
import Project from './Project';

type ConfigOptions = {
  baseUrl: string;
  shortName: string;
  longName: string;
  shortBio: string;
  longBio: string;
  pageNameSeparator: string;
  menuLinks: {name: string; path: string}[];
  socialLinks: SocialLinks;
  jobs: Job[];
  projects: Project[];
};

export default ConfigOptions;
