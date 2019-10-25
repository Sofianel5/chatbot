function sendChat() {
  message = document.getElementById('input').value
  var outgoing_msg = document.createElement("div")
  outgoing_msg.classList.add("outgoing_msg")
  var sent_msg = document.createElement("div")
  sent_msg.classList.add("sent_msg")
  var p = document.createElement("p")
  var txt = document.createTextNode(message)
  p.appendChild(txt)
  sent_msg.appendChild(p)
  outgoing_msg.appendChild(sent_msg)
  document.getElementById("chatstream").appendChild(outgoing_msg)
  document.getElementById('input').value = ""
  var request = new XMLHttpRequest();
  request.open("GET", "/getResponse?q="+message, true);
  request.send()
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var responseText = this.responseText
      var incoming_msg = document.createElement("div")
      incoming_msg.classList.add("incoming_msg")
      var incoming_msg_img = document.createElement("div")
      incoming_msg_img.classList.add("incoming_msg_img")
      var img = document.createElement("img")
      img.src = "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
      var received_msg = document.createElement("div")
      received_msg.classList.add("received_msg")
      var received_withd_msg = document.createElement("div")
      received_withd_msg.classList.add("received_withd_msg")
      var p = document.createElement("p")
      var txt = document.createTextNode(responseText)
      incoming_msg_img.appendChild(img)
      incoming_msg.appendChild(incoming_msg_img)
      p.appendChild(txt)
      received_withd_msg.appendChild(p)
      received_msg.appendChild(received_withd_msg)
      incoming_msg.appendChild(received_msg)
      document.getElementById("chatstream").appendChild(incoming_msg)
    }
  }

}
function handleEnter(e) {
  if (e.keyCode == 13) {
    sendChat()
  }
}
