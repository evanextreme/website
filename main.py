from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def home_view():
    return render_template('index.html')


@app.route("/contact")
def contact_view():
    return render_template('contact.html')


@app.route("/pay")
def pay_view():
    return render_template('pay.html')


if __name__ == '__main__':
    app.run(ssl_context='adhoc')
