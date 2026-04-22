# 🏥 Saanjh Sahayak

### *A Clinical Decision Support & Caregiver Assistance Platform*

---

## 📌 Overview

**Saanjh Sahayak** is a full-stack MERN-based healthcare platform designed for *Saanjh*, a home for the elderly. It helps caregivers and doctors efficiently manage patient health records while leveraging AI to provide disease risk prediction and clinical decision support.

The system centralizes medical data, improves accessibility, and enables early detection of potential health risks using a fine-tuned Large Language Model (LLM).

---

## 🚀 Problem Statement

Elder care homes often face challenges such as:

* Fragmented or manual health record management
* Difficulty in tracking patient history over time
* Lack of early risk detection for diseases

This project solves these issues by providing a **centralized, intelligent, and AI-assisted healthcare management system**.

---

## 💡 Key Features

### 👩‍💼 Admin

* Register patients and caregivers
* Auto-generate unique IDs
* Assign caregivers to patients

### 🧑‍⚕️ Caregivers

* Upload and edit patient medical reports
* View doctor’s notes and diet plans
* Trigger AI-based disease risk prediction

### 👨‍⚕️ Doctors

* View patient reports
* Add diagnosis, notes, and diet plans
* Use chatbot assistance for quick medical insights

### 🤖 AI Integration

* **Disease Prediction:** Fine-tuned *Ollama Biomistral 7B* model
* **Chatbot:** Powered by *Gemini API*

---

## 🏗️ Tech Stack

**Frontend:**

* React.js
* CSS

**Backend:**

* Node.js
* Express.js

**AI/ML Layer:**

* Flask (ML microservice)
* Ollama Biomistral 7B (fine-tuned)
* Gemini API (chatbot)

**Database:**

* MongoDB

---

## 🔄 System Architecture

```
Frontend (React)
        ↓
Backend (Express)
        ↓
Flask API (ML Service)
        ↓
LLM (Biomistral 7B)
        ↓
MongoDB (Storage)
```

---

## 🔁 API Flow

1. User uploads patient report via frontend
2. React sends request to Express backend
3. Backend forwards data to Flask ML service
4. Flask processes input and sends it to LLM
5. LLM returns disease risk prediction
6. Response is stored in MongoDB and displayed to user

---

## 👤 User Flow

1. Admin registers patients and caregivers
2. Caregivers upload patient reports
3. Doctors review reports and add medical notes
4. System predicts disease risks using LLM
5. Caregivers access recommendations and care plans

---

## 🧠 AI Model Details

* **Model:** Ollama Biomistral 7B
* **Type:** Fine-tuned Large Language Model
* **Input:** Patient reports, symptoms, medical history
* **Output:** Disease risk prediction with explanation

**Techniques Used:**

* Prompt engineering
* Structured response formatting
* Domain-specific tuning for healthcare

---

## 📊 Sample Output

```json
{
  "risk": "High",
  "disease": "Type 2 Diabetes",
  "confidence": "82%",
  "recommendation": "Consult a doctor, reduce sugar intake, monitor glucose levels"
}
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/saanvi-bajjuri/Saanjh-Sahayak.git
cd Saanjh-Sahayak
```

### 2. Setup Frontend

```bash
cd client
npm install
npm start
```

### 3. Setup Backend

```bash
cd server
npm install
node server.js
```

### 4. Setup ML Service (Flask)

```bash
cd ml-service
pip install -r requirements.txt
python app.py
```

---

## 🔐 Security Features

* Role-based access (Admin / Doctor / Caregiver)
* Input validation before processing
* Secure API communication between services

---

## 🧪 Challenges Faced

* Integrating MERN stack with Flask microservice
* Handling LLM response latency
* Structuring unstructured medical data
* Ensuring consistent and reliable predictions
* Designing multi-role user workflows

---

## 📈 Impact

* Simplifies healthcare record management
* Enables faster and smarter clinical decisions
* Improves caregiver efficiency
* Centralizes elderly patient data
* Supports early disease risk detection

---

## 🔮 Future Enhancements

* Real-time health monitoring (IoT integration)
* JWT-based authentication & authorization
* Advanced analytics dashboard
* Multi-language chatbot support
* Integration with wearable health devices

---

## 🎥 Demo

👉 [Watch Demo Video](https://www.youtube.com/watch?v=dPFyAjMPBhw)

---

## 🧠 What Makes It Unique

* Combines **MERN + Flask + LLM architecture**
* Real-world healthcare application
* AI-powered clinical decision support
* Fine-tuned LLM instead of basic API usage
* Multi-role system with practical workflow

---

## 👩‍💻 Author

**Saanvi Bajjuri**
