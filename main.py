from flask import Flask, render_template, send_file
app = Flask(__name__)

@app.route('/')
def home_view():
    return render_template('index.html')


@app.route('/test')
def test():
    return render_template('test_site/index.html')


@app.route('/page-1')
def test1():
    return render_template('test_site/page-1.html')


@app.route('/page-2')
def test2():
    return render_template('test_site/page-2.html')


@app.route('/page-2-a')
def test3():
    return render_template('test_site/page-2-a.html')

@app.route('/blog')
def blog_view():
    return render_template('blog.html')


@app.route('/pay')
def pay_view():
    return render_template('pay.html')

@app.route('/card')
def download_contact():
    return send_file('static/media/files/contact.vcf')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
