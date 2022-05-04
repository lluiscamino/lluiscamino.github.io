import Picture from './Picture';

type Job = {
  id: string;
  title: string;
  company: {
    name: string;
    logo?: string;
  };
  startDate: Date;
  endDate: Date | undefined;
  description: string;
  pictures: Picture[];
};

export default Job;
