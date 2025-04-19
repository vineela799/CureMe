const startButton = document.getElementById('startButton');
const chatLog = document.getElementById('chatLog');
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
const synth = window.speechSynthesis;

startButton.addEventListener('click', () => {
    recognition.start();
    appendMessage("Listening...", "System");
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    appendMessage(`You: ${transcript}`, "User");
    processMessage(transcript);
};

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

function processMessage(message) {
    let response = "";
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("details")) {
        response = "What is your name?";
    }
    else if (lowerMessage.includes("name")) {
        response = "okay,What is your age";
    }
    else if (lowerMessage.includes("age")) {
            response = `Thanks! Could you please tell me your gender? (Male/Female/Other)`;
    }
    else if (lowerMessage.includes("male") || lowerMessage.includes("female") || lowerMessage.includes("other")) {
        let genderMatch = message.match(/i am (male|female|other)/i);

            response = `Got it. May I have your address now?`;
    }
    else if (lowerMessage.includes("address") || lowerMessage.includes("i live at")) {
            response = "Thank you! Please share your 10-digit phone number.";
    }
    else if (lowerMessage.includes("phone number")) {
        response = "Great,I have all details of you now,which day it works to get an appointment?";
    }
    else if (lowerMessage.includes("appointment")) {
        response = "Certainly, I can help you schedule an appointment. may I have your full details?";
    } else if (lowerMessage.includes("monday")) {
        response = "Great, what time on Monday would you prefer?";
    } else if (lowerMessage.includes("10 am")) {
        response = "Perfect, Monday at 10 AM. I have scheduled your appointment. Is there anything else?";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        response = "Hello! How can I assist you today?";
    } else if (lowerMessage.includes("dr. smith")) {
        response = "Dr. Smith specializes in cardiology.";
    } else if (lowerMessage.includes("medication")) {
        response = "I can provide information about medication, but please consult your doctor for medical advice.";
    } else if (lowerMessage.includes("tuesday") && lowerMessage.includes("afternoon")) {
        response = "Tuesday afternoon, would 2 PM or 4 PM work?";
    } else if (lowerMessage.includes("2 pm")) {
        response = "Appointment scheduled for Tuesday at 2 PM.";
    }
    else if (lowerMessage.includes("appointment")) {
        response = "Sure! I'd be happy to help you schedule an appointment. Which day works best for you?";
    } else if (lowerMessage.includes("monday")) {
        response = "Monday sounds good. What time suits you best?";
    } else if (lowerMessage.includes("tuesday")) {
        response = "Tuesday is available. Would you prefer morning or afternoon?";
    } else if (lowerMessage.includes("wednesday")) {
        response = "Wednesday appointments are open. Morning or evening?";
    } else if (lowerMessage.includes("thursday")) {
        response = "Alright, Thursday it is. What time shall I book for you?";
    } else if (lowerMessage.includes("friday")) {
        response = "Friday is almost booked. Please specify a time.";
    } else if (lowerMessage.includes("saturday")) {
        response = "Saturday works! Morning or evening?";
    } else if (lowerMessage.includes("sunday")) {
        response = "Sunday is a rest day, but I can still take your appointment for next week.";
    } else if (lowerMessage.includes("morning")) {
        response = "Morning slots are 9 AM, 10 AM, and 11 AM. Which one would you prefer?";
    } else if (lowerMessage.includes("afternoon")) {
        response = "Afternoon slots are 2 PM, 3 PM, and 4 PM. Which do you prefer?";
    } else if (lowerMessage.includes("evening")) {
        response = "Evening options are 5 PM and 6 PM. Let me know your choice.";
    } else if (lowerMessage.includes("10:00 a.m")) {
        response = "Got it! I've booked your appointment for 10 AM. Anything else?";
    } else if (lowerMessage.includes("3:00 p.m")) {
        response = "Appointment confirmed for 3 PM!";
    } else if (lowerMessage.includes("cancel appointment")) {
        response = "Alright, I've canceled your appointment. Would you like to reschedule?";
    } else if (lowerMessage.includes("reschedule")) {
        response = "No problem! Tell me the new day and time.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        response = "Hey there! How can I assist you today?";
    } else if (lowerMessage.includes("thank you")) {
        response = "You're welcome! Let me know if you need anything else.";
    } else if (lowerMessage.includes("dr. smith")) {
        response = "Dr. Smith specializes in cardiology and is available on Mondays and Thursdays.";
    } else if (lowerMessage.includes("dr. meera")) {
        response = "Dr. Meera is our dermatologist, available every Wednesday.";
    } else if (lowerMessage.includes("dr. arjun")) {
        response = "Dr. Arjun is a neurologist and takes appointments on Tuesdays and Fridays.";
    } else if (lowerMessage.includes("medication")) {
        response = "Sure, I can help. Please tell me the name of the medication you’re asking about.";
    } else if (lowerMessage.includes("paracetamol")) {
        response = "Paracetamol is commonly used for fever and mild pain. Do not exceed the dosage.";
    } else if (lowerMessage.includes("ibuprofen")) {
        response = "Ibuprofen helps reduce inflammation and pain. Take with food to avoid stomach issues.";
    } else if (lowerMessage.includes("side effects")) {
        response = "Could you specify which medication you want side effects for?";
    } else if (lowerMessage.includes("book doctor")) {
        response = "Which specialist are you looking to book with?";
    } else if (lowerMessage.includes("dermatologist")) {
        response = "We have Dr. Meera, our dermatologist. She’s available Wednesday mornings.";
    } else if (lowerMessage.includes("cardiologist")) {
        response = "Dr. Smith, our cardiologist, is available on Monday and Thursday.";
    } else if (lowerMessage.includes("general checkup")) {
        response = "General checkups can be scheduled any day from 9 AM to 6 PM.";
    } else if (lowerMessage.includes("fever")) {
        response = "For fever, we recommend a consultation with our general physician. Shall I book one?";
    } else if (lowerMessage.includes("cold")) {
        response = "Mild cold? You can take steam inhalation and rest. Would you like to consult a doctor?";
    } else if (lowerMessage.includes("stomach pain")) {
        response = "Please avoid spicy food and stay hydrated. Should I connect you to a gastro specialist?";
    } else if (lowerMessage.includes("mental health")) {
        response = "I’m here to listen. Would you like to talk to Mind-Bot or a therapist?";
    } else if (lowerMessage.includes("therapist")) {
        response = "Sure. We have Dr. Neha, a certified psychologist. She’s available evenings.";
    } else if (lowerMessage.includes("emergency")) {
        response = "For emergencies, please call your nearest hospital or 108 immediately.";
    } else if (lowerMessage.includes("location")) {
        response = "We're located at NRI Institute Campus. Do you need directions?";
    } else if (lowerMessage.includes("time")) {
        response = "We're open from 9 AM to 6 PM, Monday through Saturday.";
    } else if (lowerMessage.includes("mind-bot")) {
        response = "Mind-Bot is always ready to chat and support your mental health.";
    } else if (lowerMessage.includes("prescription")) {
        response = "Please upload your prescription, and I’ll help manage your meds.";
    } else if (lowerMessage.includes("upload")) {
        response = "Use the upload button below to send your documents.";
    } else if (lowerMessage.includes("yes")) {
        response = "Awesome! Let’s proceed. Please share the required info.";
    } else if (lowerMessage.includes("no")) {
        response = "Alright, feel free to reach out if you change your mind.";
    } else if (lowerMessage.includes("feeling anxious")) {
        response = "I'm here for you. Take a deep breath. Would you like me to guide you through a relaxation exercise?";
    } else if (lowerMessage.includes("diet plan")) {
        response = "Would you like a general diet or a specific one based on your condition?";
    } else if (lowerMessage.includes("weight loss")) {
        response = "For weight loss, I can recommend a diet and a fitness plan. Shall we begin?";
    } else if (lowerMessage.includes("bmi")) {
        response = "Sure, please provide your height and weight so I can calculate your BMI.";
    } else if (lowerMessage.includes("bye")) {
        response = "Take care! Wishing you good health always.";
    }
    else if (lowerMessage.includes("9:00 a.m")) {
        response = "Noted! I've scheduled your appointment for 9:00 AM. Is there anything else I can help with?";
    } else if (lowerMessage.includes("10:00 a.m")) {
        response = "Got it! I've booked your appointment for 10:00 AM. Anything else?";
    } else if (lowerMessage.includes("11:00 a.m")) {
        response = "Your appointment for 11:00 AM is successfully scheduled!";
    } else if (lowerMessage.includes("2:00 p.m")) {
        response = "You're all set! Appointment scheduled for 2:00 PM.";
    } else if (lowerMessage.includes("3:00 p.m")) {
        response = "Appointment confirmed for 3:00 PM!";
    } else if (lowerMessage.includes("4:00 p.m")) {
        response = "4:00 PM slot has been booked for you!";
    } else if (lowerMessage.includes("5:00 p.m")) {
        response = "Done! Your appointment is at 5:00 PM.";
    } else if (lowerMessage.includes("6:00 p.m")) {
        response = "Appointment successfully scheduled for 6:00 PM.";
    }
    else if (lowerMessage.includes("directions") || lowerMessage.includes("how to reach") || lowerMessage.includes("way to hospital")) {
        response = "From the main road, take a right near the pharmacy, then walk straight for 200 meters. Our clinic is on the left beside the green grocery store.";
    }
     else {
        response = "I'm here to help with appointments, doctors, and health info. Please rephrase if I missed your query!";
    }
    

    appendMessage(`Assistant: ${response}`, "Assistant");
    speak(response);
}