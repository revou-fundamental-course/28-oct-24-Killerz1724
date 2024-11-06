
function checkValidity(params){
    if(params == ""){
        return false;
    } else {
        return true;
    }
}

// BMI and Display Result Function
function getBmi() {

    //Get the Value from Form
    const gender =document.getElementById("get-gender").value;
    const age = document.getElementById("get-age").value;
    const weight = document.getElementById("get-weight").value;
    //Divide 100 to turn in to m
    const height = (document.getElementById("get-height").value)/100;

    // check for input
    if(checkValidity(gender) && checkValidity(age) && checkValidity(weight) && checkValidity(height)){

            // Prevent Page Reload
        event.preventDefault();

        //Display Result Section on HTML
        document.getElementById("redirect-bmi").style.display = "none";
        const resultSection = document.getElementById("result-section-group");
        resultSection.style.display = "block";
        resultSection.scrollIntoView({behavior: "smooth"});

        //Calculate BMI User
        let bmi = weight/(height**2);
        let category;
        let category_color;
        let category_title;
        let category_explanation;
        let category_solution;
        let category_disease = [];

        
        //Display the Result and round it to one decimal number
        document.getElementById("result").innerHTML = bmi.toFixed(1);

        //BMI Clasification
        if(bmi >= 30.0){
            category = "Kegemukan (obesitas)";
            category_color = "#F3947E";
            category_title = "diatas 30.0";
            category_explanation = "Obesitas di mana seseorang memiliki BMI 30 atau lebih. Ini adalah kategori dengan risiko tinggi terhadap banyak masalah kesehatan."
            category_solution = "Mengubah pola makan untuk fokus pada makanan utuh dan rendah kalori, Meningkatkan aktivitas fisik, serta konsultasi dengan ahli gizi dan dokter"
            category_disease = ["Diabetes tipe 2", "Penyakit jantung dan stroke", "Hipertensi", "Gangguan pernapasan", "Osteoarthritis"];

        }else if(bmi >= 25.0){
            category = "Kelebihan Berat Badan";
            category_color = "#F5C139";
            category_title = "di antara 24.9 dan 30.0"
            category_explanation = "BMI antara 25 dan 29.9 yang dianggap kelebihan berat badan, yang dapat meningkatkan risiko berbagai penyakit."
            category_solution = "Mengadopsi pola makan sehat dengan mengurangi asupan kalori, terutama dari makanan tinggi lemak dan gula dan Meningkatkan aktivitas fisik"
            category_disease = ["Diabetes tipe 2", "Penyakit jantung", "Hipertensi", "Sleep apnea"]

        }else if(bmi >= 18.5){
            category = "Normal Ideal";
            category_color = "#53AD8A";
            category_title = "di antara 18.4 dan 25.0"
            category_explanation = "Kategori yang menunjukkan bahwa berat badan seseorang berada dalam rentang yang sehat. Orang dengan BMI ini biasanya memiliki risiko rendah terhadap banyak penyakit"
            category_solution = "Mempertahankan pola makan seimbang yang kaya akan buah, sayur, biji-bijian, dan protein serta Melakukan aktivitas fisik secara teratur"
            category_disease = ["Umumnya, risiko penyakit rendah, tetapi tetap bisa terkena penyakit terkait gaya hidup seperti penyakit jantung dan diabetes"]
        }else{
            category= "Kekurangan Berat Badan";
            category_color = "#56BADC";
            category_title = "dibawah 18.5"
            category_explanation = "dengan BMI kurang dari 18.5 dianggap mengalami kekurangan berat badan. Ini dapat disebabkan oleh beberapa faktor, termasuk diet yang buruk, masalah kesehatan, atau gangguan makan."
            category_solution = "Makan makanan bergizi dengan kalori yang cukup, Mengonsumsi suplemen nutrisi jika diperlukan, dan Memeriksakan diri secara rutin"
            category_disease = ["Malnutrisi", "Osteoporosis", "Anemia", "Gangguan sistem imun"];

        }

        //=Display the BMI-Class to HTML=
        //Head Result
        document.getElementById("category").innerHTML = category;
        document.getElementById("category-detail").innerHTML = (`Anda ${category}`);
        document.getElementById("result-group-box").style.backgroundColor = category_color;

        //Result Explanation Section
        document.getElementById("category-title").innerHTML = category_title;
        document.getElementById("category-explanation").innerHTML = category_explanation;
        document.getElementById("category-solution").innerHTML = category_solution;

        //Add list of Disease Section on list html
        const disease_list = document.getElementById("category-disease");
        

        category_disease.forEach(element => {

            const newListItem = document.createElement('li');
            // Mengisi teks pada <li> baru
            newListItem.textContent = element;

            // Menambahkan <li> baru ke dalam <ul>
            disease_list.appendChild(newListItem);
        });

    } else {

        alert("Please Fill All The Forms");
           // Prevent Page Reload
           event.preventDefault();
    }
    
}

function resetForm() {
    document.getElementById("redirect-bmi").style.display = "flex";
    const resultSection = document.getElementById("result-section-group");
    resultSection.style.display = "none";
    disease_list.innerHTML = '';
}


//Highlight animation to Form
function highlight() {
    const formView = document.getElementById("introduction");
    const getHighlight = document.getElementById("form-wrapper");
    getHighlight.style.backgroundColor = "lightgray";
    getHighlight.style.transition = "1s";
    formView.scrollIntoView({behavior: "smooth"});
    
    //Changing back to Default Color
    setTimeout(() => {
        getHighlight.style.backgroundColor = "#53AD8A"; 
    }, 1000);
}

