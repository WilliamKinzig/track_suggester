$(document).ready(function() {
  var age = parseInt(prompt("SELECT THE ANSWER THAT DESCRIBES YOU:\n" +
  " 1) Would you enjoy spending your time making " +
  "things look and work well?\n2) Do you like the idea of working for a larger" +
  "company on business software? \n3) Are you interested in working for an " +
   "enterprise-level company, as an Android developer, or in high performance" +
   " applications?\n4) Do you like the idea of building out small sites for " +
   "brands, businesses, and organizations?\n5)Would would like to build "+
   "interactive web applications? Create apps that involve users creating" +
   " accounts, entering information, and interacting with dynamic content?"));


  if (age === 1) {
    $('#CSS').show();
  } else if (age === 2) {
    $('#cSharp').show();
  } else if (age === 3) {
    $('#Java').show();
  } else if (age === 4) {
    $('#PHP').show();
  } else {
    $('#RUBY').show();
  }
});
