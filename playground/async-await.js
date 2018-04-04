
// 1
// const getStatusAlt = async (userId) => {
//   throw new Error('This is an error');
//   return 'Mike';
// }

// 2
// const getStatusAlt = () => {
//   return new Promise((resolve, reject) => {
//     resolve('Mike')
//   })
// }

// Example 1 amd 2 are the same

// getStatusAlt().then((name) => {
//   console.log(name)
// }).catch((e) => {
//   console.log(e)
// })

const users = [{
  id: 1,
  name: 'Andrew',
  schoolId: 101
}, {
  id: 2,
  name: 'Jessica',
  schoolId: 999
}];

const grades = [{
  id: 1,
  schoolId: 101,
  grade: 86
}, {
  id: 2,
  schoolId: 999,
  grade: 100
}, {
  id: 3,
  schoolId: 101,
  grade: 80
}];

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);

    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}.`);
    }
  });
};

const getGrades = (schoolId) => {
  return new Promise((resolve, reject) => {
    const grade = grades.filter((grade) => grade.schoolId === schoolId);

    if (grade.length > 0 ) {
      resolve(grade);
    } else {
      reject(`Unable to find user with schoolId of ${schoolId}.`);
    }
  });
};



// Using Asyn Await
const getStatus = async (userId) => {
  const user = await getUser(userId)
  const grades = await getGrades(user.schoolId);
  let average = 0;

  if (grades.length > 0) {
    average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
  }

  return `${user.name} has a ${average}% in the class.`;
}

getStatus(1).then((status) => {
  console.log(status)
}).catch((e) => {
  console.log(e)
})