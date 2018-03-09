var infiniteScroll = function () {
    var loading = false;
    var noMorePagesFollowing = false;
    var loadingIndicator = '<div id="loading-indicator"></div>';
    var nextPage = 2;
    var paginator = document.getElementsByClassName('pagination');
    if (paginator[0]) {
        paginator[0].style.display = 'none';
    }
    window.onscroll = function () {
        if (loading === false && noMorePagesFollowing === false && document.documentElement.scrollTop > (document.documentElement.offsetHeight - window.innerHeight - 30)) {
            var list = document.getElementById('infinite-scroll');
            loading = true;
            if (list !== null) {
                list.insertAdjacentHTML('beforeend', loadingIndicator);
                ajaxAndAppendHtml(window.location.href + '&page=' + nextPage, list);
                nextPage += 1;
            }
        }
    };

    var ajaxAndAppendHtml = function (url, node) {
        fetch(url).then(function (response) {
            response.text().then(function (text) {
                var indicatorToRemove = node.lastChild;
                indicatorToRemove.remove();
                var parser = new DOMParser();
                var htmlBatch = parser.parseFromString(text, 'text/html');
                var infiniteScrollBatch = htmlBatch.getElementById('infinite-scroll');
                if (infiniteScrollBatch.innerHTML === '') {
                    noMorePagesFollowing = true;
                }
                node.insertAdjacentHTML('beforeend', infiniteScrollBatch.innerHTML);
                loading = false;
            });
        });
    };
};

document.addEventListener('load', infiniteScroll(), false);
