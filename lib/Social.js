/*
var Promise = require('promise');
var request = require('request');

module.exports = {

    twitter_url: 'http://testduneurl.com',
    facebook_url: 'http://uneautreurl.com',

    getTwitterCount: function (url) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.callAPI(self.twitter_url + url).then(function (result) {
                resolve(result.count);
            });
        });
    },

    getFacebookCount: function (url) {
        var self = this;
        return new Promise(function (resolve, reject) {
            self.callAPI(self.facebook_url + url).then(function (result) {
                resolve(result.shares);
            });
        });
    },

    callAPI: function (url) {
        return new Promise(function (resolve, reject) {
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(error);
                }

            });
        });
    }

};
*/