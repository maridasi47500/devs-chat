window.onload=function(){	// Get the modal
	 var modal = document.getElementById("myModal");
	
	 // Get the button that opens the modal
	 var btn = document.getElementById("myBtn");
	
	 // Get the <span> element that closes the modal
	 var span = document.getElementsByClassName("close")[0];
	
	 // When the user clicks on the button, open the modal
	 btn.onclick = function() {
	   modal.style.display = "block";
	   }
	
	   // When the user clicks on <span> (x), close the modal
	   span.onclick = function() {
	     modal.style.display = "none";
	     }
	
	     // When the user clicks anywhere outside of the modal, close it
	     window.onclick = function(event) {
	       if (event.target == modal) {
	           modal.style.display = "none";
	             }
	             } 
	var textareas=document.getElementsByTagName("textarea");
	for (var i=0;i<textareas.length;i++){
	textareas[i].addEventListener('keydown', function(e) {
		  if (e.key == 'Tab') {
			      e.preventDefault();
			      var start = this.selectionStart;
			      var end = this.selectionEnd;

			      // set textarea value to: text before caret + tab + text after caret
			       this.value = this.value.substring(0, start) +
			             "\t" + this.value.substring(end);
			  
			                 // put caret at right position again
			                     this.selectionStart =
			                           this.selectionEnd = start + 1;
			                             }
			                             });
	}
	             } 
function submitcode(){
	var frm=$("#msg-form");
	$.ajax({url:frm.attr("action"), type:frm.attr("method"),data:frm.serialize(),success:
	function(data){
                console.log(data,"ok data sent") 
	}});
	return false;
}
function alignmodal(qqpart){
var quqpart=["top","bottom","right"];
	var modal=$(".modal-content");
	for (var i =0;i<quqpart.length;i++){
         if (quqpart[i] == qqpart){
		 modal.addClass(qqpart);
	 }else{
		 modal.removeClass(quqpart[i]);
	 }
	}
	return false;

}
function scrolltobottom(){
	window.scrollTo(0, document.body.scrollHeight);
}
