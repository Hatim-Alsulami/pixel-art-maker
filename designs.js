// Select color input
// Select size input
// Variable declertions
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let form = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
})

// Function to create grids
function makeGrid() {
    table.innerHTML = '';
    for (let i = 0; i < height.value; i++){
        // Create table rows
        let row = document.createElement('tr');
        table.appendChild(row);
        // Create cells
        for (let j = 0; j < width.value; j++){
            let cell = document.createElement('td');
            row.appendChild(cell);
            // Color cells
            cell.addEventListener('click', function(e){
                cell.style.backgroundColor = color.value;
            })

        }

    }

    

}
