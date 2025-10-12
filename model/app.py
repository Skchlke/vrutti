import sys
from flask import Flask, request, jsonify
from flask_cors import CORS  # type: ignore
import joblib
import random
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
import os
import cohere # type: ignore

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Cohere with your API key
cohere_api_key = "RmkoGb9rIjgQJWlvpZs9xDxYkG1yXID1rbyX12iB"  # Replace with your actual key
co = cohere.Client(cohere_api_key)

# Define the full path to the model
full_path = os.path.abspath("model/DecisionTreeClassifier.pkl")

# Load the model
model = joblib.load(full_path)

# Initialize label encoders
label_encoders = {}

# List of expected columns
expected_columns = ['Percentage at School', 'Percentage at College',
       'Hours Studing per day', 'Interested in extracurricular activites?',
       'Self-learning capability?', 'Are you Introvert?',
       'Area That Align with Your Mission', 'Skills', 'Interested Subjects',
       'Hobbies', 'Fulfilling Activity', 'Strengths']

# List of numerical columns (replace this with your actual numerical columns)
numerical_columns = ['Percentage at School', 'Percentage at College', 
                     'Hours Studing per day', 'Self-learning capability?']

# Attempt to load encoders for categorical features
# Features that are manually encoded (e.g., Yes/No, Introvert/Extrovert)
manually_encoded_features = ['Interested in extracurricular activites?', 'Are you Introvert?']

# Attempt to load encoders for categorical features (excluding manually handled ones)
for feature in expected_columns:
    if feature not in numerical_columns and feature not in manually_encoded_features:
        encoder_path = os.path.abspath(f"encoders/{feature}_encoder.pkl")
        print(f"Checking path for encoder: {encoder_path}")
        if os.path.exists(encoder_path):
            label_encoders[feature] = joblib.load(encoder_path)
            print(f"Loaded encoder for: {feature}")
        else:
            print(f"Warning: Encoder for '{feature}' not found. Check your training process.")


# Mapping expected columns to the keys in the request
feature_mappings = {
    'Percentage at School': 'What is your percentage at School?',
    'Percentage at College': 'What is your Percentage at College?',
    'Hours Studing per day': 'Hours learning per day',
    'Interested in extracurricular activites?': 'Interested in extracurricular activities?',
    'Self-learning capability?': 'Self-learning capability?',
    'Are you Introvert?': 'How to do prefer to interact socially?',
    'Area That Align with Your Mission': 'Which of these areas align with your mission?',
    'Skills': 'What skills do you excel at?',
    'Interested Subjects': 'What industries or fields interest you the most?',
    'Hobbies': 'Which hobbies do you enjoy most?',
    'Fulfilling Activity': 'What activities make you feel most fulfilled?',
    'Strengths': 'What is your strength?'
}

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Extracting data safely from JSON request
        demographics = data.get("Demographics", {})
        passion = data.get("Passion", {})
        profession = data.get("Profession", {})
        vocation = data.get("Vocation", {})
        mission = data.get("Mission", {})

        # Debug: Print the received data
        print(f"Received data: {data}")

        import json
        print("Received JSON:", json.dumps(request.json, indent=4))

        '''
        # Validate input data
        if not data or not isinstance(data, dict):
            return jsonify({"error": "Invalid input data"}), 400

        # Flatten the nested structure, filtering only the relevant features
        flattened_data = {}

        # Flatten the nested structure, filtering only the relevant features
        flattened_data = {}
        print("Started flattening data...")

        for section, questions in data.items():
            for question, value in questions.items():
                for feature, expected_question in feature_mappings.items():
                    if question == expected_question:
                        flattened_data[feature] = value

        # Remove the target column from the input data
        if 'Suggested Job Role' in flattened_data:
            del flattened_data['Suggested Job Role']

        # Debugging: Ensure flattening process is done
        print(f"Flattened Data: {flattened_data}")

        # Ensure all required columns are present
        missing_columns = [col for col in expected_columns if col not in flattened_data]
        print(f"Missing Columns: {missing_columns}")

        for col in missing_columns:
            flattened_data[col] = "Unknown"  # Assign default values

        print("Completed flattening and filling missing columns.")

        # Ensure all required columns are present
        missing_columns = [col for col in expected_columns if col not in flattened_data]
        for col in missing_columns:
            flattened_data[col] = "Unknown"  # Assign default values


        print("Starting to process data...")

        # Convert incoming string data to numerical data
        numerical_data = []
        for feature, value in flattened_data.items():
            print(f"Processing feature: {feature}, value: {value}")

            if feature == 'Interested in extracurricular activites?':
                numerical_data.append(1 if value == 'Yes' else 0)  # Encode Yes/No as 1/0
                print(f"Encoded value: {numerical_data[-1]}")

            elif feature == 'Are you Introvert?':  # Properly handle "Introvert"/"Extrovert"
                if value == 'Introvert':
                    numerical_data.append(1)  # Assign 1 to Introverts
                elif value == 'Extrovert':
                    numerical_data.append(0)  # Assign 0 to Extroverts
                else:
                    print(f"Invalid category: {value}")
                    return jsonify({"error": f"Invalid category '{value}' for feature: {feature}"}), 400

            elif feature in ['Percentage at School', 'Percentage at College', 'Hours Studing per day', 'Self-learning capability?']:  # Check if the feature is numerical
                try:
                    numerical_data.append(int(value))  # Convert numerical value to int
                    print(f"Converted value: {numerical_data[-1]}")
                except ValueError:
                    print(f"Invalid numeric value: {value}")
                    return jsonify({"error": f"Invalid numeric value '{value}' for {feature}"}), 400

            elif isinstance(value, str):  # Categorical features
                try:
                    value_lower = value.casefold()
                    dataset_values_dict = {val.casefold(): val for val in label_encoders[feature].classes_}
                    if value_lower in dataset_values_dict:
                        value = dataset_values_dict[value_lower]
                    encoded_value = label_encoders[feature].transform([value])[0]
                    numerical_data.append(encoded_value)
                    print(f"Encoded value: {numerical_data[-1]}")
                except ValueError:
                    print(f"Unknown category: {value}")
                    return jsonify({"error": f"Unknown category '{value}' for feature: {feature}"}), 400

            else:  # For other types of data
                print(f"Unsupported data type: {type(value)}")
                return jsonify({"error": f"Unsupported data type for feature: {feature}"}), 400


        # Convert the numerical_data list into a NumPy array (ML models expect a 2D array)
        #numerical_data_array = np.array(numerical_data).reshape(1, -1)
        #print("Started processing the request.")
        '''

        # Example of dynamically calculating skill progress with random % between 30 and 100
        def calculate_progress():
            return random.randint(30, 100)  # Random progress between 30 and 100


        # Extract features from the request data
        features = [data.get(key) for key in ['Industry', 'Passion', 'Values', 'Preferred_Environment', 'Interaction', 'Skillset', 'Extracurricular']]
    
        # Send to Cohere with clear structure + request JSON response
        prompt = f"""
        Generate a JSON object that provides personalized Ikigai-based career guidance for someone who is interested in the following: {features}.

        The JSON should have the following structure:

        {{
        "ikigai_discovery": {{
            "what_you_love": "...",
            "what_you_are_good_at": "...",
            "what_the_world_needs": "...",
            "what_you_can_be_paid_for": "..."
        }},
        "career_sweet_spot": "One-paragraph summary of their Ikigai alignment.",
        "recommended_careers": [
            {{
            "title": "...",
            "description": "...",
            "key_skills": ["...", "..."],
            "typical_salary": "$XX,XXX - $YY,YYY"
            }},
            ...
        ],
        "skills_development_plan": {{
            "skills": [
            {{
                "name": "...",
                "progress": {calculate_progress()}  # Random progress calculation
            }},
            {{
                "name": "...",
                "progress": {calculate_progress()}  # Random progress calculation
            }},
            {{
                "name": "...",
                "progress": {calculate_progress()}  # Random progress calculation
            }},
            ...
            ],
            "areas_for_growth": [
            "...",
            "...",
            "..."
            ]
        }}
        }}

        Respond ONLY with valid JSON.
        """

        response = co.generate(
        model='command-r-plus',
        prompt=prompt,
        max_tokens=800,
        temperature=0.8,
        stop_sequences=["</end>"]
        )

        text_output = response.generations[0].text.strip()
        print("Finished processing the request.")

        # Print the dynamic values in the terminal
        print("Dynamic Values Generated by Cohere:")
        print(text_output)


        # Try parsing the output to JSON
        import json
        try:
            json_output = json.loads(text_output)
        except json.JSONDecodeError:
            return jsonify({"error": "Failed to parse Cohere output as JSON", "raw": text_output}), 500
        
        # Add this debug line before returning:
        print("Final response being sent:", json_output)

        return jsonify(json_output)
        

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500
    
    """
        # Make prediction using the model
        prediction = model.predict(numerical_data_array)
        print(f"Numerical Data Array: {numerical_data_array}")
        print(f"Expected Model Input Shape: {model.n_features_in_}")

    
        # If the prediction is numeric, it might need decoding (for classification problems)
        # Assuming 'prediction' is the output from model.predict()

        job_role_encoder_path = os.path.abspath(f"encoders/Suggested Job Role_encoder.pkl")
        job_role_encoder = joblib.load(job_role_encoder_path)

        if hasattr(model, 'classes_'):  # Check if the model is a classifier
            # Use inverse_transform to convert the numeric prediction back to the original label
            decoded_prediction = job_role_encoder.inverse_transform(prediction)
            return jsonify({"prediction": decoded_prediction.tolist(), "message": "Model prediction: The suggested job role is " + str(decoded_prediction[0])}), 200
        else:
            # If it's a regression problem or the model doesn't have 'classes_', just return the raw prediction
            return jsonify({"prediction": prediction.tolist(), "message": "Model prediction: The suggested job role index is " + str(prediction[0])}), 200

    
    except Exception as e:
        import traceback
        print("Full Error Traceback")
        print(sys.exc_info())  # Prints full error details
        print(f"Error: {str(e)}") 
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

    """

# This should be the LAST LINE before the if __name__ block
if __name__ == "__main__":
    app.run(debug=True)

