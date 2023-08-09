let weightInput = document.getElementById("weight");
let heightInput = document.getElementById("height");
let unitInput = document.getElementById("unit");
let outputDiv = document.getElementById("output");

function calculateBMI() {
    let weight = weightInput.value;
    let height = heightInput.value;
    let unit = unitInput.value;
    if (unit === "lbs") {
        weight *= 2.205; 
    }

    let bmi = weight / height**2;

    let bmiCategory;
    switch (true) {
        case bmi < 16:
            bmiCategory = "Severe Thinness";
            break;
        case bmi >=16 && bmi<=17:
            bmiCategory = "Moderate Thinness";
            break;
        case bmi >=17 && bmi<=18.5:
            bmiCategory = "Mild Thinness";
            break;
        case bmi>=18.5 && bmi<=25:
            bmiCategory = "Normal";
            break;
        case bmi>=25 && bmi<=30:
            bmiCategory ="Overweight";
            break;
        case bmi>=30 && bmi<=35:
            bmiCategory ="Obese Class I";
            break;
        case bmi>=35 && bmi<=40:
            bmiCategory ="Obese Class II";
            break;
        default:
            bmiCategory = "Obese Class III";
            
    }


outputDiv.textContent = `Your BMI: ${bmi.toFixed(2)} - Category: ${bmiCategory}`;  
    
}


