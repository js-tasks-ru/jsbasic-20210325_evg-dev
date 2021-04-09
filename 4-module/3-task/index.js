function highlight(table) {
  let tableBody = table.querySelector('tbody'),
      tableRows = Array.prototype.slice.call(tableBody.rows);
  tableRows.forEach(function (item) {
    let children = Array.prototype.slice.call(item.cells);
    children.forEach(function (item, index) {
      let itemParent = item.parentElement;
      if (index === 1) {
        let itemAge = +item.textContent;
        if (itemAge < 18) {
          itemParent.style.textDecoration = 'line-through';
        }
      }
      if (index === 2) {
        let itemGender = item.textContent;
        if (itemGender === 'm') {
          itemParent.classList.add('male');
        } else {
          itemParent.classList.add('female');
        }
      }
      if (index === 3) {
        let itemData = item.getAttribute('data-available');
        if (itemData === 'true') {
          itemParent.classList.add('available');
        } else if (itemData === 'false') {
          itemParent.classList.add('unavailable');
        } else {
          itemParent.setAttribute('hidden','true');
        }
      }
    });
  });
}