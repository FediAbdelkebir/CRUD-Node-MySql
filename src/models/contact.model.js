'user strict';
var dbConn = require('../../config/db.config');

//Contact object create
var Contact = function(contact){
    this.Name     = contact.Name;
    this.Email      = contact.Email;
    this.Message          = contact.Message;
};
Contact.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO contacts set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Contact.findById = function (id, result) {
    dbConn.query("Select * from contacts where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Contact.findAll = function (result) {
    dbConn.query("Select * from contacts", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('contacts : ', res);  
            result(null, res);
        }
    });   
};
Contact.update = function(id, contact, result){
  dbConn.query("UPDATE contacts SET Name=?,Email=?,Message=? WHERE id = ?", [contact.Name,contact.Email,contact.Message, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Contact.delete = function(id, result){
     dbConn.query("DELETE FROM contacts WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Contact;