var csv = require('fast-csv');
var mongoose = require('mongoose');
var User = require('./user');

exports.post = function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    var userFile = req.files.file;
    var users = [];
    csv.fromString(userFile.data.toString(), {
            headers: true,
            ignoreEmpty: true
        })
        .on("data", function(data) {
            data['_id'] = new mongoose.Types.ObjectId();

            users.push(data);
        })
        .on("end", function() {
            User.create(users, function(err, documents) {
                if (err) throw err;
                res.send(users.length + ' users have been successfully uploaded.');
            });
        });
};