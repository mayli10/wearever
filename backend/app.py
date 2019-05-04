from flask import Flask, redirect, url_for, send_file
from flask_cors import CORS
from flask_dance.contrib.google import make_google_blueprint, google
from parser import readJSON
import json
import logging
import requests

app = Flask(__name__)
CORS(app)
app.secret_key = "supersekrit"
blueprint = make_google_blueprint(
    client_id="728797421623-2a1rs9k4cgquhkl7c0lab68rtgcvll84.apps.googleusercontent.com",
    client_secret="Za-apiLG7Dy0kx4BUudB3xmN",
    scope=['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.profile']
)
app.register_blueprint(blueprint, url_prefix="/login")

@app.route("/")
def index():
    return ("This is our shit")

@app.route("/product_data", methods=['GET'])
def product_data():
    # return requests.get('./data/products.json').json()
    return (readJSON("./data/products.json"))

@app.route("/product_info/<string:pid>", methods=['GET'])
def product_info(pid):
    with open("./data/products.json", 'r') as fp:
            print("COMES HERE")
            data = json.load(fp)
    for d in data['products']:
        if d['sku'] == pid:
            hello = d
    return (str(hello))


@app.route('/get_image/<string:filepath>/<string:image_url>', methods = ['GET'])
def get_image(image_url, filepath):
    try:
        filename = './images/' + filepath + "/" + image_url
        print(filename)
        return send_file(filename, mimetype='image/png')
    except:
        return "None"

@app.route("/login")
def google_login():
    if not google.authorized:
        return redirect(url_for("google.login"))
    resp = google.get("/plus/v1/people/me")
    assert resp.ok, resp.text
    return "You are {email} on Google".format(email=resp.json()["emails"][0]["value"])

def searchProduct (pid, json_obj):
    for entry in json_obj:
        if pid == entry ['sku']:
            return entry ['title']

if __name__ == "__main__":
    app.run(port=3001)
