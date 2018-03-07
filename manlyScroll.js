var infiniteScroll = function () {
    var loading = false;
    var nextPage = 2;
    var paginator = document.getElementsByClassName('pagination');
    if (paginator[0]) {
        paginator[0].style.display = 'none';
    }
    window.onscroll = function () {
        if (document.documentElement.scrollTop > (document.documentElement.offsetHeight - window.innerHeight - 30) && loading === false) {
            loading = true;
            var list = document.getElementById('infinite-scroll');
            ajaxAndAppendHtml(window.location.href + '&page=' + nextPage, list);
            nextPage += 1;
        }
    };

    var ajaxAndAppendHtml = function (url, node) {
        fetch(url).then(function (response) {
            response.text().then(function (text) {
                var parser = new DOMParser();
                var htmlBatch = parser.parseFromString(text, 'text/html');
                var infiniteScrollBatch = htmlBatch.getElementById('infinite-scroll');
                node.innerHTML += infiniteScrollBatch.innerHTML;
                loading = false;
            });
        });
    };

};

document.addEventListener('load', infiniteScroll(), false);
