
// Fungsi Menghitung BMI dan Display Hasil
function getBmi() {
    document.getElementById("redirect-bmi").style.display = "none"
    document.getElementById("result-section-group").style.display = "block"

    const gender =document.getElementById("getGender").value;
    const age = document.getElementById("getAge").value;
    const weight = document.getElementById("getWeight").value;
    const height = (document.getElementById("getHeight").value)/100;

    let bmi = weight/(height^2);
    let category;

    console.log(bmi);
    document.getElementById("result").innerHTML = bmi.toFixed(1);

    if(bmi >= 30.0){
        category = "Kegemukan (obesitas)";
    }else if(bmi >= 25.0){
        category = "Kelebihan Berat Badan";
    }else if(bmi >= 18.5){
        category = "Normal Ideal";
    }else{
        category= "Kekurangan Berat Badan";
    }

    document.getElementById("category").innerHTML = category;
    document.getElementById("category-detail").innerHTML = (`Anda ${category}`);
}


//Animasi Highlight Pada Form
function highlight() {

    const getHighlight = document.getElementById("form-wrapper");
    getHighlight.style.backgroundColor = "lightgray"
    getHighlight.style.transition = "1s"
    
    setTimeout(() => {
        getHighlight.style.backgroundColor = "#53AD8A"; 
    }, 1000);
}

