var work = {
	"jobs": [
	{
		"employer": "Churchill Software",
		"title": "Software Developer",
		"location": "Bangalore, India",
		"dates": "04/1999 - 04/2000",
		"description": "software developer"
	},
	{
		"employer": "Quba Soft",
		"title": "Team Lead",
		"location": "Hyderabad, India",
		"dates": "08/2000 - 08/2001",
		"description": "software developer"
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Movie Trailer Website",
		"dates": "abc",
		"description": "hjhdkhdhl",
		"images": ["C:/Users/priya/frontend-nanodegree-resume/images/fry.jpg"]
	},
	{
		"title": "Build a portfolio",
		"dates": "ggh",
		"description": "hhdhdh",
		"images": ["C:/Users/priya/frontend-nanodegree-resume/images/fry.jpg"]
	}
	
	],
	
};


projects.display = function() {projects.projects.forEach(function(project){
	console.log(project.title);
	$("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);	
	var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
	$(".project-entry:last").append(formattedDescription);
	for (i=0;i<project.images.length; i++) {
	var formattedImages = HTMLprojectImage.replace("%data%", project.images[i]);
	$(".project-entry:last").append(formattedImages);
	}
	});
}
projects.display();


var bio = {
	"bio": [
	{
		"name": "Priya Balakrishnan",
		"role": "Web Developer",
		"welcomeMessage": "Web Ninja",
		"biopic": "gdg",
		"contacts": {
			"mobile": "9088213346",
			"email": "andu_pri@yahoo.com",
			"github": "pribala/github.com",
			"twitter": "jhdhdj",
			"location": "Bridgewater, NJ"
		},
		"skills": ["HTML", "CSS", "Python"]
	}
	]
};
var education = {
	"schools": [
	{
		"name": "REC",
		"location": "Silchar, India",
		"degreeDates": "Aug 1996",
		"url": "jhdd",
		"majors": ["Civil"]
	},
	{
		"name": "hdggd",
		"location": "jhhdh",
		"degreeDates": "dhhd",
		"url": "jhdjdh",
		"majors": ["hhdh"]
	}
	],
	"onlineCourses": [
	{
		"title": "Fullstack",
		"school": "Udacity",
		"dates": "11/2016",
		"url": "https://udacity.com"
	}
	]
};
for (var i in bio.bio){
var formattedname = HTMLheaderName.replace("%data%", bio.bio[i].name);
$("#header").append(formattedname);
var skilllength = bio.bio[i].skills.length;
if ( skilllength > 0) {
	$("#header").append(HTMLskillsStart);
	for (s=0; s < skilllength; s++) {
	var formattedskill = HTMLskills.replace("%data%", bio.bio[i].skills[s]);
	$("#skills").append(formattedskill);
	}
}
}


function displayWork(){
work.jobs.forEach(function(job) {
	$("#workExperience").append(HTMLworkStart);
	//console.log(job);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
	//var formattedDate = HTMLworkDates.replace("%date%", work.jobs[job].dates);
	var formattedDate = HTMLworkDates.replace("%data%", job.dates);
	//console.log(formattedDate);
	var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
	//console.log(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription);

	});
}
displayWork();
$(document).click(function(loc){
var x = loc.pageX;	
var y = loc.pageY;
console.log(x);
console.log(y);
logClicks(x,y);

});
$("#main").append(internationalizeButton);

function inName(name){
    var fname = name.trim().split(" ");
    var f = fname[0].slice(0,1).toUpperCase();
	var name =  fname[0].slice(1).toLowerCase();
	var iName = f + name;
	iName = iName.concat(" ",fname[1].toUpperCase());
	return iName;
}	
//append google map
//$("#mapDiv").append(googleMap); 
