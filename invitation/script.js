$(".contactdiv").slideDown();
$(".contactdiv").addClass("fadeInUp");
$(".paper").addClass("paperup");
$(".envelope").addClass("wiggle");

  $(".envelope").click(function() {
      $(".paper").removeClass("paperup").addClass("fadeUp");
       $(".paperbig").addClass("fadeDown").removeClass("fadeUp");
              });

 $(".exit").click(function() {
    $(".paper").removeClass("fadeUp").addClass("fadeDown");              $(".paperbig").addClass("fadeUp").removeClass("fadeDown");;
              });