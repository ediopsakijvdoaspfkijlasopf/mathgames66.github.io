function f11click()
{var docElm=document.documentElement;console.log(docElm);if(docElm.requestFullscreen){docElm.requestFullscreen();}else if(docElm.mozRequestFullScreen){docElm.mozRequestFullScreen();}else if(docElm.webkitRequestFullScreen){docElm.webkitRequestFullScreen();}else if(docElm.msRequestFullscreen){docElm.msRequestFullscreen();}
if(docElm.requestFullscreen){document.addEventListener("fullscreenchange",function(){if(!document.fullscreen){$('#full').show();$('#no_full').hide();}},false);}else if(docElm.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",function(){if(!document.mozFullScreen){$('#full').show();$('#no_full').hide();}},false);}else if(docElm.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",function(){if(!document.webkitIsFullScreen){$('#full').show();$('#no_full').hide();}},false);}else if(docElm.msRequestFullScreen){document.addEventListener("msfullscreenchange",function(){if(!document.msFullScreen){$('#full').show();$('#no_full').hide();}},false);}}
function cancelFullscreen(){if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}}
function showHide(full){if(document.getElementById(full)){var obj=document.getElementById(full);if(obj.style.display!="block"){obj.style.display="block";}
else obj.style.display="none";}
else alert("Ёлемент с id: "+full+" не найден!");}
function showHide(no_full){if(document.getElementById(no_full)){var obj=document.getElementById(no_full);if(obj.style.display!="block"){obj.style.display="block";}
else obj.style.display="none";}
else alert("Ёлемент с id: "+full+" не найден!");}
document.addEventListener("keyup",function(e){if(e.keyCode===27){$('#full').show();$('#no_full').hide();}});