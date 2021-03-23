//ceas
function showTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("ceas").innerText = time;
    document.getElementById("ceas").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();


//nume 
function ValueKeyPress() {
    var nume = document.getElementById("input_name");
    var name = nume.value;
    var salut = document.getElementById("nume");
    salut.innerText = name; 
    var name = document.getElementById("nume");
    name.value = nume.value;
    username = name;
} 

//varsta
function ageCalculator() {  
    let userinput = document.getElementById("DOB").value;  
    let dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
    let month_diff = Date.now() - dob.getTime();  
    let age_dt = new Date(month_diff);   
    let year = age_dt.getUTCFullYear();  
    let age = Math.abs(year - 1980);  
    return document.getElementById("result").innerHTML =    
             "Ai " + age + " ani. ";  
    }  
}  

