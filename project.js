// ================================
// زر بداية الحكاية ❤️
// ================================

const button = document.getElementById("startBtn");
const message = document.getElementById("message");

if (button && message) {

    button.onclick = function () {

        message.innerHTML =
            "عايز اقولك ان اجمل زكرياتي كانت معاكي وعايز اقوللك اني بحبك و بموت فيكي ي روح قلبي وربنا يخليكي ليا وميحرمنيش منك ي كل حياتي انتي الحاجه الوحيده الي انا عمري ما ابعد عنها وافضل احبها واعمل كل حاجه انتي بتحبيها ي نور عيني ومهما حصل ما بينا هفضل احبك وعمر ما حبي ليكي يقل ولا هحب حد غيرك ولا عايز حد💗🌎💗💗💗🌎💗💗💗💗💗💗💗💗💗💗💗";

    };

}


// ================================
// عداد مدة الحكاية ❤️
// ================================

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

if (
    daysElement &&
    hoursElement &&
    minutesElement &&
    secondsElement
) {

    const startDate = new Date(2023, 7, 24, 0, 0, 0);

    function updateCounter() {

        const now = new Date();

        let totalSeconds =
            Math.floor((now - startDate) / 1000);

        let days =
            Math.floor(totalSeconds / 86400);

        totalSeconds %= 86400;

        let hours =
            Math.floor(totalSeconds / 3600);

        totalSeconds %= 3600;

        let minutes =
            Math.floor(totalSeconds / 60);

        let seconds =
            totalSeconds % 60;

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    updateCounter();

    setInterval(updateCounter, 1000);
}


// ================================
// القلوب العشوائية ❤️
// ================================

const hearts = document.querySelector(".hearts");

if (hearts) {

    const heartTypes = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    function createHeart() {

        const heart = document.createElement("span");

        heart.innerHTML =
            heartTypes[
                Math.floor(Math.random() * heartTypes.length)
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.floor(Math.random() * 20 + 15) + "px";

        heart.style.animationDuration =
            Math.floor(Math.random() * 5 + 5) + "s";

        hearts.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 10000);
    }

    setInterval(createHeart, 250);

    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 150);
    }
}


// ================================
// ظهور الذكريات مع النزول ❤️
// ================================

const memories =
    document.querySelectorAll(".memory-card");

if (memories.length > 0) {

    function showMemories() {

        memories.forEach(function (memory) {

            const position =
                memory.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                memory.classList.add("show");
            }

        });
    }

    window.addEventListener("scroll", showMemories);

    showMemories();
}


// ================================
// تكبير الصور ❤️
// ================================

function openImage(image) {

    const imageBox =
        document.getElementById("imageBox");

    const bigImage =
        document.getElementById("bigImage");

    if (imageBox && bigImage) {

        bigImage.src = image.src;

        imageBox.style.display = "flex";
    }
}


function closeImage() {

    const imageBox =
        document.getElementById("imageBox");

    if (imageBox) {
        imageBox.style.display = "none";
    }
}

// 🔐 الرسالة السرية

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");
const secretLock = document.getElementById("secretLock");

if (secretBtn && secretMessage) {

    secretBtn.addEventListener("click", function () {

        // 💌 محتوى الرسالة
        secretMessage.innerHTML = `
            <div class="secret-sparkle">✨</div>

            <p>
                يمكن الكلام ده بسيط...
                بس هو طالع من قلبي ليكي ❤️
                <br><br>

                من يوم ما دخلتي حياتي،
                وأنا بقيت أشوف تفاصيل صغيرة
                كان زماني بعدي عليها من غير ما أخد بالي.
                <br><br>

                ضحكتك، كلامك، وجودك جنبي...
                كل حاجة فيكي بقت ذكرى جميلة
                نفسي أفضل عايشها معاكي.
                <br><br>

                <strong>
                    وفي الآخر...
                    لو اتخيرت ألف مرة،
                    هختارك إنتِ كل مرة ❤️
                </strong>
            </p>

            <div class="secret-hearts">
                💗 ❤️ 💗
            </div>
        `;

        // ✨ إظهار الرسالة
        secretMessage.style.display = "block";

        // 🔓 فتح القفل
        if (secretLock) {

            secretLock.textContent = "🔓";

            secretLock.style.animation = "none";

            void secretLock.offsetWidth;

            secretLock.style.animation =
                "lockOpen .6s ease";
        }

        // 💗 تغيير الزر
        secretBtn.textContent = "💗 اتفتحت ليكي 💗";

        // منع الضغط المتكرر
        secretBtn.disabled = true;
    });

}


// ================================
// تشغيل الموسيقى 🎵❤️
// ================================

const musicBtn =
    document.getElementById("musicBtn");

const progressBar =
    document.getElementById("progressBar");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");


// الأغنية الموجودة في الصفحة الأب

const parentMusic =
    window.parent.document.getElementById("loveMusic");


// تحديث شكل الزر

function updateMusicButton() {

    if (!musicBtn || !parentMusic) return;

    if (parentMusic.paused) {
        musicBtn.innerHTML = "▶";
    } else {
        musicBtn.innerHTML = "⏸";
    }
}


// تحديث الوقت والشريط

function updateMusicProgress() {

    if (!parentMusic) return;

    if (progressBar) {
        progressBar.max = parentMusic.duration || 0;
        progressBar.value = parentMusic.currentTime;
    }

    if (currentTime) {
        currentTime.innerHTML =
            formatTime(parentMusic.currentTime);
    }

    if (duration) {
        duration.innerHTML =
            formatTime(parentMusic.duration);
    }
}


// زر التشغيل والإيقاف

if (parentMusic && musicBtn) {

    musicBtn.onclick = function () {

        if (parentMusic.paused) {

            parentMusic.volume = 1;
            parentMusic.muted = false;

            parentMusic.play()
                .catch(function (error) {
                    console.log("Music Error:", error);
                });

        } else {

            parentMusic.pause();

        }

    };


    parentMusic.addEventListener("play", function () {
        updateMusicButton();
    });


    parentMusic.addEventListener("pause", function () {
        updateMusicButton();
    });

}


// تحديث البيانات باستمرار

if (parentMusic) {

    parentMusic.addEventListener(
        "loadedmetadata",
        updateMusicProgress
    );

    parentMusic.addEventListener(
        "timeupdate",
        updateMusicProgress
    );

    parentMusic.addEventListener(
        "durationchange",
        updateMusicProgress
    );

}


// تحريك شريط الأغنية

if (parentMusic && progressBar) {

    progressBar.oninput = function () {

        parentMusic.currentTime =
            Number(progressBar.value);

        updateMusicProgress();

    };

}


// تحديث فوري عند فتح Project

setTimeout(function () {

    updateMusicProgress();
    updateMusicButton();

}, 100);


// ================================
// تحويل الوقت إلى دقائق وثواني
// ================================

function formatTime(time) {

    if (isNaN(time)) {
        return "00:00";
    }

    let minutes =
        Math.floor(time / 60);

    let seconds =
        Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}


// ================================
// ظهور قسم ليه بحبك مع النزول ❤️
// ================================

const whyLove =
    document.querySelector(".why-love");

if (whyLove) {

    function showWhyLove() {

        const position =
            whyLove.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            whyLove.classList.add("show");
        }

    }

    window.addEventListener("scroll", showWhyLove);

    showWhyLove();
}


// ================================
// ظهور رسالة الحب مع النزول ❤️
// ================================

const loveMessage =
    document.querySelector(".love-message");

if (loveMessage) {

    function showLoveMessage() {

        const position =
            loveMessage.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            loveMessage.classList.add("show");
        }

    }

    window.addEventListener("scroll", showLoveMessage);

    showLoveMessage();
}


// ================================
// استمرار الأغنية بعد الضغط على Next 🎵❤️
// ================================

const savedMusicTime =
    sessionStorage.getItem("loveMusicTime");

const musicWasPlaying =
    sessionStorage.getItem("musicWasPlaying");

if (parentMusic && savedMusicTime !== null) {

    parentMusic.addEventListener("loadedmetadata", function () {

        parentMusic.currentTime =
            Number(savedMusicTime);

        if (musicWasPlaying === "true") {

            parentMusic.play()
                .then(function () {

                    if (musicBtn) {
                        musicBtn.innerHTML = "⏸";
                    }

                })
                .catch(function () {

                    if (musicBtn) {
                        musicBtn.innerHTML = "▶";
                    }

                });

        }

    });

}


// ================================
// ⏳ آلة زمن حبنا
// ================================

const timeData = {

    2023: {
        title: "2023 — بداية الحكاية ❤️",
        text: "السنة اللي بدأت فيها أجمل حكاية في حياتي... ومن يومها وكل حاجة بقت أحلى بوجودك ❤️",
        image: "WhatsApp Image 2026-09-05 at 5.33.33 PM.jpeg"
    },

    2024: {
        title: "2024 — ذكريات بتكبر ❤️",
        text: "عدّت سنة، بس كل لحظة فيها كانت بتخليني أحبك أكتر... وكأن الحكاية لسه بتبدأ من جديد كل يوم 💕",
        image: "WhatsApp Image 2026-09-08 at 7.38.15 PM.jpeg"
    },

    2025: {
        title: "2025 — أجمل أيامنا 💗",
        text: "سنة جديدة من الضحك والكلام والذكريات... وسنة أثبتتلي إن وجودك في حياتي من أجمل الحاجات اللي حصلتلي 🥹❤️",
        image: "WhatsApp Image 2026-09-21 at 7.44.54 PM (1).jpeg"
    },

    2026: {
        title: "2026 — ولسه الحكاية مستمرة 💞",
        text: "وصلنا لهنا ولسه عندنا صور وذكريات وحاجات كتير مستنيانا... وأجمل حاجة إنك لسه معايا ❤️",
        image: "WhatsApp Image 2026-09-08 at 7.38.16 PM (1).jpeg"
    }

};


function playTimeTravelSound() {

    const AudioContext =
        window.AudioContext || window.webkitAudioContext;

    if (!AudioContext) return;

    const audio = new AudioContext();

    if (audio.state === "suspended") {
        audio.resume();
    }

    const now = audio.currentTime;

    // 🌀 Whoosh ناعم
    const whoosh = audio.createOscillator();
    const whooshGain = audio.createGain();

    whoosh.type = "sine";

    whoosh.frequency.setValueAtTime(250, now);
    whoosh.frequency.exponentialRampToValueAtTime(
        750,
        now + 0.35
    );
    whoosh.frequency.exponentialRampToValueAtTime(
        180,
        now + 0.75
    );

    whooshGain.gain.setValueAtTime(0.001, now);

    whooshGain.gain.exponentialRampToValueAtTime(
        0.16,
        now + 0.12
    );

    whooshGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.75
    );

    whoosh.connect(whooshGain);
    whooshGain.connect(audio.destination);

    whoosh.start(now);
    whoosh.stop(now + 0.8);


    // ✨ لمعة صغيرة في نهاية الانتقال
    const sparkle = audio.createOscillator();
    const sparkleGain = audio.createGain();

    sparkle.type = "sine";

    sparkle.frequency.setValueAtTime(
        1200,
        now + 0.45
    );

    sparkle.frequency.exponentialRampToValueAtTime(
        2200,
        now + 0.65
    );

    sparkleGain.gain.setValueAtTime(
        0.001,
        now + 0.4
    );

    sparkleGain.gain.linearRampToValueAtTime(
        0.08,
        now + 0.5
    );

    sparkleGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.75
    );

    sparkle.connect(sparkleGain);
    sparkleGain.connect(audio.destination);

    sparkle.start(now + 0.4);
    sparkle.stop(now + 0.8);
}

function showYear(year) {

    const data = timeData[year];

    if (!data) return;

    playTimeTravelSound();

    const title =
        document.getElementById("timeTitle");

    const text =
        document.getElementById("timeText");

    const image =
        document.getElementById("timeImage");

    const memory =
        document.getElementById("timeMemory");

    if (!title || !text || !image || !memory) return;


    // إعادة تشغيل الأنيميشن

// ⏳ تشغيل بوابة الزمن
memory.classList.remove("time-travel");
memory.style.animation = "none";

void memory.offsetWidth;

memory.classList.add("time-travel");

// تغيير الذكرى أثناء السفر
setTimeout(function () {

    title.textContent = data.title;
    text.textContent = data.text;
    image.src = data.image;

}, 450);


// ✨ ظهور الذكرى الجديدة
setTimeout(function () {

    memory.classList.remove("time-travel");

    memory.style.animation = "none" ;

    void memory.offsetWidth;

}, 950);


    // تغيير السنة المختارة

    document.querySelectorAll(".time-year")
        .forEach(function (yearButton) {

            yearButton.classList.remove("active");

        });


    const selectedButton =
        document.querySelector(
            `.time-year[onclick="showYear(${year})"]`
        );


    if (selectedButton) {

        selectedButton.classList.add("active");

    }

}
const quizQuestions = [

    {
        question:
            "لو الحب حقيقي، إيه أكتر حاجة بتثبت ده؟ ❤️",

        answers: [
            "🗣️ الكلام الحلو وقت ما تكونوا مبسوطين.",
            "🤝 الوقوف جنب بعض وقت الظروف الصعبة.",
            "🎁 إن كل واحد يفضل يعمل مفاجآت للتاني."
        ],

        correct: 1
    },

    {
        question:
            "إيه أكتر حاجة ممكن تقوي العلاقة بين اتنين؟ 💗",

        answers: [
            "💬 الصراحة والتفاهم.",
            "📱 الكلام طول اليوم بدون توقف.",
            "🎁 الهدايا في كل مناسبة."
        ],

        correct: 0
    },

    {
        question:
            "لما الشخص اللي بتحبه يكون مضايق، إيه التصرف الأفضل؟ 🥺",

        answers: [
            "🚶 تسيبه لوحده تمامًا.",
            "😂 تحاول تغير الموضوع وخلاص.",
            "🫂 تسمعه وتحاول تفهمه وتكون جنبه."
        ],

        correct: 2
    },

    {
        question:
            "لو الشخص اللي بتحبه بيمر بفترة صعبة ومش قادر يتكلم، إيه التصرف اللي يدل على حب ناضج؟ ❤️",

        answers: [
            "🫂 تديله مساحته، بس تخليه عارف إنك موجود وقت ما يحتاجك.",
            "📱 تفضل تسأله كل شوية عشان تتأكد إنه لسه بيحبك.",
            "😔 تبعد عنه تمامًا لحد ما هو اللي يرجعلك."
        ],

        correct: 0
    },

  {
    question:
        "إيه أكتر حاجة ممكن تخلّي الإنسان يكتشف إن الشخص اللي قدامه يستاهل ثقته؟ ❤️",

    answers: [
        "💗 إنه يسمع الكلام، وطريقته في التعامل تبقى كويسة ورومانسية.",
        "🧠 إنه لو شايف إن حاجة صح، يبقى هي الصح ومياخدش رأي الطرف التاني.",
        "🧊 إنه وقت المشاكل يبعد ويتجاهل الطرف التاني لحد ما الموضوع يعدّي."
    ],

    correct: 0
}

];

let currentQuestion = 0;
let quizScore = 0;

const quizNumber =
    document.getElementById("quizNumber");

const quizProgress =
    document.getElementById("quizProgress");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizAnswers =
    document.getElementById("quizAnswers");

const quizFeedback =
    document.getElementById("quizFeedback");

const quizContent =
    document.getElementById("quizContent");

const quizResult =
    document.getElementById("quizResult");

const resultTitle =
    document.getElementById("resultTitle");

const resultText =
    document.getElementById("resultText");


function loadQuestion() {

    const question =
        quizQuestions[currentQuestion];

    quizNumber.textContent =
        `السؤال ${currentQuestion + 1} من 5`;

    quizProgress.style.width =
        `${((currentQuestion + 1) / 5) * 100}%`;

    quizQuestion.textContent =
        question.question;

    quizAnswers.innerHTML = "";

    question.answers.forEach(function (answer, index) {

        const button =
            document.createElement("button");

        button.className = "quiz-answer";

        button.textContent = answer;

        button.onclick = function () {
            checkAnswer(index);
        };

        quizAnswers.appendChild(button);

    });

    quizFeedback.textContent = "";
}


function checkAnswer(answerIndex) {

    const question =
        quizQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".quiz-answer");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (answerIndex === question.correct) {

        quizScore++;

        quizFeedback.textContent =
            "صح ❤️ إجابة جميلة!";

    } else {

        quizFeedback.textContent =
            "مش دي 😂❤️ جربي السؤال اللي بعده!";
    }

    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {

            loadQuestion();

        } else {

            showQuizResult();

        }

    }, 900);
}


function showQuizResult() {

    quizContent.style.display = "none";

    quizResult.style.display = "block";

    if (quizScore === 5) {

        resultTitle.textContent =
            "❤️ 5 من 5 ❤️";

        resultText.textContent =
            "واضح إنك فاهمة الحب كويس جدًا... 🥹💗";

    } else if (quizScore >= 3) {

        resultTitle.textContent =
            `💗 ${quizScore} من 5`;

        resultText.textContent =
            "نتيجة حلوة جدًا... واضح إن قلبك فاهم ❤️";

    } else {

        resultTitle.textContent =
            `💕 ${quizScore} من 5`;

        resultText.textContent =
            "مفيش مشكلة 😂❤️ الحب لسه محتاج شوية مذاكرة!";
    }
}


function restartQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    quizResult.style.display = "none";

    quizContent.style.display = "block";

    loadQuestion();

}


/* تشغيل أول سؤال */

if (
    quizQuestion &&
    quizAnswers &&
    quizNumber
) {
    loadQuestion();
}



// 🎡 عجلة الحظ الرومانسية

const wheel = document.getElementById("loveWheel");
const spinWheelBtn = document.getElementById("spinWheelBtn");
const wheelResult = document.getElementById("wheelResult");

if (wheel && spinWheelBtn && wheelResult) {

    const ctx = wheel.getContext("2d");

    const wheelItems = [
        "❤️ بحبك",
        "💸 5 جنيه 😂",
        "✨ يوم جميل سوا سوا",
        "💗 بموت فيكي",
        "😂 بحب ضحكتك",
        "🌹 وردة ليكي",
        "💫 أمنية جميلة احققهالك",
        "🫶 لحظة حلوة مع بعض"
    ];

    const colors = [
        "#ff8fab",
        "#ffb3c6",
        "#ffc2d1",
        "#ff758f",
        "#ff9ebb",
        "#ffcad4",
        "#ff85a1",
        "#ffa6c1"
    ];

    const center = wheel.width / 2;
    const radius = wheel.width / 2;
    const slice = (Math.PI * 2) / wheelItems.length;


    // 🎨 رسم العجلة
    function drawWheel() {

        ctx.clearRect(
            0,
            0,
            wheel.width,
            wheel.height
        );

        wheelItems.forEach(function (item, index) {

            const start = index * slice;
            const end = start + slice;

            ctx.beginPath();

            ctx.moveTo(
                center,
                center
            );

            ctx.arc(
                center,
                center,
                radius,
                start,
                end
            );

            ctx.closePath();

            ctx.fillStyle = colors[index];
            ctx.fill();

            ctx.strokeStyle = "rgba(255,255,255,.9)";
            ctx.lineWidth = 2;
            ctx.stroke();


            ctx.save();

            ctx.translate(
                center,
                center
            );

            ctx.rotate(
                start + slice / 2
            );

            ctx.textAlign = "right";
            ctx.textBaseline = "middle";

            ctx.fillStyle = "#7d1745";
            ctx.font = "bold 13px Arial";

            ctx.fillText(
                item,
                radius - 12,
                0
            );

            ctx.restore();
        });


        // ❤️ منتصف العجلة
        ctx.beginPath();

        ctx.arc(
            center,
            center,
            35,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#fff";
        ctx.fill();

        ctx.strokeStyle = "#c2185b";
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.font = "22px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(
            "❤️",
            center,
            center
        );
    }

    drawWheel();


    // 🔊 نظام الصوت
    let audioContext = null;

    function getAudio() {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return null;
        }

        if (!audioContext) {
            audioContext = new AudioContext();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        return audioContext;
    }


    // 🎡 طقة واحدة
    function playTick(audio, volume) {

        if (!audio) return;

        const now = audio.currentTime;

        const click =
            audio.createOscillator();

        const gain =
            audio.createGain();

        click.type = "triangle";

        click.frequency.setValueAtTime(
            190,
            now
        );

        click.frequency.exponentialRampToValueAtTime(
            75,
            now + 0.045
        );

        gain.gain.setValueAtTime(
            0.001,
            now
        );

        gain.gain.exponentialRampToValueAtTime(
            volume,
            now + 0.006
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.07
        );

        click.connect(gain);
        gain.connect(audio.destination);

        click.start(now);
        click.stop(now + 0.075);
    }


    // 💗 صوت ظهور النتيجة
    function playWinSound(audio) {

        if (!audio) return;

        const now = audio.currentTime;


        // 🎵 النغمة الأولى
        const note1 =
            audio.createOscillator();

        const gain1 =
            audio.createGain();

        note1.type = "sine";

        note1.frequency.setValueAtTime(
            523.25,
            now
        );

        note1.frequency.exponentialRampToValueAtTime(
            659.25,
            now + 0.3
        );

        gain1.gain.setValueAtTime(
            0.001,
            now
        );

        gain1.gain.exponentialRampToValueAtTime(
            0.65,
            now + 0.04
        );

        gain1.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.65
        );

        note1.connect(gain1);
        gain1.connect(audio.destination);

        note1.start(now);
        note1.stop(now + 0.7);


        // 🎵 النغمة الثانية
        const note2 =
            audio.createOscillator();

        const gain2 =
            audio.createGain();

        note2.type = "sine";

        note2.frequency.setValueAtTime(
            659.25,
            now + 0.15
        );

        note2.frequency.exponentialRampToValueAtTime(
            783.99,
            now + 0.45
        );

        gain2.gain.setValueAtTime(
            0.001,
            now + 0.15
        );

        gain2.gain.exponentialRampToValueAtTime(
            0.60,
            now + 0.2
        );

        gain2.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.8
        );

        note2.connect(gain2);
        gain2.connect(audio.destination);

        note2.start(now + 0.15);
        note2.stop(now + 0.85);


        // ✨ لمعة
        const sparkle =
            audio.createOscillator();

        const sparkleGain =
            audio.createGain();

        sparkle.type = "sine";

        sparkle.frequency.setValueAtTime(
            1200,
            now + 0.3
        );

        sparkle.frequency.exponentialRampToValueAtTime(
            1900,
            now + 0.55
        );

        sparkleGain.gain.setValueAtTime(
            0.001,
            now + 0.3
        );

        sparkleGain.gain.exponentialRampToValueAtTime(
            0.3,
            now + 0.35
        );

        sparkleGain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.8
        );

        sparkle.connect(sparkleGain);
        sparkleGain.connect(audio.destination);

        sparkle.start(now + 0.3);
        sparkle.stop(now + 0.85);
    }


    // 🎡 الدوران
    let spinning = false;
    let currentRotation = 0;


    spinWheelBtn.addEventListener(
        "click",
        function () {

            if (spinning) return;

            spinning = true;

            spinWheelBtn.disabled = true;

            wheelResult.textContent = "";


            // 🔊 تشغيل الصوت بعد ضغطة المستخدم مباشرة
            const audio = getAudio();

            if (audio && audio.state === "suspended") {
                audio.resume();
            }


            // 🎯 اختيار النتيجة
            const selectedIndex =
                Math.floor(
                    Math.random() *
                    wheelItems.length
                );


            const sliceDeg =
                360 / wheelItems.length;

            const selectedCenter =
                selectedIndex * sliceDeg +
                sliceDeg / 2;

            const pointerAngle = -90;

            let targetRotation =
                pointerAngle -
                selectedCenter;


            while (
                targetRotation <=
                currentRotation
            ) {

                targetRotation += 360;
            }


            // 🎡 5 لفات كاملة
            targetRotation += 360 * 5;

            currentRotation =
                targetRotation;


            // 🎡 تشغيل العجلة
            wheel.style.transform =
                `rotate(${targetRotation}deg)`;


            // 🔊 صوت الطقطقة
            let soundTimer = null;

            const soundStart =
                performance.now();


            if (audio) {

                soundTimer =
                    setInterval(function () {

                        if (!spinning) {
                            clearInterval(soundTimer);
                            return;
                        }


                        const elapsed =
                            performance.now() -
                            soundStart;


                        const progress =
                            Math.min(
                                elapsed / 4200,
                                1
                            );


                        // 🔊 يبدأ عالي
                        // 🔉 وينخفض تدريجيًا
                        const volume =
                            0.70 -
                            (progress * 0.50);


                        playTick(
                            audio,
                            Math.max(
                                volume,
                                0.10
                            )
                        );

                    }, 120);
            }


            // 🎉 نهاية الدوران
            setTimeout(function () {

                if (soundTimer) {
                    clearInterval(soundTimer);
                }


                // إظهار النتيجة
                wheelResult.textContent =
                    "🎉 " +
                    wheelItems[selectedIndex];


                // 💗 صوت النتيجة
                if (audio) {
                    playWinSound(audio);
                }


                spinning = false;

                spinWheelBtn.disabled = false;

            }, 4200);

        }
    );

}
// 🌌 تفاعل نجوم حبنا

const loveStars =
    document.querySelectorAll(".love-star");

const starMessage =
    document.getElementById("starMessage");


if (loveStars.length && starMessage) {

    loveStars.forEach(function (star) {

        star.addEventListener("click", function () {

            const message =
                star.getAttribute("data-message");

            starMessage.style.opacity = "0";

            starMessage.style.transform =
                "scale(.8)";

            setTimeout(function () {

                starMessage.textContent =
                    message;

                starMessage.style.opacity = "1";

                starMessage.style.transform =
                    "scale(1)";

            }, 200);

        });

    });

}
/* 💗 لحظة النهاية */

const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

if (finalBtn && finalMessage) {

finalBtn.addEventListener("click", function () {

    finalBtn.style.display = "none";

    finalMessage.style.display = "block";

    // قلوب صغيرة تطلع في لحظة النهاية
    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.textContent =
            ["❤️", "💗", "💕", "✨"][Math.floor(Math.random() * 4)];

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";
        heart.style.zIndex = "99999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0) scale(.7)",
                    opacity: 0
                },
                {
                    transform:
                        `translateY(-${window.innerHeight * .8}px) scale(1.2)`,
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight}px) scale(.7)`,
                    opacity: 0
                }
            ],
            {
                duration: 3500 + Math.random() * 1500,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            heart.remove();
        }, 5500);
    }

    // ينزل للنهاية بشكل ناعم
    setTimeout(function () {
        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 150);
});

}