var Twitter = (function () {
    
    function Twitter() {

    }

    Twitter.prototype.showCount = function ($elements) {
        var self = this;
        $elements.each(function () {
            var $this = $(this);
            self.getCount($this.data('twitter'), function (count) {
                $this.text(count);
            });
        });
    };

    Twitter.prototype.getCount = function (url, callback) {
        $.getJSON('http://urldetwitter' + url, function (result) {
            callback(result.count);
        });
    };

    return Twitter;
})();
