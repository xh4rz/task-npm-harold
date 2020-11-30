const fs = require('fs');
const path = require('path');
const faker = require('faker');
// const md5 = require('md5');

function createTasks(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const taskname = faker.name.taskname();
    const taskdesc = faker.name.taskdesc();


    result.push({
      id: faker.random.uuid(),
      taskname,
      taskdesc,


    });
  }

  return result;
}

function main() {
  const data = {
    tasks: createTasks(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
