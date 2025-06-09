document.getElementById("proteinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const bodyWeight = parseFloat(document.getElementById("bodyWeight").value);
    const goalWeight = parseFloat(document.getElementById("goalWeight").value);
    const physiqueGoal = document.getElementById("physiqueGoal").value;
    const activityLevel = document.getElementById("activityLevel").value;

    if (isNaN(bodyWeight) || isNaN(goalWeight) || bodyWeight <= 0 || goalWeight <= 0) {
        alert("Please enter valid, positive body weight and goal weight values.");
        return;
    }

    const physiqueGoalMap = {
        "Muscle Gain": 1.0,
        "Fat Loss": 0.85,
        "Maintenance": 0.9
    };

    let proteinPerLb = physiqueGoalMap[physiqueGoal] || 1.0;

    const activityLevelChoices = {
        "Not Active": 1,
        "Lightly Active": 1.05,
        "Very Active": 1.1
    };

    proteinPerLb *= activityLevelChoices[activityLevel] || 1;

    const suggestedProteinIntake = bodyWeight * proteinPerLb;

    document.getElementById("proteinResult").textContent = `${suggestedProteinIntake.toFixed(2)} grams of protein per day`;
});

function showImage() {
    const goal = document.getElementById("physiqueGoal").value;
    const image = document.getElementById("goalImage");

    const imageMap = {
        "Muscle Gain": "/static/images/muscle_gain.jpg",
        "Fat Loss": "/static/images/fat_loss.jpg",
        "Maintenance": "/static/images/maintenance.jpg"
    };

    if (goal && imageMap[goal]) {
        image.src = imageMap[goal];
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}
