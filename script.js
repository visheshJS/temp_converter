const temp =document.getElementById("temp");
const tofarenheit=document.getElementById("tofarenheit");
const tocelsius=document.getElementById("tocelcius");
const hot=document.getElementById("hot");
const cold=document.getElementById("cold");
const normal=document.getElementById("normal");

let T;
function convert(){
    hot.style.display='none';
    cold.style.display='none';
    normal.style.display='none';
    if(temp.value=="" || isNaN(temp.value)){
        window.alert("please enter a temperature value first")

    }
    else if(!tocelsius.checked && !tofarenheit.checked){
        window.alert("please select a conversion system first")

    }
    else{
        if(tocelsius.checked){
            T=(temp.value);
            ANSWER=(T-32)*(5/9);
            document.getElementById(Cgif(ANSWER)).style.display='block';
            document.getElementById("ANSWER").textContent=ANSWER.toFixed(2)+'°C';
        }
        if(tofarenheit.checked){
            T=(temp.value);
            ANSWER=(T*(9/5))+32;
            document.getElementById(Fgif(ANSWER)).style.display='block';
            document.getElementById("ANSWER").textContent=ANSWER.toFixed(2)+'°F';
        }
    }


}
function Cgif(t){
    if(t>=40){
        return "hot";}
    if(t<=20){
        return "cold";}
    else{
        return "normal";
    }
}

function Fgif(t){
    if(t>=104){
        return "hot";}
    if(t<=68){
        return "cold";}
    else{
        return "normal";
    }
}



    
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convert);



