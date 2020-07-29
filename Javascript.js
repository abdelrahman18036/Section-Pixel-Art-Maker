"Important";

const $table = $('#table');
const $Height = $('#Height');
const $Width = $('#Width');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $Width.val();
    let height = $Height.val();

    $table.html('');

    makeGrid(height, width);
    addCellClickListener();
});
// grid generation based on user input
function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $table.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};