// write js code here corresponding to matches.html

var favo=JSON.parse(localStorage.getItem("favourites")) || []
var matchArr=JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr)
function displayData(data){ 
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem){
        // console.log(elem)
        var tr=document.createElement('tr');
        var td1=document.createElement("td");
        td1.innnerText=elem.matchNo;
        // console.log(td1)
        var td2=document.createElement("td");
        td2.innnerText=elem.teamA;
        // console.log(td2)
        var td3=document.createElement("td");
        td3.innnerText=elem.teamB;
        var td4=document.createElement("td");
        td4.innnerText=elem.date;
        var td5=document.createElement("td");
        td5.innnerText=elem.venue;
        var td6=document.createElement("td");
        td6.innnerText="Add to Favourite";
        td6.addEventListener("click",function(){
            addtofav(elem);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
function addtofav(elem){
    matchArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(matchArr))
}
var filterr=document.querySelector("#filterVenue");
filterr.addEventListener("change",function(){
    if(filterr.value="none"){
        displayData(matchArr);
    }
    else{
        var filtereddata=matchArr.filter(function(elem){
            return elem.venue ==filterr.value
        })
        displayData(filtereddata)
    }
})
// function filterr(){
//         var selected=document.querySelector("filterVenue").value;
//         var filtereddata=matchArr.filter(function(elem){
//             return elem.venue==selected;
//         })
//         displayData(filtereddata);
// }