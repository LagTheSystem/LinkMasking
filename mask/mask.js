/*
 * Masks the URL input by encoding it and updating the input field with the masked URL.
 * Also copies the masked URL to the clipboard.
*/
import { injectCSS, createNotif } from "https://raw.githack.com/LagTheSystem/EasyNotifs/main/easynotifs.js";

injectCSS();

document.getElementById("start").addEventListener("click", mask);
document.getElementById("reset").addEventListener("click", reset);
console.log("Setup event listeners");

function mask() {
    const urlInput = document.getElementById('urlInput');
    const encodedUrl = btoa(urlInput.value);
    const maskUrl = `https://mask.lagthesystem.dev/?data=${encodedUrl}`;
    const start = document.getElementById('start');
    const reset = document.getElementById('reset');
    if (isValid(urlInput.value)) {
        start.classList.remove("activeBtn");
        reset.classList.add("activeBtn");
        urlInput.style.border = "1px solid #66ff3c";
        urlInput.value = maskUrl;
        navigator.clipboard.writeText(maskUrl);
        createNotif("Success!", "Masked URL copied to clipboard", "hsl(204, 14%, 20%)", "hsl(125, 100%, 80%)", "#ffffff");
    } else {
        urlInput.style.border = "1px solid #d94130"
        createNotif("Error", "Please insert a valid link", "hsl(204, 14%, 20%)", "#d94130", "#ffffff");
    }
}

function isValid(url) {
    const regex = /^https?:\/\/\w*?\.?\w*\.\w*$/gm;
    console.log(url);
    return regex.test(url);
}

function reset() {
    const urlInput = document.getElementById('urlInput');
    const start = document.getElementById('start');
    const reset = document.getElementById('reset');
    urlInput.value = "";
    urlInput.style.border = "none";
    start.classList.add("activeBtn");
    reset.classList.remove("activeBtn");
}

