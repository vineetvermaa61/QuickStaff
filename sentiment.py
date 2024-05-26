from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from flask_cors import CORS

app = Flask(_name_)
CORS(app)

tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

@app.route('/api/sentiment', methods=['POST'])
def analyze_sentiment():
    text = request.json['text']
    tokens = tokenizer(text, return_tensors='pt')
    result = model(tokens)
    sentiment = int(torch.argmax(result.logits)) + 1
    return jsonify({'sentiment': sentiment})

if _name_ == "_main_":
    # Threaded option to enable multiple instances for multiple user access support
    app.run(debug=False, threaded=True, port=5000)