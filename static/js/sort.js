$(document).ready(function () {
    function sortTable(columnIndex, asc = true) {
        const rows = $('#books-table tbody tr').get();

        rows.sort((a, b) => {
            const A = $(a).children('td').eq(columnIndex).text();
            const B = $(b).children('td').eq(columnIndex).text();

            return (A < B ? (asc ? -1 : 1) : (A > B ? (asc ? 1 : -1) : 0));
        });

        $.each(rows, function(index, row) {
            $('#books-table tbody').append(row);
        });
    }

    $('#title').click(function () { 
        sortTable(0);
    });

    $('#raiting').click(function () { 
        sortTable(2);
    });
});