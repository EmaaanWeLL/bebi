const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (musicButton) {
    musicButton.addEventListener("click", async () => {
        try {
            if (music.paused) {
                music.load();
                await music.play();
                musicButton.textContent = "⏸ Pause Music";
            } else {
                music.pause();
                musicButton.textContent = "🎵 Play Music (guess what song this is)";
            }
        } catch (error) {
            console.error("Audio could not be played:", error);
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
    });
}

const hearts = document.getElementById("hearts");

function createHeart(){

    const makeFlower = Math.random() < 0.50; // ~50% chance to use a floating flower
    const el = makeFlower ? document.createElement("img") : document.createElement("div");

    let size = 18 + Math.random() * 24;
    if (makeFlower) {
        const imageIndex = Math.floor(Math.random() * 3) + 1;
        el.src = `images/flower${imageIndex}.png`;
        el.alt = "floating flower";
        el.classList.add('float-flower');
        size = size * 4; // make flowers bigger
        el.style.width = size + "px";
        el.style.height = "auto";
        el.style.zIndex = 0;
    } else {
        const makeThird = Math.random() < 0.30; // smaller chance for the 3rd text
        if (makeThird) {
            el.textContent = "3rd";
            el.classList.add('float-3rd');
        } else {
            el.innerHTML = "❤️";
            el.classList.add('float-heart');
        }
    }

    el.style.position = "absolute";
    el.style.left = (5 + Math.random() * 90) + "vw";
    el.style.top = "100vh";
    el.style.fontSize = size + "px";
    el.style.opacity = 0.9;
    el.style.transition = "transform 6s linear, opacity 6s linear";

    hearts.appendChild(el);

    setTimeout(() => {
        el.style.transform = "translateY(-120vh)";
        el.style.opacity = 0;
    }, 100);

    setTimeout(() => {
        el.remove();
    }, 6000);

}

setInterval(createHeart,500);

const startButton = document.getElementById("startButton");
const homeScreen = document.getElementById("homeScreen");
const menuScreen = document.getElementById("menuScreen");
const missMeButton = document.getElementById("missMeButton");
const favePicButton = document.getElementById("favePicButton");
const notMadButton = document.getElementById("notMadButton");
const monthsButton = document.getElementById("monthsButton");
const bullyButton = document.getElementById("bullyButton");
const missMeScreen = document.getElementById("missMeScreen");
const faveScreen = document.getElementById("faveScreen");
const notMadScreen = document.getElementById("notMadScreen");
const monthsScreen = document.getElementById("monthsScreen");
const bullyScreen = document.getElementById("bullyScreen");
const missMeBackButton = document.getElementById("missMeBackButton");
const faveBackButton = document.getElementById("faveBackButton");
const notMadBackButton = document.getElementById("notMadBackButton");
const bullyBackButton = document.getElementById("bullyBackButton");
const bgMusic2 = document.getElementById("bgMusic2");
const bgMusic3 = document.getElementById("bgMusic3");
const bgMusicMonths = document.getElementById("bgMusicMonths");
const bgMusic4 = document.getElementById("bgMusic4");
const bgMusic6 = document.getElementById("bgMusic6");
const playSong2Button = document.getElementById("playSong2Button");
const playMonthsButton = document.getElementById("playMonthsButton");
const monthsBackButton = document.getElementById("monthsBackButton");
const monthsMessageDisplay = document.getElementById("monthsMessageDisplay");

function switchScreen(showScreen, hideScreen) {
    if (!showScreen || !hideScreen) return;

    // ensure shown screen is on top
    try {
        showScreen.style.zIndex = 5;
    } catch (e) {}
    try {
        hideScreen.style.zIndex = 1;
    } catch (e) {}

    showScreen.style.display = "block";
    showScreen.classList.remove("hidden");
    hideScreen.classList.add("hidden");

    setTimeout(() => {
        hideScreen.style.display = "none";
    }, 400);
}

if (startButton) {
    startButton.addEventListener("click", () => {
        switchScreen(menuScreen, homeScreen);
    });
}

const backButton = document.getElementById("backButton");

if (backButton) {
    backButton.addEventListener("click", () => {
        switchScreen(homeScreen, menuScreen);
    });
}

if (missMeButton) {
    missMeButton.addEventListener("click", () => {
        if (music && !music.paused) {
            music.pause();
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
        switchScreen(missMeScreen, menuScreen);
    });
}

if (favePicButton) {
    favePicButton.addEventListener("click", async () => {
        if (music && !music.paused) {
            music.pause();
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
        if (bgMusic2 && !bgMusic2.paused) {
            bgMusic2.pause();
            playSong2Button.textContent = "🎵 Play ze Song";
        }
        if (bgMusic3) {
            try {
                await bgMusic3.play();
            } catch (error) {
                console.error("Favorite picture song could not be played:", error);
            }
        }
        switchScreen(faveScreen, menuScreen);
    });
}

if (notMadButton) {
    notMadButton.addEventListener("click", async () => {
        if (music && !music.paused) {
            music.pause();
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
        if (bgMusic2 && !bgMusic2.paused) {
            bgMusic2.pause();
            playSong2Button.textContent = "🎵 Play ze Song";
        }
        if (bgMusic3 && !bgMusic3.paused) {
            bgMusic3.pause();
        }
        if (bgMusic4) {
            try {
                await bgMusic4.play();
            } catch (error) {
                console.error("song4 could not be played:", error);
            }
        }
        switchScreen(notMadScreen, menuScreen);
    });
}

if (missMeBackButton) {
    missMeBackButton.addEventListener("click", () => {
        if (bgMusic2 && !bgMusic2.paused) {
            bgMusic2.pause();
            playSong2Button.textContent = "🎵 Play Song 2";
        }
        switchScreen(menuScreen, missMeScreen);
    });
}

if (faveBackButton) {
    faveBackButton.addEventListener("click", () => {
        if (bgMusic3 && !bgMusic3.paused) {
            bgMusic3.pause();
        }
        switchScreen(menuScreen, faveScreen);
    });
}

if (notMadBackButton) {
    notMadBackButton.addEventListener("click", () => {
        if (bgMusic4 && !bgMusic4.paused) {
            bgMusic4.pause();
        }
        switchScreen(menuScreen, notMadScreen);
    });
}

if (playSong2Button && bgMusic2) {
    playSong2Button.addEventListener("click", async () => {
        try {
            if (bgMusic2.paused) {
                await bgMusic2.play();
                playSong2Button.textContent = "⏸ Pause ze Song";
            } else {
                bgMusic2.pause();
                playSong2Button.textContent = "🎵 Play ze Song";
            }
        } catch (error) {
            console.error("Song 2 could not be played:", error);
            playSong2Button.textContent = "🎵 Play ze Song";
        }
    });
}

if (monthsButton) {
    monthsButton.addEventListener("click", () => {
        console.log('monthsButton clicked');
        if (music && !music.paused) {
            music.pause();
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
        if (bgMusic2 && !bgMusic2.paused) {
            bgMusic2.pause();
            playSong2Button.textContent = "🎵 Play ze Song";
        }
        // no audio autoplay for months button — only show message and switch screen
        if (monthsMessageDisplay) monthsMessageDisplay.textContent = "Made this while we're talking HAHAHAHA. I love you";
        switchScreen(monthsScreen, menuScreen);
    });
}

if (playMonthsButton && bgMusicMonths) {
    playMonthsButton.addEventListener("click", async () => {
        try {
            if (bgMusicMonths.paused) {
                await bgMusicMonths.play();
                playMonthsButton.textContent = "⏸ Pause";
            } else {
                bgMusicMonths.pause();
                playMonthsButton.textContent = "🎵 Play";
            }
        } catch (error) {
            console.error("Months song could not be played:", error);
            playMonthsButton.textContent = "🎵 Play Months Song";
        }
    });
}

if (monthsBackButton) {
    monthsBackButton.addEventListener("click", () => {
        if (bgMusicMonths && !bgMusicMonths.paused) bgMusicMonths.pause();
        switchScreen(menuScreen, monthsScreen);
    });
}

if (bullyButton) {
    bullyButton.addEventListener("click", async () => {
        if (music && !music.paused) {
            music.pause();
            musicButton.textContent = "🎵 Play Music (guess what song this is)";
        }
        if (bgMusic2 && !bgMusic2.paused) {
            bgMusic2.pause();
            playSong2Button.textContent = "🎵 Play ze Song";
        }
        if (bgMusic3 && !bgMusic3.paused) {
            bgMusic3.pause();
        }
        if (bgMusic4 && !bgMusic4.paused) {
            bgMusic4.pause();
        }
        if (bgMusic6) {
            try {
                await bgMusic6.play();
            } catch (error) {
                console.error("song6 could not be played:", error);
            }
        }
        switchScreen(bullyScreen, menuScreen);
    });
}

if (bullyBackButton) {
    bullyBackButton.addEventListener("click", () => {
        if (bgMusic6 && !bgMusic6.paused) {
            bgMusic6.pause();
        }
        switchScreen(menuScreen, bullyScreen);
    });
}
