function calculate() {

    let bmi;
    let result = document.getElementById("result");

    let weight = parseInt(document.getElementById('weight').value);
    document.getElementById("weight-val").textContent = weight + " kg"

    let height = document.getElementById("height").value;
    document.getElementById("height-val").textContent = height + " cm"


    bmi = (weight / Math.pow((height/100),2)).toFixed(1);
    result.textContent =bmi;

    if(bmi < 18.5) {
        category = "Underweight"
        result.style.color = "#27cce8";
    } else if(bmi <=24.5 && bmi >=18.5) {
        category = "Normal Weight"
        result.style.color = "#96cc1c"
    } else if (bmi <=30 && bmi >=25) {
        category = "Overweight"
        result.style.color = "#f7cb2a";
    } else if(bmi<=39.5 && bmi >=35) {
        category = "Severe Odesity"
        result.style.color = "#ec7c0e";
    } else if(bmi <=44.5 && bmi>=40) {
        category = "Morbid Odesity"
        result.style.color = "#e85915";
    } else if(bmi>=45) {
        category = "Super Obesity"
        result.style.color = "#c93a3e";
    }
 

    document.getElementById("category").textContent = category;
}