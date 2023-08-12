function addGregorianHijriOverlayEventListener() {
    let gregorianHijriOverlay = document.querySelector(
        ".Gregorian-Hijri-overlay"
    );
    gregorianHijriOverlay.addEventListener("click", (event) => {
        let gregorianHijriContent = document.querySelector(
            ".Gregorian-Hijri-overlay .container"
        );
        if (!gregorianHijriContent.contains(event.target)) {
            event.target.style.display = "none";
        }
    });
}

function addNextArrowEventListener() {
    document.querySelector(".controllers .next").addEventListener("click", () => {
        changeDateInput(1);
        dateInput.dispatchEvent(new Event("change"));
    });
}

function addPreviousArrowEventListener() {
    document
        .querySelector(".controllers .previous")
        .addEventListener("click", () => {
            changeDateInput(-1);
            dateInput.dispatchEvent(new Event("change"));
        });
}

function changeDateInput(number) {
    let date = new Date(dateInput.value);
    date.setMonth(date.getMonth() + number);
    let dateString = date.toISOString().slice(0, 7);
    dateInput.value = dateString;
}

export {
    addGregorianHijriOverlayEventListener,
    addNextArrowEventListener,
    addPreviousArrowEventListener
}