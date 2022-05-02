// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",schedulefunc);
var schArr=JSON.parse(localStorage.getItem("schedule")) || []
function schedulefunc(){
    event.preventDefault()
        var matchObj={
            matchNo:masaiForm.matchNum.value,
            teamA:masaiForm.teamA.value,
            teamB:masaiForm.teamB.value,
            date:masaiForm.date.value,
            venue:masaiForm.venue.value,
        }
        schArr.push(matchObj)
        localStorage.setItem("schedule",JSON.stringify(schArr));
        window.location.href="matches.html"
    }
