//Function for checking rank
function checkrank(){
    var student = $("#student").val();
    $.ajax({
        url: ("http://localhost:8080/Food_Managment_System/api/student/all/"+student)
    }).then(function(result) {
        var insert = '';
        for(var i = 0; i < result.studentList.length ; i++) {
            var student_name = result.studentList[i].username;
            var rating = result.studentList[i].student_rating;
            insert += '<tr><td>' + student_name + '</td><td>' + rating + '</td></tr>';  
        }
        if(result.studentList.length == 0) {
            alertify.alert("Πρόβλημα","Δεν υπάρχει μαθητής με αυτό το όνομα.");
        }
        $('#uniresults tr:first').after(insert);
    });
}

//Function for submitting form
function submitform(){
    var username = $("#username").val();
    var check = $("#check").val();
    $.ajax({
        url: ("http://localhost:8080/Food_Managment_System/api/student/submitForm/"+username+"/"+check)
    }).then(function(result) {
        alertify.alert("Επιτυχία","Η καταχώρηση της αίτησης είναι επιτυχής. Για περαιτέρω πληροφορίες, επικοινωνήστε με την γραμματεία της σχολής.");
    });
}

//Function for submitting form
function updateInfo(){
    var username = $("#username").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    // console.log(username+""+phone+""+email);
    $.ajax({
        url: ("http://localhost:8080/Food_Managment_System/api/student/updateInfo/"+email+"/"+phone+"/"+username)
    }).then(function(result) {
        alertify.alert("Επιτυχία","Η καταχώρηση των στοιχείων επικοινωνίας είναι επιτυχής.");
    });
}