import consumer from "channels/consumer"

// app/javascript/channels/chat_channel.js

var chat= consumer.subscriptions.create({ channel: "ChatChannel", room: $("#roomname").html() }, {
   received(data) {
       this.appendLine(data)
         },

           appendLine(data) {
               const html = this.createLine(data)
                   const element = document.querySelector("[data-chat-room='"+$("#roomname").html()+"']")
                       element.insertAdjacentHTML("beforeend", html)
		   if ($("#userid").val() == data["userid"]){
		  window.scrollTo(0, document.body.scrollHeight); 
		   }
                         },

                           createLine(data) {
                               return `
                                     <article class="chat-line">
                                             <span class="">${data["mylang"]}</span>
                                                     <span class="body">${data["code"]}</span>
						     <hr>
                                                     <span class="body">${data["print"]}</span>
                                                           </article>
                                                               `
                                                                 }
                                                                 })

chat.send({code: "1+3",print:"4",mylang:"ruby"})
