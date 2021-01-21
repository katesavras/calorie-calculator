function calculate() {
    let age = document.getElementById("age");
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let maintainWeight = document.getElementById("maintain");
    let gain = document.getElementById("gain");
    let lose = document.getElementById("lose");
    let gender = document.getElementsByName("genders");
    let activity = document.getElementsByName("activity");
    let modal = document.querySelector(".modal");
    let form = document.querySelector("form");

    let calories = 0;
    let calActivity = 0;
    let gainWeight = 0;
    let loseWeight = 0;

    calcWeight(age, height, weight);


    function calcWeight(age, height, weight) {
        for (let i = 0; i < gender.length; i++) {
            if (gender[0].checked) {
                calories = ((10 * weight.value) + (6.25 * height.value) - (5 * age.value)) - 161;
                console.log(calories);
                break
            } else {
                calories = ((10 * +weight.value) + (6.25 * height.value) - (5 * +age.value)) + 5;
                console.log(calories);
                break
            }
        }
    }
    calcActivity(calories);
    function calcActivity(calories) {
        for (let y = 0; y < activity.length; y++) {
            if (activity[0].checked) {
                calActivity = calories * 1.1;
                break;
            } else if (activity[1].checked) {
                calActivity = calories * 1.2;
                break;
            } else if (activity[2].checked) {
                calActivity = calories * 1.3;
                break;
            } else if (activity[3].checked) {
                calActivity = calories * 1.4;
                break;
            } else if (activity[4].checked) {
                calActivity = calories * 1.5;
                break;
            }
        }
    }

    if (isFinite(calActivity)) {
        form.style.display ="none"
        modal.style.display ="block";

        maintainWeight.innerHTML = calActivity.toFixed(0);
        gainWeight = calActivity * 1.05;
        loseWeight = calActivity - (calActivity * 0.2);
        gain.innerHTML = gainWeight.toFixed(0);
        lose.innerHTML = loseWeight.toFixed(0);

    }
    let btnClose = document.querySelector("#btnClose");
    btnClose.addEventListener("click", ()=>{
        form.style.display ="block"
        modal.style.display ="none";
        form.reset();
    })
}

