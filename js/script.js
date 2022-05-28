
//----------- index html
$(document).ready(function(){
    
    //Portfolio buttons change background color
    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var CssFilter = $(this).data('role');

                $('.Content > div').hide();
                $('.Content').contents().filter('#' + CssFilter).fadeIn();
    });
});

//------------- Page 2 html
function changeText(text)
{
    var txts=document.querySelectorAll('.txttonight');
    for(let i=0; i<= txts.length-1;i++)
    {
        txts[i].innerHTML=text;
    }
}