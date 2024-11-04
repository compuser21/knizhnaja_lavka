$(document).ready(function () {
    function searchCardsByTitle(query) {
        query = query.toLowerCase();
        $('.book-card').each(function () {
            const title = $(this).find('.book-name h2').text().toLowerCase();
             if (title.includes(query)) {
                $(this).show();
             } else {
                $(this).hide();
             }
        });
    }

    $('input[type="text"]').on('input', function () {
        const query = $(this).val();
        searchCardsByTitle(query);
    });

});
