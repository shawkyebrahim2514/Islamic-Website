function setAdhkarCardsSection(adhkar) {
    var adhkarNames = document.querySelector(".adhkar-names");
    for (let name in adhkar) {
        let card = createAdhkarCard(name, adhkar[name]);
        adhkarNames.appendChild(card);
    }
}

function createAdhkarCard(name, allAdhkar) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h3 class="name">${name}</h3>
        `;
    addDhkrCardEventListener(card, allAdhkar);
    return card;
}

function addDhkrCardEventListener(card, allAdhkar) {
    card.addEventListener("click", function () {
        removeLastAdhkar();
        setAdhkar(allAdhkar);
    });
}

function removeLastAdhkar() {
    let lastAdhkar = document.querySelector("main.adhkar");
    lastAdhkar.innerHTML = "";
}

function setAdhkar(allAdhkar) {
    let adhkarContainer = document.querySelector("main.adhkar");
    for (let dhkr of allAdhkar) {
        if (dhkr.content == "stop") continue;
        if (Array.isArray(dhkr)) {
            setAdhkar(dhkr);
            continue;
        }
        let dhkrSection = createDhkrSection(dhkr);
        adhkarContainer.appendChild(dhkrSection);
    }
}

function createDhkrSection(dhkr) {
    let dhkrSection = document.createElement("section");
    dhkrSection.classList.add("dhkr");
    cleanDhkrContent(dhkr);
    let content = `<h2 class="dhkr-content">${dhkr.content}</h2>`;
    let description = `<h4 class="dhkr-description">${dhkr.description}</h4>`;
    let counter = `<div class="counter"><span>${+dhkr.count}</span></div>`;
    if (dhkr.description) {
        dhkrSection.innerHTML = content + description + counter;
    } else {
        dhkrSection.innerHTML = content + counter;
    }
    addCounterEventListener(dhkrSection.querySelector(".counter"));
    return dhkrSection;
}

function cleanDhkrContent(dhkr) {
    // remove these specific characters (\, n, ')
    dhkr.content = dhkr.content.replace(/\\|n|'|,/g, "");
}

function addCounterEventListener(counter) {
    counter.addEventListener("click", function (event) {
        event.preventDefault();
        let counterElement = this.firstElementChild;
        let counterNumber = counterElement.textContent;
        if (counterNumber == 0) {
            return;
        }
        counterElement.textContent = counterNumber - 1;
    });
}

export { setAdhkarCardsSection }