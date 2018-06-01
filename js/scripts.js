
$(document).ready(function() {

  var courseSuggestion = $("input:radio[name=course]:checked").val();

  if (courseSuggestion === "1") {
    $('#weRecommend').show();
    $('#resultCSS').show();

  }
}
