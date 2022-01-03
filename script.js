const boardWidth = 16;

const objects = [
  [[8, 8]],
  [[0, boardWidth]],
  [
    [0, 0],
    [boardWidth, boardWidth],
  ],
  [[0, boardWidth]],
  [[8, 8]],
  [[6, 10]],
  [
    [6, 6],
    [10, 10],
  ],
  [[4, 12]],
  [
    [4, 4],
    [12, 12],
  ],
  [[2, 14]],
  [
    [2, 2],
    [6, 6],
    [10, 10],
    [14, 14],
  ],
  [[0, boardWidth]],
  [
    [0, 0],
    [4, 4],
    [8, 8],
    [12, 12],
    [boardWidth, boardWidth],
  ],
  [[0, boardWidth]],
];

const boardHeight = objects.length;

const visibleFields = [];

objects.forEach((colRanges, row) => {
  colRanges.forEach(([start, stop]) => {
    for (let column = start; column <= stop; column++) {
      const field = { position: [row, column] };
      visibleFields.push(field);
    }
  });
});

const createRow = () => {
  const fieldRow = document.createElement('div');
  fieldRow.classList.add('field-row');
  return fieldRow;
};

const createField = () => {
  const field = document.createElement('div');
  field.classList.add('field');
  return field;
};

const addFields = () => {
  const fields = document.querySelector('.fields');

  for (let row = 0; row <= boardHeight; row++) {
    const newRow = createRow();

    const rowFields = visibleFields.filter(f => f.position[0] === row);

    for (let column = 0; column <= boardWidth; column++) {
      const field = createField();

      if (!rowFields.find(f => f.position[1] === column)) {
        field.classList.add('hide');
      }

      newRow.appendChild(field);
    }

    fields.appendChild(newRow);
  }
};

addFields();
