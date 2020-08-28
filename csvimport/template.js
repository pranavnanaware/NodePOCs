var json2csv = require('json2csv');

exports.get = function(req, res) {

    //var fields = Object.keys(Author.schema.obj);
    var fields = [
        'name.firstName',
        'name.lastName',
        'email',
        'password',
        'bio',
    ];

    var csv = json2csv({ data: '', fields: fields });

    res.set("Content-Disposition", "attachment;filename=user.csv");
    res.set("Content-Type", "application/octet-stream");

    res.send(csv);

};