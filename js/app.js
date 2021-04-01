function rickRoll() {
    document.getElementById(`rickRoll`).innerText(`told ya`);
}

let rickRoll = document.getElementById(`rickRoll`);
rickRoll.addEventListener("mouseover", rickRoll());