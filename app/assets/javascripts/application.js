// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery_nested_form
//= require_tree .
//= require chosen-jquery
//= require d3
//= require stupidtable.min

$(window).load(function () {
      $("#close").click(function(){
        $(".msgbox").fadeOut("400")
      $.cookie('fadeOut', true);
});

    if($.cookie('fadeOut') == 'true'){
        $('.msgbox').hide();
    } else {
        $('.msgbox').click();
    }
});

$(document).ready(function() {
     $("#hide_all").click(function () {
     $(".answer").slideToggle("slow");
     $(".comment").slideToggle("slow");
     $(".answer_2").slideToggle("slow");
     $("#comment_form").slideToggle("slow");
  });

});

click_reset = function() {
  $(".chzn-select").val('').trigger("liszt:updated");
  $(".search-choice").remove();
  $("#search_button").click();
}
