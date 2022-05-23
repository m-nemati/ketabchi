$(document).ready(function(){

    /* Show or hide to top button */
    $(document).scroll(function(){

    var s = $("html").scrollTop();
    
        if (s > 150) {
            $("#to_top").css("visibility","visible")
        }
        else{
            $("#to_top").css("visibility","hidden")
        }

    })

    /* Go to top */
    $("#to_top").click(function(){
        $("html").animate({scrollTop : 0}, 100)
    })

})



