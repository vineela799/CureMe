const chatWindow = document.getElementById('chat-window');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('send-button');
        
        const healthData = {
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
"Allergic rhinitis": "Antihistamines (Loratadine, Cetirizine), Nasal corticosteroids",
    "Anxiety": "SSRIs (Sertraline, Escitalopram), Benzodiazepines (short-term use)",
    "Asthma": "Inhaled corticosteroids, Beta-agonists (Albuterol)",
    "Back pain": "Physical therapy, NSAIDs, Muscle relaxants",
    "Bacterial vaginosis": "Antibiotics (Metronidazole, Clindamycin)",
    "Bipolar disorder": "Mood stabilizers (Lithium, Valproate), Atypical antipsychotics",
    "Bronchitis": "Rest, Fluids, Cough suppressants (Dextromethorphan)",
    "Chickenpox": "Antihistamines for itching, Acyclovir in severe cases",
    "Chronic obstructive pulmonary disease (COPD)": "Bronchodilators, Corticosteroids, Oxygen therapy",
    "Constipation": "Laxatives (Polyethylene glycol, Bisacodyl), Fiber supplements",
    "Depression": "SSRIs (Fluoxetine, Citalopram), Cognitive behavioral therapy (CBT)",
    "Diabetes Type 1": "Insulin therapy",
    "Diabetes Type 2": "Metformin, Sulfonylureas, Lifestyle modifications",
    "Diarrhea": "Oral rehydration, Antidiarrheals (Loperamide)",
    "Eczema": "Topical corticosteroids, Moisturizers",
    "Epilepsy": "Antiepileptic drugs (Valproate, Carbamazepine)",
    "GERD": "PPIs (Omeprazole, Esomeprazole), Lifestyle changes",
    "Glaucoma": "Eye drops (Latanoprost, Timolol), Surgery in advanced cases",
    "Gonorrhea": "Antibiotics (Ceftriaxone, Azithromycin)",
    "Hay fever": "Antihistamines, Allergen avoidance",
    "Hemorrhoids": "Topical treatments, Warm sitz baths, Dietary fiber",
    "Hepatitis B": "Antiviral medications (Tenofovir, Entecavir)",
    "Hepatitis C": "Direct-acting antivirals (Sofosbuvir, Ledipasvir)",
    "Kidney stones": "Pain relievers, Alpha blockers, Increased fluid intake",
    "Lupus": "NSAIDs, Corticosteroids, Immunosuppressants (Hydroxychloroquine)",
    "Lyme disease": "Antibiotics (Doxycycline, Amoxicillin)",
    "Menstrual cramps": "NSAIDs (Ibuprofen, Naproxen), Heat therapy",
    "Motion sickness": "Antihistamines (Meclizine, Dimenhydrinate), Scopolamine patches",
    "Oral thrush": "Antifungal medications (Nystatin, Fluconazole)",
    "Peptic ulcer": "PPIs, Antibiotics if H. pylori positive",
        "Fever": "Paracetamol (Acetaminophen), Ibuprofen, Rest and hydration",
        "Cold": "Rest, Hydration, Decongestants, Vitamin C",
        "Cough": "Cough syrups (Dextromethorphan), Warm fluids, Steam inhalation",
        "Sore muscles": "Rest, Ice packs, NSAIDs (Ibuprofen)",
        "Body aches": "Paracetamol, Warm baths, Gentle stretching",
        "Chills": "Warm clothing, Hydration, Treat underlying fever",
        "Runny nose": "Antihistamines (Loratadine, Cetirizine), Nasal sprays",
        "Nasal congestion": "Decongestant sprays (Oxymetazoline), Steam inhalation",
        "Sneezing": "Antihistamines, Avoid allergens",
        "Itchy throat": "Warm salt water gargle, Lozenges, Honey with lemon",
        "Mild allergies": "Antihistamines, Avoid triggers, Nasal sprays",
        "Toothache": "Pain relievers, Saltwater rinse, Visit dentist",
        "Mouth ulcers": "Topical gels, B-complex vitamins, Avoid spicy foods",
        "Stomach ache": "Antacids, Antispasmodics, Bland diet",
        "Gas and bloating": "Simethicone, Fennel tea, Avoid carbonated drinks",
        "Indigestion": "Antacids, Avoid overeating, Eat slowly",
        "Hiccups": "Hold breath, Sip cold water, Sugar under the tongue",
        "Low-grade fever": "Fluids, Light clothing, Paracetamol if needed",
        "Fatigue": "Proper rest, Balanced diet, Hydration",
        "Mild dehydration": "Oral rehydration salts (ORS), Coconut water",
        "Mild sunburn": "Cool compress, Aloe vera gel, Hydration",
        "Heat exhaustion": "Cool environment, Electrolyte drinks, Rest",
        "Itchy skin": "Antihistamines, Calamine lotion, Avoid hot showers",
        "Dizziness": "Lie down, Hydrate, Avoid sudden movements",
        "Nosebleeds": "Pinch nose, Lean forward, Ice on bridge of nose",
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
            "get medicines":"you can get it",
            'okay':"tell me your symptom",
            "yeah":"Provide me your symptom",
            'bye':"good bye",
      
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
        
