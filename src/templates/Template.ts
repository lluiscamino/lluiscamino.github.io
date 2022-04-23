import ConfigOptions from '../types/ConfigOptions';

interface Template {
  render(config: ConfigOptions, extraOptions: object): string;
}

export default Template;
