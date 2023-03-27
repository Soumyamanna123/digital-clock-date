let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let ampm=document.getElementById("ampm");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");
const updateTime=()=>{
    let a=new Date;
    let h=a.getHours();
    if(h>=12){
        ampm.innerHTML="<p>"+  "  "+" PM" +"</p>"
    }
    else{
        ampm.innerHTML="<p>"+  "  "+" AM" +"</p>"
    }

    if(h>12){
        h=h-12
    }
    if(h<=9){
        hour.innerHTML="<p>"+"0"+h+"</p>"
    }
    else{
    hour.innerHTML="<p>"+h+"</p>"
    }
    let m= a.getMinutes();
    if(m<=9){
        minute.innerHTML="<p>"+"0"+m+"</p>"
    }
    else{
        minute.innerHTML="<p>"+m+"</p>"
    }
    // console.log(s);
    

    let s= a.getSeconds();
    if(s<=9){
        second.innerHTML="<p>"+"0"+s+"</p>"
    }
    else{
        second.innerHTML="<p>"+s+"</p>"
    }
    
    // console.log(s);

}
updateTime();
setInterval(()=>{updateTime()},1000)

const updateDate=()=>{
    let x= new Date;
    let d= x.getDate();
    if(d<=9){
        day.innerHTML="<p>"+"0"+d+"</p>"
        }
        else{
        day.innerHTML="<p>"+d+"</p>"
        }
    let m=x.getMonth();
    if(m<=11){
        m=m+1;
    }
    if(m<=9){
        month.innerHTML="<p>"+"0"+m+"</p>"
        }
        else{
        month.innerHTML="<p>"+m+"</p>"
        } 
        
    let y=x.getFullYear();
    year.innerHTML="<p>"+y+"</p>"
    
}
updateDate();
setInterval(()=>{updateDate()},1000)