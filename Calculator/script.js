let x="";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='Ans'){
   
            x=eval(x);
            document.querySelector('input').value = x;
        }
        else if(e.target.innerHTML=='AC'){
            x="";
            document.querySelector('input').value=x;
        }
        else if(e.target.innerHTML=='←'){
            x=x.toString().slice(0,-1);
            document.querySelector('input').value=x;
        }
        else{
            console.log(e.target)
            x=x+e.target.innerHTML;
            document.querySelector('input').value=x;
        }
    })
})
window.onerror = function(e){
    document.querySelector('input').value = 'Syntax Error';
  }