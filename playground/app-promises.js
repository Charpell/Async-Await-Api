
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

// getUser(1).then((user) => {
//   console.log(user)
// }).catch((e) => {
//   console.log(e)
// })

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

// getGrades(99).then((grades) => {
//   console.log(grades)
// }).catch((e) => {
//   console.log(e)
// })


// Using Promises
const getStatus = (userId) => {
  let user;
  return getUser(userId).then((tempUser) => {
    user = tempUser;
    console.log('User', user)
    return getGrades(user.schoolId);
  }).then((grades) => {
    let average = 0;

    if (grades.length > 0) {
      average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }

    return `${user.name} has a ${average}% in the class.`;
  });
};


// getStatus(1).then((status) => {
//   console.log(status);
// }).catch((e) => {
//   console.log(e);
// });













