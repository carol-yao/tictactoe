$( function() {

  // $('.board').on('click', '.tile', function() {
  //   $(this).toggleClass("taken");
  //   $(this).text("X")
  // });

  $('.player-x').on('click', function() {
    $('.board').on('click', '.tile', function() {
      $(this).attr("class", "taken");
      $(this).text("X")
    });
  });

  $('.player-o').on('click', function() {
    $('.board').on('click', '.tile', function() {
      $(this).attr("class", "taken");
      $(this).text("O")
    });
  });

  $('.reset').on('click', function() {
    $('.board div').attr("class", "tile").text("");
  })

})
