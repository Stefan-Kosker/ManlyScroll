var infiniteScroll = function () {
    var loading = false;
    var nextPage = 2;
    var paginator = document.getElementsByClassName('pagination');
    if (paginator[0]) {
        paginator[0].style.display = 'none';
    }
    window.onscroll = function() {
        if (document.documentElement.scrollTop > (document.documentElement.offsetHeight -  window.innerHeight - 30) && loading === false) {
            loading = true;
            var list = document.getElementsByClassName('infinite-scroll');
            ajaxAndAppendHtml(window.location.href + '&page=' + nextPage, list[0]);
            nextPage += 1;
        }
    };

    var ajaxAndAppendHtml = function (url, node) {
        fetch(url).then(function (response) {
            response.text().then(function (text) {
                var filterScrollElements = new RegExp('(infinite-scroll">)(.*)(<\\/div><ul class="pagination)');
                var processedText = text.match(filterScrollElements);
                node.innerHTML += processedText[2];
                loading = false;
            });
        });
    };

};

document.addEventListener('load', infiniteScroll(), false);
