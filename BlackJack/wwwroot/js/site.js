﻿$(document).ready(function () {
    // Email Display
    let a = ["Amin", "Hotmail", "_", "Amani", ".com", "mailto:", "@"];
    $(".email-txt").text(a[0] + a[2] + a[3] + a[6] + a[1] + a[4]);

    // Focus on the input field when on the place bet page
    if (window.location.pathname.toLowerCase().endsWith("placebet")) {
        $("#bet").focus();
    }
})