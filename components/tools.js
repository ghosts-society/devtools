async function copy() {
    var copyText = document.getElementById("lorem-ipsum");
    if (copyText.value.length > "0") {
        copyText.select();
        copyText.setSelectionRange(0, 999999);
        navigator.clipboard.writeText(copyText.value);
        document.getElementById('copy-button').style.width = "89px";
        document.getElementById('copy-text').style.display = "block";
        setTimeout(clearCopy, 1250);
    }
}

function clearCopy(){
    document.getElementById('copy-text').style.display = "none";
    document.getElementById('copy-button').style.width = "33.6px";
}