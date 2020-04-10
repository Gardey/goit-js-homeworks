import users from './users.js';
const getUsersWithGender = (users, gender) => {
    const result = users.filter((user) => user.gender === gender);
    return result;
    // твой код
  };
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]