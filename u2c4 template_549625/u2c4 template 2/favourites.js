// write js code here corresponding to favourites.html
var favoArr=JSON.parse(localStorage.getItem("favourites"));
displayData(favoArr)
function displayData(data){
    data.forEach(function(elem,index){
        // console.log(elem,index)
        var tr=document.createElement('tr');
        var td1=document.createElement("td");
        td1.innnerText=elem.matchNo;
        var td2=document.createElement("td");
        td2.innnerText=elem.teamA;
        var td3=document.createElement("td");
        td3.innnerText=elem.teamB;
        var td4=document.createElement("td");
        td4.innnerText=elem.date;
        var td5=document.createElement("td");
        td5.innnerText=elem.venue;
        var td6=document.createElement("td");
        td6.innnerText="Delete";
        td6.setAttribute("class","deletetxt");
        td6.addEventListener("click",function(){
            deleteItem(elem,index);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr);
    })
}
function deleteItem(elem,index){
    favoArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(favoArr));
    window.location.reload();
}

        