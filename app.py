import chatbot
from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("chat.html")

@app.route("/getResponse")
def response():
    input = request.args.get("q")
    return chatbot.response(input)
