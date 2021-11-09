function titleScroll() {
    var title = document.getElementById("title");
    var panel1 = document.getElementById("panel1");
    var panel2 = document.getElementById("panel2");
    var panel3 = document.getElementById("panel3");
    var panel4 = document.getElementById("panel4");

    title.style.opacity = 100;

    setTimeout(function() {
        title.style.marginTop = 0;
        title.style.transform = "scale(.75)";
    }, 1500)

    setTimeout(function() {
        panel1.style.opacity = 100;
    }, 2500)

    setTimeout(function() {
        panel2.style.opacity = 100;
    }, 2750)

    setTimeout(function() {
        panel3.style.opacity = 100;
    }, 3000)

    setTimeout(function() {
        panel4.style.opacity = 100;
    }, 3250)
}