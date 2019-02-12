const key = document.getElementById
    ("inpKey");
const value = document.getElementById
    ("inpValue");
const btn = document.getElementById
    ("insertData");
const output = document.getElementById
    ("output");

btn.onclick = function () {
    const key1 = key.value;
    const val1 = value.value;

    console.log(key1);
    console.log(val1);

    if (key1 && val1) {
        localStorage.setItem(key1, val1);
        location.reload();
    }
}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += key + ':' + value + '<br/>';
}
