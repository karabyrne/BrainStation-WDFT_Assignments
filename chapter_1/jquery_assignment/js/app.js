//Write your jQuery code in this file

$("#edit-header").html("The jQuery Challenge");

$("#box1").css("background-color" , "green");

$("#para1").css({"font-size": "1.5em" , "font-weight": "600"});

$(".box2").addClass("spin");

$("#button1").click(function(){
    alert("You clicked the button!");
})

$( "#box3" ).hover( function(){
        //mouseenter
        $( "#box3" ).css("background-color" , "green");
    }, function(){
        //mouseout
        $( "#box3" ).css("background-color" , "red");
    }
)

$('#input1').on("keyup", function(){
    console.log($('#input1').val());
})

$( ".box4" ).animate({ "left": "+=398px" , "top": "+=148px" }, 2000 );


