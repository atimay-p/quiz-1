$("#quiz").hide()
$("#end").hide()

$( "#start" ).click(function() {
    $("#starter").hide()
    
    $("#quiz").fadeIn("slow")
       
});  



function score1(choice){
    if(choice=='choice1_1'){
        color=$("#choice1_1").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice1_1").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice1_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice1_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice1_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice1_2'){
        color=$("#choice1_2").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice1_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice1_2").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice1_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice1_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice1_3'){
        color=$("#choice1_3").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice1_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice1_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice1_3").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice1_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
}

function score2(choice){
    if(choice=='choice2_1'){
        color=$("#choice2_1").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice2_1").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice2_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice2_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice2_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice2_2'){
        color=$("#choice2_2").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice2_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice2_2").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice2_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice2_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice2_3'){
        color=$("#choice3_3").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice2_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice2_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice2_3").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice2_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
}

function score3(choice){
    if(choice=='choice3_1'){
        color=$("#choice3_1").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice3_1").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice3_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice3_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice3_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice3_2'){
        color=$("#choice3_2").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice3_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice3_2").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
            $("#choice3_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice3_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
    if(choice=='choice3_3'){
        color=$("#choice3_3").css('border-top-color')
        if(color=="rgb(255, 255, 255)"){
            $("#choice3_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice3_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
            $("#choice3_3").css("border-color", "rgb(197, 140, 230)").css("border-style","solid").css("border-width", "5px");
        }else{
            $("#choice3_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
        }
    }
}

$( "#submit" ).click(function() {
    var point=0
    color1=$("#choice1_3").css('border-top-color')
    color2=$("#choice2_1").css('border-top-color')
    color3=$("#choice3_2").css('border-top-color')
    if(color1=='rgb(197, 140, 230)'){
        point+=1
    }
    if(color2=='rgb(197, 140, 230)'){
        point+=1
    }
    if(color3=='rgb(197, 140, 230)'){
        point+=1
    }
    $("#quiz").hide()
    $("#end").fadeIn(2000)

    $("#result").text('ตะแนนของคุณคือ '+point+' / 3')
});  

$( "#tryagain" ).click(function() {
    $("#end").hide()
    $("#starter").fadeIn()

    
    $("#choice1_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice1_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice1_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    
    $("#choice2_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice2_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice2_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    
    $("#choice3_1").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice3_2").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
    $("#choice3_3").css("border-color", "white").css("border-style","solid").css("border-width", "5px");
});  