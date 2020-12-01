$(function () {
    $("form").submit(submitGrade);

    var objectStore = [];

    function submitGrade(event) {
        event.preventDefault();

        var grades = {
            fName: "",
            lName: "",
            earned: 0,
            possible: 0
        }

        grades.fName = $("#fName").val();
        grades.lName = $("#lName").val();
        grades.earned = $("#earned").val();
        grades.possible = $("#possible").val();

        var percentage = grades.earned/grades.possible;

        console.log("First Name: " + grades.fName);
        console.log("Last Name: " + grades.lName);
        console.log("Grade Percentage: " + 100*percentage + "%");
        if(percentage>=.9) {
            console.log("Grade Earned: A")
        }
        else if (percentage>=.8){
            console.log("Grade Earned: B")
        }
        else if (percentage>=.7){
            console.log("Grade Earned: C")
        }
        else if (percentage>=.6){
            console.log("Grade Earned: D")
        }
        else {
            console.log("Grade Earned: F")
        }
    }
})