from flask import Flask, json, request
import re
import allennlp
from allennlp.predictors.predictor import Predictor
import allennlp_models.tagging
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.snowball import SnowballStemmer
import firebase_admin
from firebase_admin import credentials, db


def fetchExpenses():
    expenses = []
    categories = {}
    with open('ExpenseList.txt','rt') as f:
        expenseList = f.read().strip().split('\n')
        for expense in expenseList:
            splitted = expense.split('-')
            expenses.append(stemmer.stem(splitted[0].strip()))
            categories[stemmer.stem(splitted[0].strip())] = splitted[1].strip()

    return expenses, categories

def processText(text):
    tokens = word_tokenize(str(text).strip())
    pos_tags = nltk.pos_tag(tokens)
    nouns = [str(x[0]).lower().strip() for x in pos_tags if 'NN' in x[1]]
    currExpense = ''
    currExpenseCategory = ''
    
    for noun in nouns:
        if stemmer.stem(noun) in expenses:
            currExpense = noun
            currExpenseCategory = categories[stemmer.stem(noun)]
            break

    amounts = re.findall(r'[$][0-9]+',text)
    amount = 0
    if amounts:
        amount = int(amounts[0][1:])
    userName = ''
    tags = predictor.predict(text)
    for i in range(len(tags['words'])):
        if 'U' in tags['tags'][i]:
            userName = tags['words'][i]

    return userName,amount,currExpense,currExpenseCategory

def saveData(userName,amount,currExpense,currExpenseCategory,userID):
    friendsDict = db.reference('/'+userID+'/Friends').get()
    friends = []
    friendIDs = []
    friendID = ''

    for friend in friendsDict:
        friends.append(friendsDict[friend])
        friendIDs.append(friend)
        if friendsDict[friend]['Name'] == userName:
            friendID = friend

    data = {
        "Amount": amount,
        "Status": 'pending',
        "Category": currExpense,
        "UserID": friendID,
        "UserName": userName,
    }
    try:
        db.reference('/'+userID+'/Transactions').push(data)
        print('Saved data successfully')
    except:
        print('Error in saving data to firebase')


app = Flask(__name__)

@app.route('/SaveText', methods = ['POST'])
def post_text():
    print(request.json)
    text = str(request.json['text'])[:-1]
    userName,amount,currExpense,currExpenseCategory = processText(text)
    userID = request.json['user']
    saveData(userName,amount,currExpense,currExpenseCategory,userID)
    return json.dumps({"success": True}), 201


if __name__ == '__main__':
    stemmer = SnowballStemmer('english')
    cred = credentials.Certificate('config.json')
    firebase_admin.initialize_app(cred, {'databaseURL' : 'https://splitupdb.firebaseio.com'})
    predictor = Predictor.from_path("https://storage.googleapis.com/allennlp-public-models/ner-model-2020.02.10.tar.gz")
    expenses, categories = fetchExpenses()
    print('Server Started...')
    app.run(host='0.0.0.0')