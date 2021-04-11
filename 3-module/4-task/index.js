function showSalary(users, age) {
  const filteredUsers = users.filter(function(userObj) {
    return userObj.age <= age;
  });
  let result = '',
      newIndex;
  filteredUsers.forEach(function (item, index) {
    newIndex = index + 1;
    result += `${item.name}, ${item.balance}`;
    if (newIndex < filteredUsers.length) {
      result += `\n`;
    }
  });
  return result;
}