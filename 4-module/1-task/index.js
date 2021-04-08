function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');
  friends.forEach(function (item) {
    friendsList.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`;
  });
  return friendsList;
}
