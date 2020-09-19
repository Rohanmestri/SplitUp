from flask import Flask, json, request

app = Flask(__name__)

@app.route('/SaveText', methods = ['POST'])
def post_text():
    print(request.json)
    return json.dumps({"success": True}), 201

if __name__ == '__main__':
    print('Server Started...')
    app.run(host='0.0.0.0')