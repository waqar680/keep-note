function myFunction(){
   const node = document.createElement("p");
   node.classList.add("name")
   var input = document.getElementById("input-note").value;
   node.innerText = input;
   document.body.appendChild(node);
}

// let search = document.getElementById("search-bar");
// search.addEventListener('keypress',function(){
//    console.log('its ok');
// })
function searchnote(){
   let notes = document.getElementById("search-bar").value;
   notes = notes.toLowerCase();
   let noteName = document.querySelectorAll(".name");
   for( let i = 0; i<noteName.length; i++){
      if(noteName[i].innerHTML.toLowerCase().includes(notes)){
         noteName[i].style.display = "block";
      }
      else{
         noteName[i].style.display = "none";
      }
      
   }
}
let cancel = document.getElementsByClassName("name");


cancel.addEventListener('dbclick',function(){
   console.log('its ok');
})