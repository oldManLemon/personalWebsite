

function more(){
  var x = document.getElementById('more');
  if(x.style.display === "none"){
      console.log('Display!');
      x.style.display= 'block';
  }else{
      console.log('Display none!');
      x.style.display = "none";
  }
}

//
//https://stackoverflow.com/questions/3331353/transitions-on-the-display-property