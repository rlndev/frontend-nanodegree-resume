//$("#main").append("Rhaven Coleman");

//var awesomeThoughts = "My name is Rhaven and I am AWESOME!";

//var name = "Rhaven Coleman";

//var email ="rlkrnr@gmail.com";

//var newEmail = email.replace("rlkrnr@gmail.com","colemanrhaven@hotmail.com");

//console.log(email);
//console.log(newEmail);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

//$("#main").append(funThoughts);


//var skills = [
//	"C++", "HTML", "CSS", "Javascript"];

var bio = {
	"name" : "Rhaven Coleman",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "412.657.1924",
		"email" : "rlkrnr@gmail.com",
		"location" : "302 Kingston Dr. Pittsburgh, PA 15235"
	},
	"welcomeMessage" : "Welcome to my resume built using JavaScript",
	"skills" : ["Programming Languages/Technologies: C++, SQL, HTML, CSS, JavaScript, PHP, XML",
"Operating Systems: Windows, OS X, Unix and Linux", "Software: Filemaker Pro, MS Office Suite, Git/GitHub, MS Visio, Adobe Creative Suite, EndNote, SPSS", "Image Modalities:	Magnetic Resonance Imaging (MRI), Positron Emission Tomography (PET)", "Imaging Software: MRIcro, Amide, kPACS, PMOD, AFNI"],
	"bioPic" : "images/photo.jpg"
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


var formattedbioPic	= HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

var formattedskillStart = HTMLskillsStart
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedlocation);

$("#header").append(formattedbioPic);
$("#header").append(formattedwelcomeMsg);
$("#header").append(formattedskillStart);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
$("#header").append(formattedSkills);


var work = {
	"jobs": [
		{
			"Employer" : "PET Facility, Department of Radiology, University of Pittsburgh",
			"Title" : "Database manager",
			"Dates" : "4/2007 - Present",
			"Location" : "Pittsburgh, PA",
			"Description" : "Manage image data, design and develop database systems, coordinate flow of data, provide deliverables for routine and ad-hoc requests"
		},
		{
			"Employer" : "Henkels & McCoy",
			"Title" : "Instructor/Case Manager",
			"Dates" : "11/2004 - 8/2006",
			"Location" : "Columbus, Ohio",
			"Description" : "Instructed youth ages 14-18 on various technology and job readiness skills.  Developed lesson plans focused on computer building, hardware and software installation, Adobe Dreamweaver web development for local businesses, basic English/reading and mathematics as well as post-graduation college and career readiness skills."
		},
		{
			"Employer" : "Management Science Associates",
			"Title" : "Data Analyst",
			"Dates" : "2/2000 - 8/2002, 5/2004 - 10/2004",
			"Location" : "Pittsburgh, PA",
			"Description" : "Managed post buy analysis data of external clients.  Built, maintained and produced client deliverables in the form of databases and reports. Trained new team members on software packages, data processing methods, and database management."
		}
	]
};



var formattedworkStart = HTMLworkStart;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].Employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].Title);
var formattedworkEmpTit = formattedworkEmployer + formattedworkTitle;
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[0].Dates);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].Location);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].Description);


$("#workExperience").append(formattedworkStart);
$(".work-entry:last").append(formattedworkEmpTit);
$(".work-entry:last").append(formattedworkDates);
$(".work-entry:last").append(formattedworkLocation);
$(".work-entry:last").append(formattedworkDescription);

var formattedworkStart = HTMLworkStart;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[1].Employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[1].Title);
var formattedworkEmpTit = formattedworkEmployer + formattedworkTitle;
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[1].Dates);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[1].Location);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[1].Description);


$("#workExperience").append(formattedworkStart);
$(".work-entry:last").append(formattedworkEmpTit);
$(".work-entry:last").append(formattedworkDates);
$(".work-entry:last").append(formattedworkLocation);
$(".work-entry:last").append(formattedworkDescription);


var formattedworkStart = HTMLworkStart;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[2].Employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[2].Title);
var formattedworkEmpTit = formattedworkEmployer + formattedworkTitle;
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[2].Dates);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[2].Location);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[2].Description);


$("#workExperience").append(formattedworkStart);
$(".work-entry:last").append(formattedworkEmpTit);
$(".work-entry:last").append(formattedworkDates);
$(".work-entry:last").append(formattedworkLocation);
$(".work-entry:last").append(formattedworkDescription);


var education = {	
	"schools" : [
	{
		"Name" : "Slippery Rock University",
		"Degree" : "B.S.",
		"Dates" : "8/1995 - 8/1999",
		
		"Location" : "Slippery Rock, PA",
		"Major" : "Information Systems conc. Management"
	},
 	"onlineCourses": {
	{
		"Title" : "JavaScript Crash Course",
		"School" : "Udacity",
		"URL" : "Udacity"
	 },
	 {
		"Title" : "Intro to HTML and CSS",
		"School" : "Udacity",
		"URL" : "Udacity.com"
	 },
	 {
		"Title" : "Using Git and GitHub",
		"School" : "Udacity",
		"URL" : "Udacity.com"
	 }
	]
};
		
//var Projects = {
//	"Title" : "Database System Design",
//	"Dates" : "ongoing",
//	"Description" : "Design and manage database systems using Filemaker Pro software",
//	"Image" : "images/database_DONOTUSE.png"
//}









//var formattedschoolStart = HTMLschoolStart;
//var formattedschoolName = HTMLschoolName.replace("%data%",education.Name);
//var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.Degree);
//var formattedschoolDates = HTMLschoolDates.replace("%date%",education.Dates);
//var formattedschoolLocation = HTMLschoolLocation.replace("%date%",education.Location);
//var formattedschoolMajor = HTMLschoolMajor.replace("%date%",education.Major);


//var formattedonlineClasses = HTMLonlineClasses;
//var formattedonlineTitle = HTMLonlineTitle.replace("%date%",education.onlineCourses.Title);
//var formattedonlineSchool = HTMLonlineSchool.replace("%date%",education.onlineCourses.School);

//var formattedprojectStart = HTMLprojectStart;
//var formattedprojectsTitle = HTMLprojectTitle.replace("%data%",Projects.Title);
//var formattedprojectsDates = HTMLprojectDates.replace("%data%",Projects.Dates);
//var formattedprojectesDescription = HTMLprojectDescription.replace("%data%",Projects.Desription);
//var formattedprojectImage = HTMLprojectImage.replace("%data%",Projects.Image);


//header section





//$("#education").append(formattedschoolStart);
//$("#education").append(formattedschoolName);
//$("#education").append(formattedschoolDegree);
//$("#education").append(formattedschoolDates);
//$("#education").append(formattedschoolLocation);
//$("#education").append(formattedschoolMajor);


//$("#projects").append(formattedprojectStart);
//$("#projects").append(formattedprojectsTitle);
//$("#projects").append(formattedprojectsDates);
//$("#projects").append(formattedprojectesDescription);
//$("#projects").append(formattedprojectImage);




