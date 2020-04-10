import users from './users.js';


    const getSortedUniqueSkills = (users) => {
        const result = users
            .reduce((acc, el) => {
                acc.push(...el.skills);
                return acc;
            }, [])
            .sort((a, b) => (a > b ? 1 : -1))
            .filter((el, ind, arr) => arr.indexOf(el) === ind);
        return result;
    };
    // твой код

  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]