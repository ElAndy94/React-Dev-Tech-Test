const validate = (
  title: string,
  location: string,
  department: string,
  salary: string,
  description: string
) => {
  const pattern = /^\d+$/;
  // true means invalid, so our conditions got reversed
  return {
    titleVal: title.length >= 5 && title.length <= 20,
    locationVal: location.length >= 5 && location.length <= 20,
    departmentVal: department.length >= 5 && department.length <= 20,
    salaryVal: pattern.test(salary),
    descriptionVal: description.length >= 50 && description.length <= 1000
  };
};

export default validate;
