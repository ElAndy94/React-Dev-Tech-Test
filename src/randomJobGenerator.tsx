export interface Job {
  _id: string;
  title: string;
  location: string;
  salary: string;
  desc: string;
}

export default () => {
  let jobs: Job[] = [];
  let jobTitle: String[] = [
    'Front-End Developer',
    'Back-End Developer',
    'Dev',
    'UI Designer',
    'Scrum Master',
    'Lead Developer',
    'Lead Front-End Developer'
  ];

  for (let i = 0; i < Math.floor(Math.random() * 10 + 5); i++) {
    const id =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);
    id.toString();

    const pickJobTitle = (jobTitle: String[]) => {
      let theJobTitle = jobTitle[Math.floor(Math.random() * jobTitle.length)];
      return theJobTitle.toString();
    };

    let salary = Math.floor(Math.random() * 70000 + 16000).toString();
    let jobName = pickJobTitle(jobTitle);
    let jobDesc =
      'Sony laptops are among the most well known laptops on today’s market. Sony is a name that over time has established itself as creating a solid product with a stellar reputation. In addition to all the good press that Sony has, Sony is known for making the best ‘small’ laptops.';
    let location = 'Manchester, United Kingdom';

    let JobRole = {
      _id: id,
      title: jobName,
      location: location,
      salary: salary,
      desc: jobDesc
    };

    jobs.push(JobRole);
  }
  return jobs;
};
