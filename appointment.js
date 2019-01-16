function validateForm()
    {
    var first_name = document.getElementById("first_name_text").value;
    var last_name = document.getElementById("last_name_text").value;
    var age = document.getElementById("age_text").value;
    var phone_number = document.getElementById("phone_number_text").value;
    var email = document.getElementById("email_text").value;
    var address = document.getElementById("address_text").value;
    var description = document.getElementById("description_text").value;
    var date = document.getElementById("date_text").value;
    var time = document.getElementById("time_text").value;
        
        if (first_name=="" || last_name=="" || age=="" || phone_number=="" || email=="" || address=="" || description=="" || date=="" || time=="")
        {
            alert("Please Fill All Required Fields");
            //return false;
        }
        else {
            document.getElementById("publish_link").href = "confirm_appointment.html";
        }
}


