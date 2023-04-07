window.onload = () => {
    displayHobbie();
};

let arr = [];

function displayHobbie() {
    let hobbieWrapper = document.querySelector(".hobbiesWrapper");
    let li = ``;
    for (let i = 0; i < arr.length; i++) {
        li += `
            <li>${arr[i]}</li>
        `;
    }
    hobbieWrapper.innerHTML = li;
}

let hobbie = document.querySelector("#hobbie");
hobbie.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        arr.push(e.target.value);
        displayHobbie();
        hobbie.value = "";
    }
});

let btnSwitch = document.querySelector("#btnSwitch");

btnSwitch.addEventListener("click", function () {
    let val1 = parseInt(document.querySelector(".val1").value);
    let val2 = parseInt(document.querySelector(".val2").value);

    let fix1 = val1 - 1;
    let fix2 = val2 - 1;

    if (val1 < 0 || fix2 < 0) {
        alert("angka minimal 1");
        return;
    } else if (val1 > arr.length || val2 > arr.length) {
        alert("hobbie anda tidak sebanyak itu");
        return;
    }

    [arr[fix1], arr[fix2]] = [arr[fix2], arr[fix1]];
    displayHobbie();
});
