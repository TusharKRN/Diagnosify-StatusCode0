const allSymptoms = ['Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Fever', 'Cough', 'Headache', 'Fatigue', 'Muscle pain', 'Sore throat', 'Loss of taste or smell'];

const selectedSymptoms = [];

function displaySymptoms() {
    const symptomsContainer = document.querySelector('.symptoms');
    const searchBar = document.getElementById('searchBar');
    symptomsContainer.innerHTML = '';

    const searchTerm = searchBar.value.toLowerCase();

    allSymptoms.forEach((symptom) => {
        if (symptom.toLowerCase().includes(searchTerm)) {
            const symptomElement = document.createElement('div');
            symptomElement.textContent = symptom;
            symptomElement.classList.add('symptom');
            symptomElement.addEventListener('click', () => toggleSymptom(symptom));
            symptomsContainer.appendChild(symptomElement);
        }
    });
}

function toggleSymptom(symptom) {
    const index = selectedSymptoms.indexOf(symptom);
    if (index === -1) {
        selectedSymptoms.push(symptom);
    } else {
        selectedSymptoms.splice(index, 1);
    }
    displaySelectedSymptoms();
}

function displaySelectedSymptoms() {
    const selectedSymptomsContainer = document.querySelector('.selected-symptoms');
    selectedSymptomsContainer.innerHTML = '';

    selectedSymptoms.forEach((symptom) => {
        const selectedSymptomElement = document.createElement('div');
        selectedSymptomElement.textContent = '✖ ' + symptom;
        selectedSymptomElement.classList.add('symptom', 'selected-symptom');
        selectedSymptomElement.addEventListener('click', () => toggleSymptom(symptom));
        selectedSymptomsContainer.appendChild(selectedSymptomElement);
    });
}

document.getElementById('searchBar').addEventListener('input', displaySymptoms);
displaySymptoms();