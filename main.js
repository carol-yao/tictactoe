$( function() {

  $('.player-x').on('click', function() {
    $('.board').on('click', '.tile', function() {
      $(this).attr("class", "taken");
      $(this).html('<h2 class="letters">X</h2>')
    });
  });

  $('.player-o').on('click', function() {
    $('.board').on('click', '.tile', function() {
      $(this).attr("class", "taken");
      $(this).html('<h2 class="letters">O</h2>')
    });
  });

  $('.reset').on('click', function() {
    $('.board div div').attr("class", "tile").html("");
  })

})
