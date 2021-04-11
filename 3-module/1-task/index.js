function namify(users) {
  const usersNames = users.map(function(userObj) {
    return `${userObj.name}`;
  });
  return usersNames;
}