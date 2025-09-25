
let msg=document.getElementById('msg');
let you=document.getElementById('you');
let comp=document.getElementById('comp');

const choices=document.querySelectorAll(".choice");
let userScore=0;
let compScore=0;

const getCompchoice=()=>{
const options=['rock','paper','scissors'];
let option=Math.floor(Math.random()*3);
return options[option];
}

const drawGame=()=>{
msg.innerText='It\'s a Draw! Play again';
msg.style.backgroundColor="#333";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        you.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
let compChoice=getCompchoice();
if(userChoice===compChoice){
    drawGame();
}else{
let userWin=true;
if(userChoice==='rock'){
userWin=(compChoice==="paper")?false:true;
}else if(userChoice==='paper'){
    userWin=(compChoice==="scissors")?false:true;
}else{
    userWin=(compChoice==="rock")?false:true;
}
showWinner(userWin,userChoice,compChoice);
}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

