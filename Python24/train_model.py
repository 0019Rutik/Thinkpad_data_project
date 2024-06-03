import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pickle

# Load the dataset
data = pd.read_csv('real_estate_data.csv')

# Assume the dataset has columns: 'square_feet', 'num_bedrooms', 'num_bathrooms', and 'price'
X = data[['square_feet', 'num_bedrooms', 'num_bathrooms']]
y = data['price']

# Split the dataset
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
print(f'Mean Squared Error: {mean_squared_error(y_test, y_pred)}')

# Save the model to a file
with open('model.pkl', 'wb') as file:
    pickle.dump(model, file)
