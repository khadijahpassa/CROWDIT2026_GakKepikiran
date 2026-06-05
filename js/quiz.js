const position =
    localStorage.getItem("position");

const level =
    localStorage.getItem("level");

document.getElementById("selectedPosition").innerHTML =
    `💼 ${position}`;

document.getElementById("selectedLevel").innerHTML =
    `📈 ${level}`;

const frontendQuestions = [
  "Tell me about a challenging project you worked on.",
  "How do you handle tight deadlines?",
  "Describe a conflict within a team and how you resolved it.",
  "How do you prioritize tasks?",
  "Where do you see yourself in 5 years?"
];

const backendQuestions = [
    "Apa itu REST API?",
    "Apa itu JWT?",
    "Apa itu Middleware?",
    "Apa perbedaan SQL dan NoSQL?",
    "Apa fungsi HTTP Status Code?"
];

const uiuxQuestions = [
    "Apa itu Design Thinking?",
    "Apa perbedaan UI dan UX?",
    "Bagaimana melakukan User Research?",
    "Apa itu Wireframe?",
    "Apa itu Design System?"
];

let questions = frontendQuestions;

if (position === "Backend Developer") {
    questions = backendQuestions;
}

if (position === "UI/UX Designer") {
    questions = uiuxQuestions;
}

let currentQuestion = 0;

const questionEl =
    document.getElementById("question");

const transcriptEl =
    document.getElementById("transcript");

const statusEl =
    document.getElementById("status");

questionEl.innerText =
    questions[currentQuestion];

let recognition;

if ("webkitSpeechRecognition" in window) {

    recognition =
        new webkitSpeechRecognition();

    recognition.lang = "id-ID";

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.onresult = (event) => {

        let text = "";

        for (
            let i = 0;
            i < event.results.length;
            i++
        ) {
            text +=
                event.results[i][0].transcript +
                " ";
        }

        transcriptEl.innerText = text;
    };

    recognition.onstart = () => {
        statusEl.innerText =
            "🎤 Listening...";
    };

    recognition.onend = () => {
        statusEl.innerText =
            "⏹ Recording stopped";
    };
}

let mediaRecorder;
let audioChunks = [];

async function startInterview() {

    if (recognition)
        recognition.start();

    const stream =
        await navigator.mediaDevices
            .getUserMedia({
                audio: true
            });

    audioChunks = [];

    mediaRecorder =
        new MediaRecorder(stream);

    mediaRecorder.ondataavailable =
        e => audioChunks.push(e.data);

    mediaRecorder.onstop = () => {

        const blob =
            new Blob(audioChunks, {
                type: "audio/webm"
            });

        document
            .getElementById("player")
            .src =
            URL.createObjectURL(blob);
    };

    mediaRecorder.start();
}

function stopInterview() {

    if (recognition)
        recognition.stop();

    if (mediaRecorder)
        mediaRecorder.stop();
}

function nextQuestion() {

    currentQuestion++;

   if (
    currentQuestion >=
    questions.length
) {

    localStorage.setItem(
        "interviewScore",
        85
    );

    window.location.href =
        "result.html";

    return;
}
    questionEl.innerText =
        questions[currentQuestion];

    transcriptEl.innerText =
        "Start speaking and your answer will appear here...";

    document
        .getElementById("player")
        .src = "";
}