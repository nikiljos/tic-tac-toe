let combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let x=true
let click=0
let res=new Array(9)
document.querySelectorAll(".box").forEach((elt,i)=>{
    elt.onclick=()=>{
        if(res[i]!==undefined){
            alert("Already clicked!")
            return
        }
        res[i] = x;
        click++
        if(x){
            elt.innerText="X"
        }
        else{
            elt.innerText = "O";
        }
        x=!x
        checkWinner()
    }
})

function checkWinner(){
    let findStatus=combinations.find((combi) => {
        if (
            res[combi[0]] === res[combi[1]] &&
            res[combi[1]] === res[combi[2]] &&
            res[combi[0]] !== undefined
        ) {
            endGame(res[combi[0]] ? "X" : "O");
            return true
        }
    });  
    if (click >= 9&&(!findStatus)) {
        endGame("draw");
    }  
}

function endGame(winner){
    console.log(winner)
    if(winner=="draw"){
        document.getElementById("winner-full").innerHTML="The match is a draw!"
    }
    else{
        document.getElementById("winner-full").innerText = `'${winner}' Won the game!`;
    }
    document.getElementById("result-overlay").classList.add("active");
}

document.getElementById("play-button").onclick=()=>{
    window.location.reload()
};

