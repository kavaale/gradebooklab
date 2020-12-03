$(function () {
    $("form").submit(submitGrade);
    $("#sortPer").click(sortGrade);
    $("#sortName").click(sortName);

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

        objectStore.push(grades);
        displayArray();

        /*var percentage = grades.earned/grades.possible;

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
        }*/
    }

    function sortGrade(event){
        event.preventDefault();
        objectStore.sort(sortByGrade);
        displayArray()
    }

    function sortName(event){
        event.preventDefault();
        objectStore.sort(sortByName);
        displayArray();
    }

    function sortByGrade(x, y){
        var xPerc = x.earned/x.possible;
        var yPerc = y.earned/y.possible;
        if(xPerc<yPerc){
            return -1;
        }
        else if(xPerc>yPerc){
            return 1;
        }
        else{
            return 0;
        }
    }
    function sortByName(x, y){
        if(x.fName<y.fName){
            return -1;
        }
        else if(x.fName>y.fName){
            return 1;
        }
        else{
            return 0;
        }
    }

    function displayArray(){
        $("#outputText").empty();
        var i = 0;
        while (i < objectStore.length){
            $("#outputText").append("<p>Name: " + objectStore[i].fName + " " + objectStore[i].lName + "</p>" +
                "<p>Grade: " + objectStore[i].earned/objectStore[i].possible*100 + "%</p><br>");
            i++;
        }
    }

})