$(document).ready(function () {
    function sortCardsAlphabetically(selector, asc = true) {
        const cards = $('.book-card').get();

        cards.sort((a, b) => {
            const A = $(a).find(selector).text();
            const B = $(b).find(selector).text();
            // const A = $(a).children(selector).eq(selector).text();
            // const B = $(b).children(selector).eq(selector).text();

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
