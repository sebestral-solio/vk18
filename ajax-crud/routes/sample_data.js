var express = require('express');
// var jwt = require('jsonwebtoken');
var session = require('express-session');
var router = express.Router();
var database = require('../database');
const cors = require('cors');



router.use(cors());


router.use(session({
    secret: 'apple mango orange', // Set a secret key for session encryption
    resave: false,
    saveUninitialized: true
}));





router.all("/api/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});


router.all("/api/*", function(req, res, next) {
  if (req.method.toLowerCase() !== "options") {
    return next();
  }
  return res.send(204);
});


router.get("/8", function(req, res, next){
	if (req.session.user) {
	res.render('sample_data', {title : 'Class I To VIII'});
	}
	else {
		res.send("Error, Page Not Found")
	}
});

router.get("/9",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_data9', {title : 'Class IX To X'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/11",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_data11', {title : 'Class XI To XII'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/ellip", function(req, res, next){
	if (req.session.user) {
	res.render('sample_ellip', {title : 'Bengaluru Employees'});
	}
	else {
		res.send("Error, Page Not Found")
	}
});

router.get("/ellips",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_ellips', {title : 'Singapore Employees'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/proj", function(req, res, next){
	if (req.session.user) {
		res.render('sample_proj', {title : 'Bengaluru Projects'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/projs",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_projs', {title : 'Singapore Projects'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/workon",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_workon', {title : 'Employees working on Bengaluru Projects'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

router.get("/workons",  function(req, res, next){
	if (req.session.user) {
		res.render('sample_workons', {title : 'Employees working on Singapore Projects'});
		}
		else {
			res.send("Error, Page Not Found")
		}
});

//shetty
router.get('/', (req, res, next) => {
	if (!req.session.user) {
res.render('index')
	}else {
		res.render('admindash');
	}

});

router.get('/admindash',(req,res) => {
	res.send("Error, Page Not Found!")
})

router.get("/login",  function(req, res, next){
	res.render('login');
});

router.get("/signup",   function(req, res, next){
	res.render('signup');
});


router.get('/preranaadmindash', (req, res) => {
	if (req.session.user) {
		res.render('preranaadmindash');
	} else {
		res.send("Error, Page Not Found");
	}
    
});

router.get('/sellipsonic', (req, res) => {
	if (req.session.user) {
		res.render('sellipsonic');
	} else {
		res.send("Error, Page Not Found");
	}
    
});

router.get('/startupuser', (req, res) => {
    if (req.session.user) {
		res.render('startupuser');
	} else {
		res.send("Error, Page Not Found");
	}
    
});


router.get('/ellipsonicadmindash', (req, res) => {
    if (req.session.user) {
		res.render('ellipsonicadmindash');
	} else {
		res.send("Error, Page Not Found");
	}
    
});

router.get('/bellipsonic', (req, res) => {
	if (req.session.user) {
		res.render('bellipsonic');
	} else {
		res.send("Error, Page Not Found");
	}
    
});

router.get('/forgot',  (req, res) => {
    res.render('forgot');
});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//8th student
router.post("/action", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number; 



		var query = `
		INSERT INTO student 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added',
				
			});
			console.log("data added");
		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM student WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number;

		var query = `
		UPDATE student 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM student WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//9th student
router.post("/action9", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student9 ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number; 



		var query = `
		INSERT INTO student9 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM student9 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number;

		var query = `
		UPDATE student9 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM student9 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//11th student

router.post("/action11", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM student11 ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number; 



		var query = `
		INSERT INTO student11 
		(id,name, classs, subjects, timings, fee, status, parent_name, parent_number) 
		VALUES ("${id}","${name}", "${classs}", "${subjects}", "${timings}", "${fee}", "${status}", "${parent_name}", "${parent_number}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM student11 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var name = req.body.name;

		var classs = req.body.classs;

		var subjects = req.body.subjects;

		var timings = req.body.timings;

        var fee = req.body.fee;

        var status = req.body.status;

        var parent_name = req.body.parent_name;

        var parent_number = req.body.parent_number;

		var query = `
		UPDATE student11 
		SET name = "${name}", 
		classs = "${classs}", 
		subjects = "${subjects}", 
		timings = "${timings}" ,
        fee = "${fee}",
        status = "${status}",
        parent_name = "${parent_name}",
        parent_number = "${parent_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM student11 WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//ellips bengaluru

router.post("/actionellip", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM employee ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;

		var name = req.body.name;

		var dob = req.body.dob;

		var gender = req.body.gender;

		var salary = req.body.salary;

        var designation = req.body.designation;

        var mail = req.body.mail;

        var phone_number = req.body.phone_number;



		var query = `
		INSERT INTO employee 
		(id,name, dob, gender, salary, designation, mail, phone_number) 
		VALUES ("${id}","${name}", "${dob}", "${gender}", "${salary}", "${designation}", "${mail}", "${phone_number}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM employee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var name = req.body.name;

		var dob = req.body.dob;

		var gender = req.body.gender;

		var salary = req.body.salary;

        var designation = req.body.designation;

        var mail = req.body.mail;

        var phone_number = req.body.phone_number;

        
		var query = `
		UPDATE employee 
		SET name = "${name}", 
		dob = "${dob}", 
		gender = "${gender}", 
		salary = "${salary}" ,
        designation = "${designation}",
        mail = "${mail}",
        phone_number = "${phone_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM employee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


//ellips singapore
router.post("/actionellips", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM semployee ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;

		var name = req.body.name;

		var dob = req.body.dob;

		var gender = req.body.gender;

		var salary = req.body.salary;

        var designation = req.body.designation;

        var mail = req.body.mail;

        var phone_number = req.body.phone_number;



		var query = `
		INSERT INTO semployee 
		(id,name, dob, gender, salary, designation, mail, phone_number) 
		VALUES ("${id}","${name}", "${dob}", "${gender}", "${salary}", "${designation}", "${mail}", "${phone_number}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM semployee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var name = req.body.name;

		var dob = req.body.dob;

		var gender = req.body.gender;

		var salary = req.body.salary;

        var designation = req.body.designation;

        var mail = req.body.mail;

        var phone_number = req.body.phone_number;

        
		var query = `
		UPDATE semployee 
		SET name = "${name}", 
		dob = "${dob}", 
		gender = "${gender}", 
		salary = "${salary}" ,
        designation = "${designation}",
        mail = "${mail}",
        phone_number = "${phone_number}"
		WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM semployee WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//bengaluru projects

router.post("/actionproj", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM projects ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;
		var project_name = req.body.project_name;


		var query = `
		INSERT INTO projects 
		(id,project_name) 
		VALUES ("${id}","${project_name}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM projects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var project_name = req.body.project_name;

	

		var query = `
		UPDATE projects 
		SET  project_name = "${project_name}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM projects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//singapore projects

router.post("/actionprojs", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM sprojects ORDER BY id ASC";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id = req.body.id;
		var project_name = req.body.project_name;


		var query = `
		INSERT INTO sprojects 
		(id,project_name) 
		VALUES ("${id}","${project_name}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM sprojects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var id = req.body.id;

		var project_name = req.body.project_name;

	

		var query = `
		UPDATE sprojects 
		SET project_name = "${project_name}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM sprojects WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// works_on bengaluru
router.post("/actionworkon", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT w.id, e.name AS employee_name,p.project_name AS project_name,w.start_date AS start_date FROM employee e, projects p, works_on w WHERE e.id=w.employee_id and p.id=w.project_id order by w.id asc";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id=req.body.id;
		var employee_id = req.body.employee_id;
		var project_id = req.body.project_id;
		var start_date = req.body.start_date;


		var query = `
		INSERT INTO works_on 
		(id,employee_id,project_id,start_date) 
		VALUES ("${id}","${employee_id}","${project_id}","${start_date}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM works_on WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var employee_id = req.body.employee_id;

		var project_id = req.body.project_id;

		var start_date = req.body.start_date;

		var id = req.body.id;
	

		var query = `
		UPDATE works_on 
		SET  employee_id = "${employee_id}", project_id = "${project_id}",start_date= "${start_date}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM works_on WHERE id = "${id}"`;

		database.query(query,function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// works_on singapore

router.post("/actionworkons", function(req, res, next){

	var action = req.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT w.id,e.name AS employee_name,p.project_name AS project_name,w.start_date AS start_date FROM semployee e, sprojects p, sworks_on w WHERE e.id=w.employee_id and p.id=w.project_id  order by w.id asc";

		database.query(query, function(error, data){

			res.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var id=req.body.id;
		var employee_id = req.body.employee_id;
		var project_id = req.body.project_id;
		var start_date = req.body.start_date;


		var query = `
		INSERT INTO sworks_on 
		(id,employee_id,project_id,start_date) 
		VALUES ("${id}","${employee_id}","${project_id}","${start_date}")
		`;

		database.query(query, function(error, data){

			res.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		var id = req.body.id;

		var query = `SELECT * FROM sworks_on WHERE id = "${id}"`;

		database.query(query, function(error, data){

			res.json(data[0]);

		});
	}

	if(action == 'Edit')
	{
		var employee_id = req.body.employee_id;

		var project_id = req.body.project_id;

		var start_date = req.body.start_date;

		var id = req.body.id;
	

		var query = `
		UPDATE sworks_on 
		SET  employee_id = "${employee_id}", project_id = "${project_id}",start_date= "${start_date}"
		 WHERE id = "${id}"
		`;

		database.query(query, function(error, data){
			res.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = req.body.id;

		var query = `DELETE FROM sworks_on WHERE id = "${id}"`;

		database.query(query,function(error, data){

			res.json({
				message : 'Data Deleted'
			});

		});
	}

});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//signup page admin
router.post('/signup', (req, res) => {
	const username = req.body.username;
	const password1 = req.body.password;
	const phone ="+91"+ req.body.phone;
	const confirm_password = req.body.confirm_password;
	const email = req.body.email;

// encrypting
	const crypto = require('crypto');
	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
	const IV = "5183666c72eec9e4";
	const ALGO = "aes-256-cbc"
	
	const encrypt = ((text) => 
	{
	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
	let encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
	});
	
	const encrypted_key = encrypt(password1);

	console.log("Post from HTML/EJS:",'||username:',username,'||email:',email,'||phone:',phone,'||password:',password1);

	if(password1==confirm_password){
	database.query("INSERT INTO login_demo (username,email,phone,password) VALUES (?, ?, ?, ?)", [username,email,phone, encrypted_key], (err, result) => {
		if (err){
			res.json({ message: err });
		}
		else{
			req.session.user = { username: username };
			res.render('admindash');
			}
		}); 
	}
	else{
		res.send('Confirm password is not matching');
	}
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//login page admin
router.post('/login', async (req, res) => {
	const username = req.body.username;
	const password1 = req.body.password;

	// encrypting
	const crypto = require('crypto');
	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
	const IV = "5183666c72eec9e4";
	const ALGO = "aes-256-cbc"

	const encrypt = ((text) => 
	{
	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
	let encrypted = cipher.update(text, 'utf8', 'base64');
	encrypted += cipher.final('base64');
	return encrypted;
	});
	const encrypted_key = encrypt(password1);
	

	console.log("Post from HTML/EJS:",'||username',username, '||password',password1);

	database.query("SELECT * FROM login_demo WHERE username = ? AND password = ?", [username, encrypted_key], (err, result) => {
		if (err) throw err;
			console.log(result);
			if (result.length >0) {
				req.session.user = { username: username };
				res.render('admindash');
			} else {
			 
				res.send('Invalid Username Or Password!!!');
			}
		});
	});


	router.get('/logout', (req, res) => {
		// Destroy session on logout
		req.session.destroy((err) => {
			if (err) {
				console.error(err);
				res.status(500).send('Error occurred during logout');
			} else {
				res.render('index'); // Redirect to the homepage after logout
			}
		});
	});


	module.exports = router;

//--------------------------------------------FORGOT PASSWORD------------------------------------------------------------------------------------------

// const twilio = require('twilio');

// // Define Twilio credentials and verify service SID
// const accountSid = "ACecf0c667f0cfda12b85d28011461dfe7";
// const authToken = "5bde1942526aed92d3fed903236bac3c";
// const verifySid = "VA4ed805d28afaa72068afb67725de80b9";
// const client = twilio(accountSid, authToken);

// // Route for initiating password recovery
// router.post('/forgot', function(req, res) {
//     // Retrieve phone number from req body
//     const phone = "+91"+req.body.phone;

//     // Query database to check if phone number exists
//     database.query("SELECT * FROM login_demo WHERE phone = ?", [phone], (err, result) => {
//         if (err) {
//             console.error("Error querying database:", err);
//             return res.status(500).send("An error occurred. Please try again later.");
//         }

//         // If phone number exists, initiate OTP verification
//         if (result.length > 0) {
//             client.verify.services(verifySid)
//                 .verifications.create({ to: phone, channel: "sms" })
//                 .then((verification) => {
//                     console.log("OTP sent successfully:", verification);
//                     return res.render('otp', { phone: phone });
//                 })
//                 .catch((error) => {
//                     console.error("Error sending OTP:", error);
//                     return res.status(500).send("An error occurred. Please try again later.");
//                 });
//         } else {
//             // If phone number doesn't exist, send error message
//             return res.send("Invalid Phone Number!!");
//         }
//     });
// });


// // -----------------------------------------------------Route for verifying OTP-----------------------------------------------------------------
// router.post('/verify-otp', function(req, res) {
//     const otp = req.body.otp;
//     const phone = req.body.phone;

//     // Use Twilio's Verify API to verify OTP
//     client.verify.services(verifySid)
//         .verificationChecks.create({ to: '+917899238398', code: otp })
//         .then((verification_check) => {
//             if (verification_check.status === 'approved') {
//                 // If OTP is verified successfully, render admin dashboard
//                 return res.render('newpassword');
//             } else {
//                 // If OTP verification fails, send error message
//                 return res.send("Invalid OTP. Please try again.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error verifying OTP:", error);
//             return res.status(500).send("An error occurred. Please try again later.");
//         });
// });


// // //------------------------------------------------sign number----------------------------------------
// router.get("/phone", function(req, res, next){

// 	res.render('phone');

// });
// // Route for initiating password recovery
// router.post('/phone', function(req, res) {
//     // Retrieve phone number from req body
//     const phone = "+91"+req.body.phone;

//     // Query database to check if phone number exists
//     database.query("SELECT * FROM login_demo WHERE phone = ?", [phone], (err, result) => {
//         if (err) {
//             console.error("Error querying database:", err);
//             return res.status(500).send("An error occurred. Please try again later.");
//         }

//         // If phone number exists, initiate OTP verification
//         if (result.length > 0) {
//             client.verify.services(verifySid)
//                 .verifications.create({ to: phone, channel: "sms" })
//                 .then((verification) => {
//                     console.log("OTP sent successfully:", verification);
//                     return res.render('sotp', { phone: phone });
//                 })
//                 .catch((error) => {
//                     console.error("Error sending OTP:", error);
//                     return res.status(500).send("An error occurred. Please try again later.");
//                 });
//         } else {
//             // If phone number doesn't exist, send error message
//             return res.send("Invalid Phone Number!!");
//         }
//     });
// });


// // //----------------------------------------------sign verify otp-------------------------------
// router.post('/sverify-otp', function(req, res) {
//     const otp = req.body.otp;
//     const phone ="+917899238398" 

//     // Use Twilio's Verify API to verify OTP
//     client.verify.services(verifySid)
//         .verificationChecks.create({ to: '+917899238398', code: otp })
//         .then((verification_check) => {
//             if (verification_check.status === 'approved') {
//                 // If OTP is verified successfully, render admin dashboard
//                 return res.render('admindash');
//             } else {
// 				database.query("DELETE FROM login_demo WHERE phone = ?", [phone], (err, result) => {
// 					if (err) {
// 						console.error("Error querying database:", err);
// 					}
// 					else{
// 						res.render('signup');
// 					}
// 				})
// 			}

//                 // If OTP verification fails, send error message
              
//             })
        
//         .catch((error) => {
//             console.error("Error verifying OTP:", error);
//             return res.status(500).send("An error occurred. Please try again later.");
//         });
// });




// // //--------------------------------------------setting new password----------------------------------------------------------

// // Route to render the set password form
// router.get('/newpassword', (req, res) => {
//     res.render('newpassword'); // Assuming you're using a templating engine like EJS
// });

// // Route to handle form submission and reset password
// router.post('/reset-password', (req, res) => {

// 	const phone = "+91"+req.body.phone;
//     const newPassword = req.body.password;
//     const confirmPassword = req.body.confirm_password;


// 	const crypto = require('crypto');
// 	const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
// 	const IV = "5183666c72eec9e4";
// 	const ALGO = "aes-256-cbc"
	
// 	const encrypt = ((text) => 
// 	{
// 	let cipher = crypto.createCipheriv(ALGO, ENC, IV);
// 	let encrypted = cipher.update(text, 'utf8', 'base64');
// 	encrypted += cipher.final('base64');
// 	return encrypted;
// 	});
	
	

	
// 	const encrypted_key = encrypt(newPassword);
//     // Check if the passwords match
//     if (newPassword !== confirmPassword) {
//         return res.send('Passwords do not match. Please try again.');
//     }
// 	else {
// 		database.query("UPDATE login_demo SET password = ? where phone = ?", [encrypted_key,phone], (err, result) => {
// 			if (err){
// 				res.json({ message: err });
// 			}
// 			else{
// 				res.render('admindash');
// 				}
// 			}); 

// 	}
// console.log("new password:",newPassword)
// });





// const accountSid = "ACecf0c667f0cfda12b85d28011461dfe7";
// const authToken = "5bde1942526aed92d3fed903236bac3c";
// const verifySid = "VA4ed805d28afaa72068afb67725de80b9";
// const client = twilio(accountSid, authToken);


//disabling back button , insert in all ejs files 
/* <script type = "text/javascript">
    function preventBack(){
        window.history.forward();
    }
    setTimeout("preventBack()",0);

    window.onunload=function(){null};
    </script> */


	//npm run watch for running
