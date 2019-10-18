$(function () {

    $(".burger-button").on("click", function (event) {
        console.log("what a meme")
        $.ajax({
            url: "/api/burger/" + $(this).attr("data-id"),
            method: "PUT"
        }).then(function () {
            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            burgerName: $("#ca").val().trim(),
        }
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });
});