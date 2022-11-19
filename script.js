const api_url = "https://api.covid19api.com/summary";
var coun;
function gen(){  
    getData(api_url); 
    var x = document.getElementById("mySelect").selectedIndex;   
    coun =document.getElementsByTagName("option")[x].value;
    
    document.getElementById("out").style="display:inline";
    document.getElementById("result").style="display:none";
}
function getData(url){
    fetch(url)
    .then((res) => {   
        return res.json(); 
    }).then((data) => displayData(data.Countries))
    .catch((error) => console.log(error.message));
}
function displayData(API_Data){
    var x = API_Data.length;
    for(let i=0; i<x;i++){
        if(API_Data[i].Country == coun){
            document.getElementById("p1").innerHTML= "<h4 style='display:inline; font-size: 15px;'>Country Name</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ coun;
            document.getElementById("p2").innerHTML= "<h4 style='display:inline; font-size: 15px;''>Date</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Date();
            document.getElementById("p3").innerHTML= "<h4 style='display:inline; font-size: 15px;''>Total Cases</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+API_Data[i].TotalConfirmed;
            document.getElementById("p4").innerHTML= "<h4 style='display:inline; font-size: 15px;''>Total Death</h4> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+API_Data[i].TotalDeaths;
            document.getElementById("p5").innerHTML= "<h4 style='display:inline; font-size: 15px;''>New Cases</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+API_Data[i].NewConfirmed;
            document.getElementById("p6").innerHTML= "<h4 style='display:inline; font-size: 15px;''>New Deaths</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+API_Data[i].NewDeaths;
        }
    }
}