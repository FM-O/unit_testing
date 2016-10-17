var expect = require('chai').expect;


describe('Twitter', function () {

    beforeEach(function () {
        this.twitter = new Twitter();
    });

    it('should show count', function () {
        //fixture
        var $link = $('<a href="#" data-twitter="http://florianmichel-online.com">Chargement</a>');

        //Stub
        var stub = sinon.stub(this.twitter, 'getCount', function (url, callback) {
            return callback(3);
        });

        //test
        this.twitter.showCount($link);
        expect($link.text()).to.be.equal('3');
    });
});