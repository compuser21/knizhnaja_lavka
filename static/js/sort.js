$(document).ready(function () {
    function sortCardsAlphabetically(selector, asc = true) {
        const cards = $('.book-card').get();

        cards.sort((a, b) => {
            const A = $(a).find(selector).text();
            const B = $(b).find(selector).text();

            return (A < B ? (asc ? -1 : 1) : (A > B ? (asc ? 1 : -1) : 0));
        });

        $.each(cards, function(index, card) {
            $('.join').append(card);
        });
    }

    function sortCardsNumerically(selector, asc = true) {
        const cards = $('.book-card').get();

        cards.sort((a, b) => {
            const A = parseFloat($(a).find(selector).text()) || 0;
            const B = parseFloat($(b).find(selector).text()) || 0;

            return (asc ? A - B : B - A);
        });

        $.each(cards, function(index, card) {
            $('.join').append(card);
        });
    }

    function filterCardsByTitle(query) {
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
        filterCardsByTitle(query);
    });

    $('#title').click(function () {
        sortCardsAlphabetically('.book-name h2');
    });

    $('#title-from-z-to-a').click(function () {
        sortCardsAlphabetically('.book-name h2', false);
    });

    $('#raiting').click(function () {
        sortCardsNumerically('.book-raiting p', false);
    });

    $('#popularity').click(function () {
        sortCardsNumerically('.book-views p span', false);
    });

    $('#longest').click(function () {
        sortCardsNumerically('.book-pages p span', false);
    });

    $('#shortest').click(function () {
        sortCardsNumerically('.book-pages p span');
    });
});
