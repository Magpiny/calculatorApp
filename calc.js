let container = document.querySelector(".container");
// alert(container.nodeType)

let close = document.querySelector("#exit-application");
close.addEventListener("click", function close(){
    
   // alert("Hello");
    // window.open('http://localhost:5500/calc.html', '_self', '');
   // window.close();
   // document.getElementsByTagName('html')[0].remove ();
   //location.replace("./blank.html");
   //window.top.close();
   let close = confirm("Are you sure you want to exit this App?");
   if (close){
       window.close();
       location.replace("./blank.html");
   }
   
   

   
});