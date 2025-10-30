function clearscreen(){
    document.getElementById("result").value="";
}
function deletelast(){
    let currentvalue = document.getElementById("result").value;
    document.getElementById("result").value = currentvalue.slice(0,-1);
}
function press(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    try{
        let input = document.getElementById("result").value;
        let output = eval(input);
        document.getElementById("result").value = output;
    }catch(error){
        document.getElementById("result").value="error";
    }
}

