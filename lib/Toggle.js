Toggle = {

    init: function () {
        $('[data-toggle]').each(function () {
            var $this = $(this);
            var $target = $($this.data('toggle')).hide();

            $this.click(function () {
                var group = $this.data('group');
                if(group) {
                    $('[data-group="'+ group +'"][data-toggle!="' + $this.data('toggle') + '"]').each(function () {
                        var $this = $(this);
                        var $target = $($this.data('toggle'));

                        if ($target.is(':visible')) {
                            $target.stop().slideUp();
                        }
                    })
                }
                $target.stop().slideToggle();
            });
        });
    }
};
