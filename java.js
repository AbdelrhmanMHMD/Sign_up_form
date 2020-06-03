function validateform(){
   var x = document.forms["myform"].value;

}
function myFunction(){
    var inpobj;
    if (!inpobj.checkValidity()){
        alert(inpobj.validationMessage);
    }
}