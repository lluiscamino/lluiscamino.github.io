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
  pictures: {
    description: string;
    image: string;
    thumbnail: string;
  }[];
};

export default Job;
