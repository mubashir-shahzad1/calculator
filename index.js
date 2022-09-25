let answer="";
let buttons=document.querySelectorAll(".btn");

Array.from(buttons).forEach((button)=>{
button.onclick=(e)=>{
    let value=e.target.innerHTML;
// console.log(value)
if(value == '='){
answer=eval(answer);
document.querySelector('input').value=answer;
answer=""
} 
else if(value == 'c'){
answer="";
document.querySelector('input').value=answer;
} else if(value == '$'){
    let string=answer.toString();
    document.querySelector('input').value=string.substr(0, string.length - 1);
    answer=document.querySelector('input').value;
    } 
    else if(value == '%'){
        answer=(answer/100)*100;
        document.querySelector('input').value=answer;
        } 
else{
    answer=answer + value;
document.querySelector('input').value=answer;
}
}

})