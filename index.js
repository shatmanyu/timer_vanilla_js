(function () {
  const startBtn = document.getElementById("start");
  const stopBtn = document.getElementById("stop");
  const resetBtn = document.getElementById("reset");

  const hrsValue = document.getElementById("hrs-fld");
  const minsValue = document.getElementById("mins-fld");
  const secsValue = document.getElementById("secs-fld");
  let timerId;
  startBtn.addEventListener("click", (e) => {
    if (hrsValue.value == 0 && minsValue.value == 0 && secsValue.value == 0) return;
    function startTimer() {
      console.log("Ete");
      startBtn.style.display = "none";
      stopBtn.style.display = "initial";
      if (minsValue.value > 60) {
        hrsValue.value =
          Number(hrsValue.value) + Math.floor(Number(minsValue.value) / 60);
        minsValue.value = Math.floor(Number(minsValue.value) % 60);
      }
      if (secsValue.value > 60) {
        minsValue.value =
          Number(minsValue.value) + Math.floor(Number(secsValue.value) / 60);
        secsValue.value = Math.floor(Number(secsValue.value) % 60);
      }
      timerId = setInterval(timer, 1000);
    }
    startTimer();
  });
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", () => {
    stopTimer();
    hrsValue.value = "";
    minsValue.value = "";
    secsValue.value = "";
  });
  function stopTimer() {
    clearTimeout(timerId);
    startBtn.style.display = "initial";
    stopBtn.style.display = "none";
  }
  const timer = () => {
    if (hrsValue.value == 0 && minsValue.value == 0 && secsValue.value == 0) {
      console.log("Ended");
      hrsValue.value = "";
      minsValue.value = "";
      secsValue.value = "";
      stopTimer();
    } else if (secsValue.value != 0) {
      console.log(secsValue.value);
      secsValue.value = `${secsValue.value <= 10 ? "0" : ""}${
        secsValue.value - 1
      }`;
    } else if (minsValue.value != 0 && secsValue.value == 0) {
      minsValue.value = `${minsValue.value <= 10 ? "0" : ""}${
        minsValue.value - 1
      }`;
      secsValue.value = 59;
    } else if (hrsValue.value != 0 && minsValue.value == 0) {
      hrsValue.value = `${hrsValue.value <= 10 ? "0" : ""}${
        hrsValue.value - 1
      }`;
      minsValue.value = 59;
      secsValue.value = 59;
    }
  };
  // else if(minValue.value!=59)
})();
