var back = document.querySelector("#container");
var btn = document.querySelector("#btns");
btn.addEventListener("click",chgColor);
var count=0;

function chgColor(){
    
    count +=1;

    if(count==1){
        back.style.background = "red";
    }
    else if(count==2){
        back.style.background = "yellow";
    }
    else if(count==3){
        back.style.background = "green";
    }
    else if(count==4){
        back.style.background = "blue";
    }
    else{
        count = 1;
    }
}




