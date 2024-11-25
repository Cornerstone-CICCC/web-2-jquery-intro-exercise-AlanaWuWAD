$(function() {
  $('#toggleButton').on('click',function(){
    $(this).next().toggle()
  })

  $('#colorButton').on('click', function(){
    $('#colorDiv').css({
      backgroundColor: 'green'
    })
  })

  $('#addClassButton').on('click',function(){
    $('#classDiv').addClass( "newClass" )
  })
  $('#removeClassButton').on('click',function(){
    $('#classDiv').removeClass( "newClass" )
  })

  $('#fadeInButton').on('click',function(){
    $('#fadeDiv').fadeIn()
  })
  $('#fadeOutButton').on('click',function(){
    $('#fadeDiv').fadeOut()
  })

  $('#slideUpButton').on('click',function(){
    $('#slideDiv').slideToggle()
  })
  $('#slideDownButton').on('click',function(){
    $('#slideDiv').slideDown()
  })
})