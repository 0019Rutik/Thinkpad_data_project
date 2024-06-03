from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Extract features from the request
    square_feet = float(request.form['square_feet'])
    num_bedrooms = int(request.form['num_bedrooms'])
    num_bathrooms = int(request.form['num_bathrooms'])

    # Prepare the features as a numpy array
    features = np.array([[square_feet, num_bedrooms, num_bathrooms]])

    # Predict using the model
    prediction = model.predict(features)

    return jsonify({
        'predicted_price': prediction[0]
    })

if __name__ == '__main__':
    app.run(debug=True)
