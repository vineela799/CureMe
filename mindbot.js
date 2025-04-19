        const chatWindow = document.getElementById('chat-window');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('send-button');
        
        const healthData = {
            "hi":"hi ,how is it going?",
    "hello":"hello! how can i assist you today?",
    "hey":"hey! what can i do for you?",
    "headache": "For headaches, try resting and drinking water. If it persists, consult a doctor.",
    "fever": "A fever can indicate an infection. Rest and stay hydrated. If it's high or persistent, see a doctor.",
    "appointment": "To book an appointment, please enter your name and desired date.",
    "common cold": "Common cold symptoms include a runny nose, sore throat, cough, and congestion. Rest and drink plenty of fluids.",
    "thyroid disorder": "Fatigue, weight changes, mood swings, and hair loss. Consult a doctor for diagnosis and treatment.",
    "earache": "Apply a warm compress, take over-the-counter pain relievers, and see a doctor if symptoms persist.",
    "headache": "For headaches, try resting and drinking water. If it persists, consult a doctor.",
        "fever": "A fever can indicate an infection. Rest and stay hydrated. If it's high or persistent, see a doctor.",
        "appointment": "To book an appointment, please enter your name and desired date.",
        "what are the symptoms of a common cold?": "Common cold symptoms include a runny nose, sore throat, cough, and congestion. Rest and drink plenty of fluids.",
        "how do i book an appointment?": "To book an appointment, please provide your name and the desired date.",
        "my head's killing me. what can i do?": "For headaches, try resting in a quiet, dark room, drinking plenty of water, and applying a cold compress. Over-the-counter pain relievers can also help. If the headache is severe or persistent, consult a doctor.",
        "my throat's super sore. any tips?": "Gargle with warm salt water, drink warm liquids like tea with honey, and use throat lozenges. Rest your voice. If it persists, see a doctor.",
        "how do you know if you've got the flu?": "Flu symptoms often include fever, chills, body aches, fatigue, cough, sore throat, and sometimes nausea or vomiting. Rest, stay hydrated, and consult a doctor.",
        "i'm burning up. what should i do for a fever?": "Rest, drink plenty of fluids, and take over-the-counter fever reducers if needed. If the fever is high or persistent, consult a doctor.",
        "what do allergies feel like?": "Allergy symptoms can include sneezing, runny nose, itchy eyes, skin rashes, and hives. Avoid known allergens, and consult a doctor for allergy testing and treatment.",
        "my stomach's really bothering me. any ideas?": "Try resting, drinking clear fluids, and avoiding solid foods for a while. A warm compress can also help. If the pain is severe or persistent, consult a doctor.",
        "i cut/burned myself a little. what do i do?": "For minor cuts, clean the wound with soap and water, apply an antiseptic, and cover it with a bandage. For minor burns, cool the affected area with cool running water for several minutes. If the cut or burn is severe, seek medical attention.",
        "how do you know if you're dehydrated?": "Symptoms of dehydration include thirst, dry mouth, dark urine, fatigue, dizziness, and headache. Drink plenty of fluids to rehydrate.",
        "what are some easy ways to eat healthy?": "Eat a balanced diet with plenty of fruits, vegetables, whole grains, and lean protein. Limit processed foods, sugary drinks, and unhealthy fats.",
        "how much water should i be drinking?": "A general guideline is to drink eight glasses of water per day, but individual needs may vary. Drink more water if you are active or in hot weather.",
        "why is working out good for you?": "Exercise has many benefits, including improving cardiovascular health, strengthening muscles and bones, and reducing stress.",
        "how can i sleep better?": "Establish a regular sleep schedule, create a relaxing bedtime routine, and make sure your bedroom is dark, quiet, and cool. Avoid caffeine and alcohol before bed.",
        "what are some simple ways to chill out?": "Relaxation techniques like deep breathing, meditation, and yoga can help reduce stress.",
        "any tips for feeling less stressed/anxious?": "Regular exercise, healthy eating, and sufficient sleep can help manage stress and anxiety. If you are experiencing severe anxiety, please seek professional help.",
        "what's a healthy weight?": "A healthy weight depends on various factors, including height, age, and body composition. Consult a doctor or use a BMI calculator for more information.",
        "what does anxiety feel like?": "Anxiety can feel like worry, nervousness, restlessness, and difficulty concentrating. Physical symptoms can include rapid heartbeat, sweating, and trembling.",
        "what does depression feel like?": "Depression can feel like sadness, hopelessness, loss of interest in activities, fatigue, and changes in appetite or sleep. If you are experiencing symptoms of depression, please seek professional help.",
        "what's it like to have [condition]?": "Please consult a medical professional for information regarding specific medical conditions.",
        "how do you deal with [condition]?": "Please consult a medical professional for information regarding specific medical conditions.",
            "what causes heartburn?": "Heartburn is often caused by stomach acid flowing back into the esophagus. Avoid spicy foods, fatty meals, and lying down after eating.",
            "how to relieve muscle cramps?": "Stretch the affected muscle, apply heat or cold, and stay hydrated.",
            "what are signs of a concussion?": "Signs include headache, dizziness, confusion, nausea, and memory problems. Seek medical attention if you suspect a concussion.",
            "how to treat a minor sunburn?": "Apply cool compresses, aloe vera gel, and drink plenty of water. Avoid further sun exposure.",
            "what are symptoms of pink eye?": "Redness, itching, discharge, and crusting of the eyelids. Consult a doctor for treatment.",
            "how to stop a nosebleed?": "Sit upright, lean forward, and pinch your nostrils for 10-15 minutes. Apply a cold compress.",
            "what are the benefits of vitamin D?": "Vitamin D supports bone health, immune function, and mood regulation. Get sun exposure or take supplements.",
            "how to prevent cavities?": "Brush and floss regularly, limit sugary foods and drinks, and see your dentist for checkups.",
            "what are the symptoms of carpal tunnel syndrome?": "Numbness, tingling, and pain in the hand and wrist. Rest your wrist and consider using a brace.",
            "how to manage stress headaches?": "Practice relaxation techniques, get regular exercise, and ensure adequate sleep.",
            "what are the symptoms of a sinus infection?": "Facial pain, congestion, headache, and thick nasal discharge. Consult a doctor for treatment.",
            "how to treat athlete's foot?": "Apply antifungal cream, keep your feet clean and dry, and wear breathable shoes.",
            "what are the benefits of omega-3 fatty acids?": "Omega-3s support heart health, brain function, and reduce inflammation. Include fish or supplements in your diet.",
            "how to improve posture?": "Sit and stand tall, exercise regularly, and use ergonomic furniture.",
            "what are the symptoms of a panic attack?": "Rapid heartbeat, shortness of breath, dizziness, and fear. Practice deep breathing and relaxation techniques.",
            "how to treat a bee sting?": "Remove the stinger, clean the area, and apply a cold compress. Take antihistamines if needed.",
            "what are the symptoms of a urinary tract infection (UTI)?": "Painful urination, frequent urge to urinate, and lower abdominal pain. Consult a doctor for antibiotics.",
            "how to prevent motion sickness?": "Sit in the front of the vehicle, focus on the horizon, and take motion sickness medication if needed.",
            "what are the benefits of probiotics?": "Probiotics support gut health and immune function. Include yogurt or fermented foods in your diet.",
            "how to manage eczema?": "Moisturize regularly, avoid irritants, and use topical corticosteroids if prescribed.",
            "what are the symptoms of appendicitis?": "Abdominal pain, nausea, vomiting, and fever. Seek immediate medical attention.",
            "how to treat a sprained ankle?": "Rest, ice, compression, and elevation (RICE). Consult a doctor for severe sprains.",
            "what are the benefits of antioxidants?": "Antioxidants protect cells from damage. Eat fruits, vegetables, and nuts.",
            "how to prevent plantar fasciitis?": "Stretch your feet, wear supportive shoes, and avoid high-impact activities.",
            "what are the symptoms of a migraine?": "Severe headache, nausea, vomiting, and sensitivity to light and sound. Rest in a dark, quiet room.",
            "how to treat a minor toothache?": "Rinse with warm salt water, apply a cold compress, and take over-the-counter pain relievers. See a dentist.",
            "what are the benefits of fiber?": "Fiber supports digestive health, regulates blood sugar, and lowers cholesterol. Eat whole grains, fruits, and vegetables.",
            "how to prevent kidney stones?": "Drink plenty of water, limit salt and animal protein, and maintain a healthy weight.",
            "what are the symptoms of sleep apnea?": "Loud snoring, daytime fatigue, and morning headaches. Consult a doctor for diagnosis and treatment.",
            "how to treat a minor burn blister?": "Do not pop the blister. Cover it with a sterile bandage and apply antibiotic ointment.",
            "what are the benefits of calcium?": "Calcium supports bone health, muscle function, and nerve transmission. Include dairy products or supplements in your diet.",
            "how to prevent heatstroke?": "Stay hydrated, avoid strenuous activity in hot weather, and wear loose-fitting clothing.",
            "what are the symptoms of a stroke?": "Sudden weakness, numbness, difficulty speaking, and vision problems. Seek immediate medical attention.",
            "how to treat a minor insect bite?": "Clean the area, apply a cold compress, and use antihistamine cream.",
            "what are the benefits of iron?": "Iron supports red blood cell production and oxygen transport. Eat red meat, leafy greens, and beans.",
            "how to prevent osteoporosis?": "Get regular exercise, consume calcium and vitamin D, and avoid smoking and excessive alcohol.",
            "what are the symptoms of a heart attack?": "Chest pain, shortness of breath, nausea, and sweating. Seek immediate medical attention.",
            "how to treat a minor allergic reaction?": "Take antihistamines, avoid the allergen, and seek medical attention if symptoms worsen.",
            "Hi": "Hi there!",
        "Hello": "Hello! How can I help you today?",
        "Hey":"Hey! What can I do for you?",
        "Good morning": "Good morning to you too!",
        "Good afternoon": "Good afternoon! What can I do for you?",
        "Good evening": "Good evening! How can I assist you?",
        "How are you?": "I'm doing well, thank you! How can I assist you today?",
        "How's it going?": "I'm ready to help! What can I do for you?",
        "Is anyone there?": "I'm a chatbot here to assist you",
        "Are you a real person?": "I'm not a human, but I can try my best to answer your questions",
        "Thanks":"You're welcome!",
        "Thank you":"No problem!",
            "what are the benefits of potassium?": "Potassium supports heart health, muscle function, and blood pressure regulation. Eat bananas, potatoes, and spinach.",
            "how to prevent back pain?": "Maintain good posture, lift heavy objects properly, and exercise regularly.",
            "what are the symptoms of a diabetic emergency?": "Confusion, sweating, rapid heartbeat, and seizures. Seek immediate medical attention.",
            "how to treat a minor eye irritation?": "Rinse with cool water, avoid rubbing your eyes, and use artificial tears.",
            "what are the benefits of vitamin C?": "Vitamin C supports immune function, wound healing, and collagen production. Eat citrus fruits, berries, and peppers.",
            "how to prevent high blood pressure?": "Maintain a healthy weight, exercise regularly, limit salt intake, and avoid smoking.",
            "what are the symptoms of a pulmonary embolism?": "Shortness of breath, chest pain, and coughing up blood. Seek immediate medical attention.",
            "how to treat a minor skin rash?": "Apply hydrocortisone cream, avoid irritants, and keep the area clean and dry.",
            "what are the benefits of magnesium?": "Magnesium supports muscle and nerve function, blood sugar control, and blood pressure regulation. Eat nuts, seeds, and leafy greens.",
            "how to prevent arthritis?": "Maintain a healthy weight, exercise regularly, and avoid joint injuries.",
            "what are the symptoms of a thyroid disorder?": "Fatigue, weight changes, mood swings, and hair loss. Consult a doctor for diagnosis and treatment.",
            "how to treat a minor earache?": "Apply a warm compress, take over-the-counter pain relievers, and see a doctor if symptoms persist.",
        "headache": "For headaches, try resting and drinking water. If it persists, consult a doctor.",
        "fever": "A fever can indicate an infection. Rest and stay hydrated. If it's high or persistent, see a doctor.",
        "appointment": "To book an appointment, please enter your name and desired date.",
        "common cold": "Common cold symptoms include a runny nose, sore throat, cough, and congestion. Rest and drink plenty of fluids.",
        "thyroid disorder": "Fatigue, weight changes, mood swings, and hair loss. Consult a doctor for diagnosis and treatment.",
        "earache": "Apply a warm compress, take over-the-counter pain relievers, and see a doctor if symptoms persist.",
        "Hi":"Hello there!",
        "cough":"drink hot water,take medical suppliments if necessary",
        "Hey":"Hey! What can I do for you?",
        "Good morning": "Good morning to you too!",
        "Good afternoon": "Good afternoon! What can I do for you?",
        "Good evening": "Good evening! How can I assist you?",
        "How are you?": "I'm doing well, thank you! How can I assist you today?",
        "How's it going?": "I'm ready to help! What can I do for you?",
        "Is anyone there?": "I'm a chatbot here to assist you",
        "Are you a real person?": "I'm not a human, but I can try my best to answer your questions",
        "Thanks":"You're welcome!",
        "Thank you":"No problem!",
            "headache": "For headaches, try resting and drinking water. If it persists, consult a doctor.",
            "fever": "A fever can indicate an infection. Rest and stay hydrated. If it's high or persistent, see a doctor.",
            "appointment": "To book an appointment, please enter your name and desired date.",
         "hi":"hi ,how is it going?",
    "hello":"hello! how can i assist you today?",
    "hey":"hey! what can i do for you?",
    "Gout" : "NSAIDs, Colchicine, Allopurinol",
"Headache" : "Over-the-counter pain relievers (Ibuprofen, Acetaminophen)",
"Heartburn" : "Antacids, H2 blockers, Proton pump inhibitors (PPIs)",
"High blood pressure" : "Diuretics, Beta-blockers, ACE inhibitors",
"High cholesterol" : "Statins (Atorvastatin, Simvastatin)",
"HIV/AIDS" : "Antiretroviral therapy (ART)",
"Hyperthyroidism" : "Antithyroid medications (Methimazole, Propylthiouracil)",
"Hypothyroidism" : "Levothyroxine",
"Influenza" : "Antiviral drugs (Oseltamivir, Zanamivir)",
"Insomnia" : "Sleep medications (Zolpidem, Eszopiclone)",
"Irritable bowel syndrome (IBS)" : "Antidiarrheals, Antispasmodics",
"Malaria" : "Antimalarial drugs (Chloroquine, Artemisinin)",
"Measles" : "No specific treatment, Supportive care",
"Migraine" : "Triptans (Sumatriptan, Rizatriptan), NSAIDs",
"Multiple sclerosis (MS)" : "Disease-modifying therapies (Interferon beta, Glatiramer acetate)",
"Nausea and vomiting" : "Antiemetics (Ondansetron, Promethazine)",
"Osteoporosis" : "Bisphosphonates (Alendronate, Risedronate)",
"Parkinson's disease" : "Levodopa, Carbidopa",
"Pneumonia" : "Antibiotics",
"Psoriasis" : "Topical corticosteroids, Vitamin D analogues",
"Rheumatoid arthritis" : "NSAIDs, DMARDs (Methotrexate, Sulfasalazine)",
"Rosacea" : "Topical antibiotics, Metronidazole",
"Shingles" : "Antiviral medication (Acyclovir, Valacyclovir)",
"Sinusitis" : "Decongestants, Saline nasal spray, Antibiotics",
"Sore throat" : "Lozenges, Gargles, Over-the-counter pain relievers",
"Strep throat" : "Antibiotics (Penicillin)",
"hi":"hi ,how is it going?",
"hello":"hello! how can i assist you today?",
"hey":"hey! what can i do for you?",
"Gout" : "NSAIDs, Colchicine, Allopurinol",
"Headache" : "Over-the-counter pain relievers (Ibuprofen, Acetaminophen)",
"Heartburn" : "Antacids, H2 blockers, Proton pump inhibitors (PPIs)",
"High blood pressure" : "Diuretics, Beta-blockers, ACE inhibitors",
"High cholesterol" : "Statins (Atorvastatin, Simvastatin)",
"HIV/AIDS" : "Antiretroviral therapy (ART)",
"Hyperthyroidism" : "Antithyroid medications (Methimazole, Propylthiouracil)",
"Hypothyroidism" : "Levothyroxine",
"Influenza" : "Antiviral drugs (Oseltamivir, Zanamivir)",
"Insomnia" : "Sleep medications (Zolpidem, Eszopiclone)",
"Irritable bowel syndrome (IBS)" : "Antidiarrheals, Antispasmodics",
"Malaria" : "Antimalarial drugs (Chloroquine, Artemisinin)",
"Measles" : "No specific treatment, Supportive care",
"Migraine" : "Triptans (Sumatriptan, Rizatriptan), NSAIDs",
"Multiple sclerosis (MS)" : "Disease-modifying therapies (Interferon beta, Glatiramer acetate)",
"Nausea and vomiting" : "Antiemetics (Ondansetron, Promethazine)",
"Osteoporosis" : "Bisphosphonates (Alendronate, Risedronate)",
"Parkinson's disease" : "Levodopa, Carbidopa",
"Pneumonia" : "Antibiotics",
"Psoriasis" : "Topical corticosteroids, Vitamin D analogues",
"Rheumatoid arthritis" : "NSAIDs, DMARDs (Methotrexate, Sulfasalazine)",
"Rosacea" : "Topical antibiotics, Metronidazole",
"Shingles" : "Antiviral medication (Acyclovir, Valacyclovir)",
"Sinusitis" : "Decongestants, Saline nasal spray, Antibiotics",
"Sore throat" : "Lozenges, Gargles, Over-the-counter pain relievers",
"Strep throat" : "Antibiotics (Penicillin)",
        };
        
        // Text-to-speech function
        function speak(text) {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
            } else {
                console.error("Speech synthesis is not supported in this browser.");
            }
        }
        
        // Function to find the closest matching question
        function getClosestMatch(userMessage) {
            userMessage = userMessage.toLowerCase();
            let bestMatch = null;
            let highestMatchScore = 0;
        
            for (let key in healthData) {
                let lowerKey = key.toLowerCase();
                let wordsInKey = lowerKey.split(" ");
                let wordsInMessage = userMessage.split(" ");
                let matchCount = wordsInMessage.filter(word => wordsInKey.includes(word)).length;
        
                let matchScore = matchCount / wordsInKey.length;
        
                if (matchScore > highestMatchScore) {
                    highestMatchScore = matchScore;
                    bestMatch = key;
                }
            }
        
            return highestMatchScore > 0 ? bestMatch : null;
        }
        
        // Function to display chat messages
        function displayMessage(message, sender) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${sender}: ${message}`;
            chatWindow.appendChild(messageElement);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        
            // Speak the bot's response
            if (sender === "Bot") {
                speak(message);
            }
        }
        
        // Process user input
        function processInput() {
            const message = userInput.value.trim();
            if (!message) return;
        
            displayMessage(message, "You");
            userInput.value = "";
        
            let bestMatch = getClosestMatch(message);
        
            if (bestMatch) {
                displayMessage(healthData[bestMatch], "Bot");
            } else if (message.toLowerCase().includes("appointment")) {
                displayMessage(healthData["appointment"], "Bot");
            } else {
                displayMessage("Can you be a little more specific?.", "Bot");
            }
        }
        
        // Event listeners
        sendButton.addEventListener('click', processInput);
        userInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                processInput();
            }
        });
        document.addEventListener("DOMContentLoaded", function() {
            const menuItems = document.querySelectorAll("ul li");
        
            menuItems.forEach(item => {
                item.addEventListener("click", function() {
                    document.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                });
            });
        });
        