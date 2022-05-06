// alternative to displayMovements using node creation and fragments
function displayMovements(movements) {
  containerMovements.textContent = '';
  const rootClass = 'movements__';
  const movementRows = document.createDocumentFragment();
  movements.forEach(data => {
    const movementType = data > 0 ? 'deposit' : 'withdrawal';
    const row = document.createElement('div');
    const value = document.createElement('div');
    const date = document.createElement('div');
    const type = document.createElement('div');
    row.classList.add(`${rootClass}row`);
    value.classList.add(`${rootClass}value`);
    date.classList.add(`${rootClass}date`);
    type.classList.add(`${rootClass}type`);
    type.classList.add(`${rootClass}type--${movementType}`);
    value.innerText = moneyFormatter.format(data);
    type.textContent = `1 ${movementType}`;
    date.textContent = '1 day ago';
    row.appendChild(type);
    row.appendChild(date);
    row.appendChild(value);
    movementRows.appendChild(row);
  });
  containerMovements.appendChild(movementRows);
}

// if we wanted to creat a new array, map is the way to go
const createUsernames = function (accounts) {
  return accounts.map(account =>
    account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  );
};
