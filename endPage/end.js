var levelText = document.getElementById("finalScore").innerHTML;
var level = 3;
window.onload = function() {
    try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        level = url.searchParams.get("finalscore");
        console.log(level, levelText);
    }catch(err) {
        console.log("Issues - " + err);
    }
}
levelText == level;
