function clickFunc(button){
        if (button.classList.contains('enabled')) {
            window.location.href = "/"
            console.log("Class 12 is available.");
        } else if (button.classList.contains('disabled')) {
                window.alert("The contents of class 1 to 10 are not available yet.");
                console.log("Class 1 to 10 are not available yet.");
            } else {
                window.alert("Please select a class to proceed.");
            }
}