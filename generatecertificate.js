// Get current date
var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;


// Get Storyline variables
var player = GetPlayer();
var username = player.GetVar("uName");

// MODIFY LINES 14 and 15 ACCORDING TO YOUR NEEDS
var is_completion_only = false;                   //Set to True if course is marked for completion
var need_score = true;                            // Set to False if quiz score is not needed

if (is_completion_only == false & need_score == true) {
  var score = player.GetVar("uScore");
} else {
  var score = "Complete";
}

var doc = new jsPDF({
  orientation: 'landscape'
})

// Get name of course, same as title of folder when storyline course is published
var coursetitle = String(document.getElementsByTagName("title")[0].innerHTML);

// New JSpdf document
var img = new Image;
// Add text to certificate image
img.onload = function() {
  doc.addImage(this, 0, 0, 297, 210);
  doc.setFontSize(40); 
  doc.setTextColor(93, 148, 177);                       // Enter RGB color code for text
  doc.setFont('helvetica', 'normal');                   // Set font for name
  doc.setFontType('normal');       
  doc.text(username, 15, 70, null, null, 'left'); 
   doc.setFont('helvetica', 'normal');                  // Set font course title 
   doc.text(coursetitle, 15, 125, null, null, 'left');
   doc.setFontSize(15);                                 // Set font size of date
   doc.text(date, 101, 190, null, null, 'center'); 
   doc.text(String(score), 15, 190, null, null, 'left');
   doc.save(username + "_" + coursetitle + "_Certificate.pdf");       // PDF name upon download
  };
img.crossOrigin = "";  
img.src = "certificate_image.png";                      // Name of certificate template image