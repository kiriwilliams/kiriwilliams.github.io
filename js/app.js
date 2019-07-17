
$(document).ready(function() {
    //set the nav sizing on load
    responsiveSizing($(window).width());

    //set sizing when window resize
    $(window).resize(function() {
        let viewportWidth = $(window).width();
        responsiveSizing(viewportWidth);
    })

    // //close modal if clicking outisde of it
    // $(document).on('click', function (e) {
    //     if (($(e.target).closest(".project").length === 0) && ($(e.target).closest(".description").length === 0) && (descOpen===true)) {
    //         hideDesc();
    //     }

    // });

    //
    $("#menu-toggle").on("click", () => {
        toggleMenu();
    });
    // $(".project").on("click", function(){
    //     let id = $(this).attr("data-projid");
    //     showDesc(id);
    // });

    // $(".mask").on("click", function(){
    //     console.log("click");
    //     hideDesc();
    // })

    // $(".project").on("click", function(){
    //     console.log(this);
    //     let project = this;
    //     if($(project).attr("data-open")==="false"){
    //         $(project).attr({"data-open": "true"}).addClass("project-open");
    //     }
    //     else{
    //         $(project).attr({"data-open": "false"}).removeClass("project-open");
    //     }
    // });

})

showDesc = (id) => {
    let desc = $(".description[data-descid="+id+"]")[0];
    $(desc).removeClass("hidden");
    $(".mask").removeClass("hidden");
    descOpen = true;
}

hideDesc = () => {
    console.log("running");
    $(".description").addClass("hidden");
    $(".mask").addClass("hidden");
}

toggleMenu = () => {
    if(menuState === "closed"){
        $("#menu-toggle").attr({"aria-label":"Close menu"}).text("close menu");
        $("#menu").removeClass("hidden");
        menuState = "open";
    }
    else{
        $("#menu-toggle").attr("aria-label","Open menu").text("open menu");
        $("#menu").addClass("hidden");
        menuState = "closed";
    }
}

responsiveSizing = (width) => {
    if (width <= 640) {
        $("#menu-toggle").attr("aria-label","Open menu").text("open menu").show();
        $("#menu").attr("style", "display: none");
    }
    else{
        $("#menu-toggle").hide();
        $("#menu").attr("style", "display: block");
    }
}