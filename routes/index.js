
/*
 * GET home page.
 */

exports.index = function(req, res){
    var parseString = require('xml2js').parseString;
    var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
        '<root>' +
        '<child foo="bar">' +
            '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
        '</child>'  +
        '<sibling>with content!</sibling>' +
    '</root>' ;

    parseString(xml, function (err, result) {
        console.dir(result);
    });
  res.render('index', { title: 'Express' });
};