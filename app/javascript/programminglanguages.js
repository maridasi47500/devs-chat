window.onload=function(){       // Get the modal
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
