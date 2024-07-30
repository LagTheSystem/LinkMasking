/*
 * Masks the URL input by encoding it and updating the input field with the masked URL.
 * Also copies the masked URL to the clipboard.
*/
function mask() {
    const urlInput = document.getElementById('urlInput').value;
    const encodedUrl = btoa(urlInput);
    const maskUrl = `https://mask.lagthesystem.dev/?data=${encodedUrl}`;
    document.getElementById('urlInput').value = maskUrl;
    navigator.clipboard.writeText(maskUrl);
}
