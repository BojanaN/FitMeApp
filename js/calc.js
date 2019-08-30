var age, gender, height, weight, activity, resault;


document.querySelector('.btnCLC').addEventListener('click', function(){
  BMR();
})

function BMR(){
  age = document.querySelector('.ageCLC').value;

  var gender =  document.querySelector('.genderCLC').value;
  // gender = g.options[g.selectedIndex].value;

  height = document.querySelector('.heightCLC').value;
  weight = document.querySelector('.weightCLC').value;

  var activity  = document.querySelector('.activityCLC').value;
  // activity = a.option[a.selectedIndex].value;

  var your_daily_msg = "Your daily calories for maintaing weight is ";

  switch(activity){
    case "Basal":
    gender === 'male' ? resault = calcMale(): resault = calcFemale() ; 
    document.querySelector('#calc-result').textContent = (" Your Basal Metabolic Rate is " + resault + " calories");
    break;

    case "Sedentary":
    gender === 'male' ? resault = Math.round((calcMale() * 1.2)) : resault = Math.round((calcFemale() * 1.2)); 
    document.querySelector('#calc-result').textContent = your_daily_msg + resault;
    break;

    case "Light":
    gender === 'male' ? resault = Math.round((calcMale() * 1.375)) : resault = Math.round((calcFemale() * 1.375)); 
    document.querySelector('#calc-result').textContent = your_daily_msg + resault;
    break;

    case "Moderate":
    gender === 'male' ? resault = Math.round((calcMale() * 1.55)) : resault = Math.round((calcFemale() * 1.55)); 
    document.querySelector('#calc-result').textContent = your_daily_msg + resault;
    break;

    case "Active":
    gender === 'male' ? resault = Math.round((calcMale() * 1.725)) : resault = Math.round((calcFemale() * 1.725)); 
    document.querySelector('#calc-result').textContent = your_daily_msg + resault;
    break;

    case "Very Active":
    gender === 'male' ? resault = Math.round((calcMale() * 1.9)) : resault = Math.round((calcFemale() * 1.9));
    document.querySelector('#calc-result').textContent = your_daily_msg + resault;
    break;
  }
}


function calcMale(){
   return (10 * weight)+(6.25 * height)-(5 * age)+5;
}

function calcFemale(){
  return (10 * weight)+(6.25 * height)-(5 * age)-161;
}

//BMI Calculator

function computeBMI() {
  // user inputs
  var height = Number(document.getElementById("height").value);
  var heightunits = document.getElementById("heightunits").value;
  var weight = Number(document.getElementById("weight").value);
  var weightunits = document.getElementById("weightunits").value;


  //Convert all units to metric
  if (heightunits == "inches") height /= 39.3700787;
  if (weightunits == "lb") weight /= 2.20462;

  //Perform calculation

  //        var BMI = weight /Math.pow(height, 2)*10000;
  var BMI = Math.round(weight / Math.pow(height, 2) * 10000);

  //Display result of calculation
  document.getElementById("output").innerText = Math.round(BMI * 100) / 100;

  var output = Math.round(BMI * 100) / 100
  if (output < 18.5)
      document.getElementById("comment").innerText = "Underweight";
  else if (output >= 18.5 && output <= 25)
      document.getElementById("comment").innerText = "Normal";
  else if (output >= 25 && output <= 30)
      document.getElementById("comment").innerText = "Obese";
  else if (output > 30)
      document.getElementById("comment").innerText = "Overweight";
  // document.getElementById("answer").value = output; 
}