function makeDiagonalRed(table) {
  let tableRows = Array.prototype.slice.call(table.rows);
  tableRows.forEach(function (item, index) {
    item.children[index].style.backgroundColor = 'red';
  });
}