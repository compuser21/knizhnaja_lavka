$(document).ready(function () {
    function sortTableInAlphabeticalOrder(columnIndex, asc = true) {
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

    function sortTableInReversedAlphabeticalOrder(columnIndex, asc = true) {
        const rows = $('#books-table tbody tr').get();

        rows.sort((a, b) => {
            const A = $(a).children('td').eq(columnIndex).text();
            const B = $(b).children('td').eq(columnIndex).text();

            return (A > B ? (asc ? -1 : 1) : (A < B ? (asc ? 1 : -1) : 0));
        });

        $.each(rows, function(index, row) {
            $('#books-table tbody').append(row);
        });
    }

    function sortNumbersInTable(columnIndex, asc = true) {
        const rows = $('#books-table tbody tr').get();

        rows.sort((a, b) => {
            const A = parseFloat($(a).children('td').eq(columnIndex).text());
            const B = parseFloat($(b).children('td').eq(columnIndex).text());

            return (A > B ? (asc ? -1 : 1) : (A < B ? (asc ? 1 : -1) : 0));
        });

        $.each(rows, function(index, row) {
            $('#books-table tbody').append(row);
        });
    }

    function reverseSortNumbersInTable(columnIndex, asc = true) {
        const rows = $('#books-table tbody tr').get();

        rows.sort((a, b) => {
            const A = parseFloat($(a).children('td').eq(columnIndex).text());
            const B = parseFloat($(b).children('td').eq(columnIndex).text());

            return (A < B ? (asc ? -1 : 1) : (A > B ? (asc ? 1 : -1) : 0));
        });

        $.each(rows, function(index, row) {
            $('#books-table tbody').append(row);
        });
    }

    $('#title').click(function () { 
        sortTableInAlphabeticalOrder(0);
    });

    $('#title-from-z-to-a').click(function () { 
        sortTableInReversedAlphabeticalOrder(0);
    });

    $('#raiting').click(function () { 
        sortNumbersInTable(2);
    });

    $('#popularity').click(function () { 
        sortNumbersInTable(4);        
    });

    $('#longest').click(function () { 
        sortNumbersInTable(5);
    });

    $('#shortest').click(function () { 
        reverseSortNumbersInTable(5);        
    });
});

