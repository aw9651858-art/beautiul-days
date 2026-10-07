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
// تشغيل الموسيقى 🎵❤️
// ================================

const musicBtn = document.getElementById("musicBtn");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const parentMusic =
    window.parent.document.getElementById("loveMusic");


// تشغيل وإيقاف الأغنية

if (parentMusic && musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (parentMusic.paused) {

            parentMusic.volume = 1;
            parentMusic.muted = false;

            parentMusic.play()
                .then(function () {

                    musicBtn.innerHTML = "⏸";

                })
                .catch(function (error) {

                    console.log("Music Error:", error);
                    alert("الأغنية مش قادرة تشتغل: " + error);

                });

        } else {

            parentMusic.pause();

            musicBtn.innerHTML = "▶";

        }

    });

}


// ================================
// مدة الأغنية وشريط الثواني 🎵
// ================================

if (parentMusic && progressBar) {

    parentMusic.addEventListener("loadedmetadata", function () {

        progressBar.max = parentMusic.duration;

        if (duration) {

            duration.innerHTML =
                formatTime(parentMusic.duration);

        }

    });


    parentMusic.addEventListener("timeupdate", function () {

        progressBar.value =
            parentMusic.currentTime;

        if (currentTime) {

            currentTime.innerHTML =
                formatTime(parentMusic.currentTime);

        }

    });


    progressBar.addEventListener("input", function () {

        parentMusic.currentTime =
            Number(progressBar.value);

    });

}
// ================================
// زر Next ❤️
// ================================

const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {

    nextBtn.addEventListener("click", function () {

        window.parent.postMessage("GO_TO_PROJECT", "*");

    });

}



// ================================
// تحويل الوقت ⏱️
// ================================

function formatTime(time) {

    if (!isFinite(time)) {
        return "00:00";
    }

    const minutes =
        Math.floor(time / 60);

    let seconds =
        Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}