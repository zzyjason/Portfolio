$(document).ready(function(){

    header =$("header");
    header.rgb = {
        r:"",
        g:"",
        b:"",
    };

    let color = "" + header.css("background-color");

    for(let i=0, status = 0; i<color.length; i++)
    {
        if(color[i] == "("){
            status = 1;
            continue;
        }
        if(color[i] == ",")
        {
            status++;
            continue;
        }

        switch(status)
        {
            case 1:
                header.rgb.r += color[i];
                break;

            case 2:
                header.rgb.g += color[i];
                break;

            case 3:
                header.rgb.b += color[i];
                break;

            default:
                break;
        }
    }


    $(window).scroll(HeaderOpacityOnScroll);
    HeaderOpacityOnScroll();
    $("#Continue").click(function(){
        $("html,body").animate({scrollTop: $("#About").offset().top}, 700);

    })

});

function HeaderOpacityOnScroll(){
    let scroll = document.documentElement.scrollTop;
    let opacity = scroll/200;
    if(opacity > 1)
        opacity = 1;

    let color = "rgba("+header.rgb.r+", "+header.rgb.g+", "+header.rgb.b+", "+opacity+')';

    header.css({"background-color": color});
}