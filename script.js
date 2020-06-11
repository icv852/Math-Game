var playing = false;
var score;
var correctanswer;
//if we click on the start/reset
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
            //timeleft?
                //yes->continue
                //no->gameover
        //change button to reset
        //generate new Q&A

var t = document.getElementById("timeremain").innerHTML;
var score = document.getElementById("score").innerHTML;
t = 60;
score = 0;
window.console.log(typeof(t));
window.console.log(t)
window.console.log(score);
window.console.log(typeof(score));

//if we click on the start/reset
document.getElementById("startbutton").onclick = function(){
    //if we are playing
    if(playing==true){
        //reload page
        location.reload();
    }
    //if we are not playing
    else{
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("score").innerHTML = score;
        //hide instruction
        document.getElementById("explain").style.visibility = 'hidden';
        //show countdown box
        document.getElementById("timebox").style.display = 'inline-block';
        document.getElementById("timeremain").innerHTML = t;
        //change button to reset
        document.getElementById("startbutton").innerHTML = "RESET";
        document.getElementById("startbutton").style.background = 'red';
        document.getElementById("startbutton").style.color = 'white';
        //reduce time by 1sec in loops
        var countdown = setInterval(function(){
            t--;
            document.getElementById("timeremain").innerHTML = t;
            //timeleft?
            //yes->continue
            //no->gameover
            if(t==0){
                clearInterval(countdown);
                document.getElementById("gameover").style.visibility = 'visible';
                document.getElementById("gameover").innerHTML = '<p>GAME OVER</p><span>Your score is: </span>'+score;
               };
        },1000);
        //generate new Q&A
        generatenewQNA();
        }
        }
       
//if we click on answer box
for(i=1;i<5;i++){
    document.getElementById("ans"+i).onclick = function(){
    if(playing==true && t>0){
        if(this.innerHTML == correctanswer){
            score++;
            document.getElementById("score").innerHTML = score;
            generatenewQNA();
            document.getElementById("correct").style.visibility = 'visible';
            var halfseccount = setInterval(function(){document.getElementById("correct").style.visibility = 'hidden'},500);
           }else{
               document.getElementById("wrong").style.visibility = 'visible';
               var halfseccount = setInterval(function(){document.getElementById("wrong").style.visibility = 'hidden'},500);
           }
       
       }
}
}


    
    //if we are playing
       //correct?
            
            //yes

               //increase score
                //show correct box for 1 sec
                //generate new Q&A

            //no
                //show try again box for 1 sec
            

function generatenewQNA(){
        document.getElementById("question").style.visibility = 'visible';
        //generate random question
        var x = Math.floor(Math.random()*11);
        var y = Math.floor(Math.random()*11);
        correctanswer = x*y;
        document.getElementById("firstnumber").innerHTML = x;
        document.getElementById("secondnumber").innerHTML = y; 
        
        //fill in one answer box with the correct answer
        var correctansid = Math.floor(Math.random()*4+1);
        document.getElementById("ans"+correctansid).innerHTML = correctanswer;  
    
        //fill other boxes with wrong answers
            var answergroup = [correctanswer];
            for(i=1;i<5;i++){
            if(i !== correctansid){
                var wronganswer;
                do{
                    wronganswer = Math.floor(Math.random()*101);
                }while(answergroup.indexOf(wronganswer)>-1);
                document.getElementById("ans"+i).innerHTML = wronganswer;
                answergroup.push(wronganswer);
                }         
            }
        }
    
        

    
        
 