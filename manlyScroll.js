var infiniteScroll = function () {
    var loading = false;
    var noMorePagesFollowing = false;
    var loadingIndicator = '<div id="loading-indicator"></div>';
    var paginator = document.getElementsByClassName('pagination');
    var neosPaginator = document.getElementsByClassName('page-navigation');
    if (paginator[0]) {
        paginator[0].style.display = 'none';
    }
    if (neosPaginator[0]) {
        neosPaginator[0].style.display = 'none';
    }
    window.onscroll = function () {
        if (loading === false && noMorePagesFollowing === false && document.documentElement.scrollTop > (document.documentElement.offsetHeight - window.innerHeight - 30)) {
            var list = document.getElementById('infinite-scroll');
            loading = true;
            if (list !== null) {
                var nextPageLink = document.getElementsByClassName('next');
                if (nextPageLink[0]) {
                    list.insertAdjacentHTML('beforeend', loadingIndicator);
                    ajaxAndAppendHtml(nextPageLink[0].getElementsByTagName('a')[0].href, list);
                }
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
                if (infiniteScrollBatch == null || infiniteScrollBatch.innerHTML === '') {
                    noMorePagesFollowing = true;
                } else {
                    node.insertAdjacentHTML('beforeend', infiniteScrollBatch.innerHTML);
                }
                loading = false;
            });
        });
    };
};

document.addEventListener('load', infiniteScroll(), false);
