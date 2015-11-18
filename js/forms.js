$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {

  function chillScroll(){
    $('html,body').animate({
    scrollTop: $("#formloader").offset().top},
    'slow'); 
    $( "#formloader > div" ).hide(); 
  };

  $( ".reload" ).click(function() {
    $('html,body').animate({
    scrollTop: $("html").offset().top},
    'fast'); 
    $( "#formloader > div" ).delay(500).hide(0);
  });

  $( "#show_display_info" ).click(function() {
    chillScroll();
    $( ".display_info" ).show();
  });

  $( "#show_one_thumbnail" ).click(function() {
    chillScroll();
    $( ".one_thumbnail" ).show();
  });
  $( "#show_web" ).click(function() {
    chillScroll();
    $( ".web" ).show();
  });

  $( "#show_add_subtitles" ).click(function() {
    chillScroll();
    $( ".add_subtitles" ).show();
  });

  $( "#show_add_audio_track" ).click(function() {
    chillScroll();
    $( ".add_audio_track" ).show();
  });

  $( "#show_remove_audio_track" ).click(function() {
    chillScroll();
    $( ".remove_audio_track" ).show();
  });

  $( "#show_webm_for_web" ).click(function() {
    chillScroll();
    $( ".webm_for_web" ).show();
  });

  $( "#show_h264_for_web" ).click(function() {
    chillScroll();
    $( ".h264_for_web" ).show();
  });

  $( "#show_img_to_vid" ).click(function() {
    chillScroll();
    $( ".img_to_vid" ).show();
  });

  $( "#show_vid_to_img" ).click(function() {
    chillScroll();
    $( ".vid_to_img" ).show();
  });


  $('#generate').click(function(){
    $('#command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val() + 
      " " + $('#output_name').val())
  });

  $('#display_generate').click(function(){
    $('#display_command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val())
  });

  $('#web_generate').click(function(){
    $('#web_command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val())
  });

  $('#add_subtitles_generate').click(function(){
    $('#subtitles_command_line').val("ffmpeg" + 
      " -i " + $('#subtitles_input_name').val() + " -vf subtitles=" + $('#subtitles_name').val() + " " + $('#subtitles_output_name').val())
  });

  $('#add_audio_track_generate').click(function(){
    $('#add_audio_track_command_line').val("ffmpeg" + 
      " -i " + $('#audio_input_name').val() + " -i " + $('#audio_track_name').val() + " " + $('#audio_output_name').val())
  });

  $('#remove_audio_track_generate').click(function(){
    $('#remove_audio_track_command_line').val("ffmpeg" + 
      " -i " + $('#r_audio_input_name').val() + " " + $('#r_audio_track_name').val() + " -vcodec copy -an " + $('#r_audio_output_name').val())
  });

  $('#webm_for_web_generate').click(function(){
    $('#webm_for_web_command_line').val("ffmpeg" + 
      " -i " + $('#webm_input_name').val() + 
      " -codec:v libvpx -quality good -cpu-used 0 -b:v 500k -qmin 10 -qmax 42 -maxrate 500k -bufsize 1000k -threads 4 -vf scale=-1:480 -codec:a libvorbis -b:a 128k " + 
      $('#webm_output_name').val())
  });

  $('#h264_for_web_generate').click(function(){
    $('#h264_for_web_command_line').val("ffmpeg" + 
      " -i " + $('#h264_input_name').val() + 
      " -codec:v libx264 -profile:v high -preset slow -b:v 500k -maxrate 500k -bufsize 1000k -vf scale=-1:480 -threads 0 -codec:a libfdk_aac -b:a 128k " + 
      $('#h264_output_name').val())
  });

  $('#img_to_vid_generate').click(function(){
    // ffmpeg -f image2 -i image%d.jpg video.mpg
    $('#img_to_vid_command_line').val("ffmpeg" + 
      " -f image2 -i image%d.jpg " + $('#img_output_name').val())
  });

  $('#vid_to_img_generate').click(function(){
      // ffmpeg -i video.mpg image%d.jpg
    $('#vid_to_img_command_line').val("ffmpeg" + 
      " -i " + $('#vid_output_name').val() + 
      " image%d.jpg")
  });
});