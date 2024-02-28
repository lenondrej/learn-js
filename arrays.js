const people = [
    { name: 'John', age: 30, occupation: 'tester' },
    { name: 'Jane', age: 25 },
    { name: 'Michal', age: 24 },
    { name: 'Jim', age: 40, occupation: 'developer' },
  ];
  
  const developer = people.find((person) => person.occupation === 'developer');
  console.log(developer.name);
  
  if (people.every((person) => person.age)) {
    console.log('Everyone has an age.');
  }
  
  if (people.some((person) => person.occupation)) {
    console.log('Someone has an occupation.');
  }
  
  const employees = people.filter((person) => person.occupation);
  console.log(employees.map((employee) => employee.name));
  
  