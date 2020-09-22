from nltk.stem.snowball import SnowballStemmer
from nltk.tokenize import word_tokenize
import nltk
import re
from allennlp.predictors.predictor import Predictor

def dummy_processText(text):
    predictor = Predictor.from_path("https://storage.googleapis.com/allennlp-public-models/ner-model-2020.02.10.tar.gz")
    stemmer = SnowballStemmer('english')
    tokens = word_tokenize(str(text).strip())
    pos_tags = nltk.pos_tag(tokens)
    nouns = [str(x[0]).lower().strip() for x in pos_tags if 'NN' in x[1]]

    amounts = re.findall(r'[$][0-9]+',text)
    amount = 0
    if amounts:
        amount = int(amounts[0][1:])
    friendName = ''
    tags = predictor.predict(text)
    for i in range(len(tags['words'])):
        if 'U' in tags['tags'][i]:
            friendName = tags['words'][i]

    return friendName,amount
