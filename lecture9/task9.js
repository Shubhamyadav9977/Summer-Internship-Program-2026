function changetext()
 {
  let input= document.getElementById("details").Value;
  let heading= document.getElementById("heading");
  if (input==="")
  {
      heading.innerText ="Please Enter Your Good Name";
  }else{
    heading.innerText = "Hello"+ input ;
  }
}
function showNotification()
{
  alert("BOM Alert");
}
function changewebsite()
{
  window.open("https://www.youtube.com");
}