// Mulai Sekarang

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('mouseenter', () => {
    startBtn.classList.remove('active');
    setTimeout(() => {
        startBtn.classList.add('hovered');
    }, 300);
});

startBtn.addEventListener('mouseleave', () => {
    startBtn.classList.remove('hovered');
});

startBtn.addEventListener('click', () => {
    startBtn.classList.add('active');
    startBtn.disabled = true;

    setTimeout(() => {
        $("#intro").addClass("d-none");
        $("#quiz").removeClass("d-none");
        loadQuestion();
    }, 500);
});


// Quiz Logic

let currentQuestion = 0;
let totalScore = 0;

const quizData = [
    {
        question: "Kamu sedang diminta membantu sebuah proyek besar. Timmu menghadapi kebingungan karena tugasnya rumit dan banyak bagian yang saling terhubung. Apa hal pertama yang kamu lakukan?",
        answers: [
            "Mencoba memetakan alur kerja, membuat catatan sistematis supaya jelas bagian mana yang harus dikerjakan lebih dulu.", // Programmer
            "Mengamati kondisi anggota tim, siapa yang kewalahan, lalu menenangkan mereka agar tetap fokus dan tidak stres.", // Dokter
            "Mendiskusikan aturan, hak, dan kewajiban tiap anggota supaya tidak ada yang merasa dirugikan.", // Pengacara
        ],
        score: [1, 2, 3]
    },
    {
        question: "Saat bertemu situasi yang benar-benar baru, biasanya kamu lebih tertarik untuk...",
        answers: [
            "Menguji coba hal kecil dulu, mencari pola, lalu memperbaiki sampai berhasil.", // Programmer
            "Memperhatikan respon orang-orang di sekitarmu, terutama bagaimana mereka terpengaruh oleh situasi itu.", // Dokter
            "Mengajukan banyak pertanyaan untuk memahami latar belakang, aturan, dan alasan dibalik situasi itu.", // Pengacara
        ],
        score: [1, 2, 3]
    },
    {
        question: "Bayangkan kamu punya waktu luang yang cukup panjang. Aktivitas apa yang paling membuatmu betah berjam-jam?",
        answers: [
            "Mengerjakan teka-teki atau mencoba memecahkan sesuatu yang menantang otak.", // Programmer
            "Membaca atau menonton hal-hal yang berhubungan dengan tubuh, kesehatan, atau cara merawat orang lain.", // Dokter
            "Berlatih berbicara, berdiskusi, atau menonton debat untuk memahami cara orang menyampaikan pendapat.", // Pengacara
        ],
        score: [1, 2, 3]
    },
    {
        question: "Kalau harus bekerja sama dengan orang lain, peran seperti apa yang biasanya terasa paling natural untukmu?",
        answers: [
            "Orang yang mengatur detail teknis atau mencari solusi praktis saat ada kendala.", // Programmer
            "Orang yang menjaga agar semua merasa nyaman, aman, dan tetap bersemangat.", // Dokter
            "Orang yang menyuarakan pendapat tim, bernegosiasi, atau mengatur kesepakatan.", // Pengacara
        ],
        score: [1, 2, 3]
    },
    {
        question: "Dalam sebuah konflik kecil di lingkunganmu, apa reaksi yang paling mungkin kamu lakukan?",
        answers: [
            "Mencari akar masalah secara logis lalu menawarkan solusi yang bisa diterapkan.", // Programmer
            "Menengahi dengan menenangkan orang yang paling emosional atau terluka.", // Dokter
            "Mendengarkan dua sisi cerita lalu menyampaikan argumen siapa yang lebih tepat.", // Pengacara
        ],
        score: [1, 2, 3]
    }
];

function loadQuestion() {
    const q = quizData[currentQuestion];
    $("#questionText").text(q.question);
    $("#answerOptions").empty();

    q.answers.forEach((ans, idx) => {
        $("#answerOptions").append(`
            <button class="answer-btn" data-score="${q.score[idx]}">${ans}</button>
        `);
    });

    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    $("#quizProgress").css("width", progress + "%");
}

// Jawaban

$(document).on("click", ".answer-btn", function () {
    totalScore += parseInt($(this).data("score"));
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        $("#quiz").addClass("d-none");
        $("#result").removeClass("d-none");
    }
});

// Result

$("#seeResult").click(function () {
    $("#result").addClass("d-none");
    $("#jobResult").removeClass("d-none");

    let job = "", desc = "";
    let avg = totalScore / quizData.length;

    if (avg < 1.7) {
        // Image Source : https://www.google.com/url?sa=i&url=https%3A%2F%2Fenigmacamp.com%2Fblog%2Fapa-itu-programmer&psig=AOvVaw077_DqxQhi8HjPifD_NUdh&ust=1759222394381000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCNt6HM_Y8DFQAAAAAdAAAAABAU
        img = "img/programmer.jpg";
        job = "Programmer";
        desc = "Kamu cenderung analitis, suka mencari pola, dan senang memecahkan masalah dengan cara sistematis. Karier di bidang teknologi dan pemrograman cocok untukmu.";
    } else if (avg < 2.4) {
        // Image Source : https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pajak.go.id%2Fid%2Fartikel%2Fpph-profesi-dokter-menjadi-lebih-tinggi-yuk-kita-cermati&psig=AOvVaw3NpE3n8j7EfOVtZePLX0Ma&ust=1759222487451000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDl-s_M_Y8DFQAAAAAdAAAAABAE
        img = "img/dokter.jpeg";
        job = "Dokter";
        desc = "Kamu peduli pada orang lain, punya empati tinggi, dan merasa puas ketika bisa menolong. Karier di bidang kesehatan cocok untukmu.";
    } else {
        // Image Source : https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gramedia.com%2Fpendidikan%2Fprofesi-pengacara%2F&psig=AOvVaw0O-tWte3Ainb4cuSQIwxuI&ust=1759222518314000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIDgtODM_Y8DFQAAAAAdAAAAABAL
        img = "img/pengacara.jpg";
        job = "Pengacara";
        desc = "Kamu punya jiwa kritis, suka berdiskusi, dan berani memperjuangkan sesuatu. Karier di bidang hukum cocok untukmu.";
    }

    $("#jobTitle").text(job);
    $("#jobDesc").text(desc);
    $("#jobImage").attr("src", img);
});

// Kembali ke Beranda
$("#backHome").click(function () {
    location.reload();
});
