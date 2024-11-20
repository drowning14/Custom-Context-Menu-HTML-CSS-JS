const $ = document;
const contextMenu = $.querySelector('#contextMenu');
function contextHandler(e){
  e.preventDefault();
  if(contextMenu.style.display === 'none'){
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.display = 'block';
  }else{
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
  }
}
function RemoveContextMenu(){
  contextMenu.style.display = 'none';
}
function keyDownHandler(e) {
  if(e.keyCode === 27) contextMenu.style.display = 'none';
}
$.body.addEventListener('contextmenu',contextHandler);
$.body.addEventListener('click',RemoveContextMenu);
$.body.addEventListener('keydown',keyDownHandler);