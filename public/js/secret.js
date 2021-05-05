let click = 0;

$("#over").click((event) => {
    
    click++;
    $("#count").html(click);

    if (click == 10) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}); 