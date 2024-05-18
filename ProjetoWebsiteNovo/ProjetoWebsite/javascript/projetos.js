

// Caixa-1
document.getElementById('caixa-1').addEventListener('click', function() {
    document.getElementById('videoContainer-1').style.display = 'block';
    var video = document.getElementById('meuVideo-1');
    video.play();
  });
  
  document.getElementById('fecharVideo-1').addEventListener('click', function() {
    document.getElementById('videoContainer-1').style.display = 'none';
    var video = document.getElementById('meuVideo-1');
    video.pause();
  });
  
  document.getElementById('fecharVideo-1').addEventListener('click', function() {
    var video = document.getElementById('meuVideo-1');
    video.currentTime = 0;
  });


// Caixa-2
document.getElementById('caixa-2').addEventListener('click', function() {
    document.getElementById('videoContainer-2').style.display = 'block';
    var video = document.getElementById('meuVideo-2');
    video.play();
  });
  
  document.getElementById('fecharVideo-2').addEventListener('click', function() {
    document.getElementById('videoContainer-2').style.display = 'none';
    var video = document.getElementById('meuVideo-2');
    video.pause();
  });
  
  document.getElementById('fecharVideo-2').addEventListener('click', function() {
    var video = document.getElementById('meuVideo-2');
    video.currentTime = 0;
  });

// Caixa-3
document.getElementById('caixa-3').addEventListener('click', function() {
    document.getElementById('videoContainer-3').style.display = 'block';
    var video = document.getElementById('meuVideo-3');
    video.play();
  });
  
  document.getElementById('fecharVideo-3').addEventListener('click', function() {
    document.getElementById('videoContainer-3').style.display = 'none';
    var video = document.getElementById('meuVideo-3');
    video.pause();
  });
  
  document.getElementById('fecharVideo-3').addEventListener('click', function() {
    var video = document.getElementById('meuVideo-3');
    video.currentTime = 0;
  });