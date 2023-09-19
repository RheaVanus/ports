function showResult(){
    let gender,body,wrist,waist,hip,forearm,demo;

    //ask the user if they are male or female
    gender = prompt("Are you male or female");
    body = parseFloat(document.getElementById('weight').value);
    wrist = parseFloat(document.getElementById('wrist').value);
    waist = parseFloat(document.getElementById('waist').value);
    hip = parseFloat(document.getElementById('hip').value);
    forearm = parseFloat(document.getElementById('forearm').value);
    
    a1 = (body * 0.732) + 8.987;
    a2 = wrist / 3.140;
    a3 = waist * 0.157;
    a4 = hip * 0.249;
    a5 = forearm * 0.434;
    b = a1 + a2 - a3 - a4 + a5;
    bodyFat = body - b;
    bodyFatPercent = (bodyFat * 100) / body;

    //calculate body fat percentage based on the gender
    if(gender === "female"){
    a1 = (body * 0.732) + 8.987;
    a2 = wrist / 3.140;
    a3 = waist * 0.157;
    a4 = hip * 0.249;
    a5 = forearm * 0.434;
    b = a1 + a2 - a3 - a4 + a5;
    bodyFat = body - b;
    bodyFatPercent = (bodyFat * 100) / body;
    alert("Your body fat percentage is " + bodyFatPercent + "%");
    alert("Thank you for cooperating.");
    
  } else if(gender === "male"){
    a1 = (body * 1.082) + 94.42;
    a2 = wrist * 4.15;
    b = a1 - a2;
    bodyFat = body - b;
    bodyFatPercent = (bodyFat * 100) / body;
    alert("Your body fat percentage is " + bodyFatPercent + "%");
    alert("Thank you for cooperating.");
  } 
}