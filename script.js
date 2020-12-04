
// let form = document.forms[0];
// let gender = form.elements.genders;
// gender.onchange = calc();
// function calc(){
//     alert(gender.value)
// }
// console.log(gender.value)
let age = document.getElementById("age")
let height = document.getElementById("height")
let weight = document.getElementById("weight")
let counts = document.getElementById("counts")
// women
// counts.onclick = calcWoman;
//     function calcWoman(){
//     let sum = 0;
//    sum =((10 * weight.value) + (6.25 * height.value) - (5 * age.value)) - 161;
//    console.log(sum);
// }
// men
counts.onclick = calcMan;
    function calcMan(){
    let sum = 0;
    sum =((10 * +weight.value) + (6.25 * height.value) - (5 * +age.value)) + 5;
    console.log(sum);
}