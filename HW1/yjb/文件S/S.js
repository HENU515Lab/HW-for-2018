function fn(a,b){
    var li = document.getElementById(a);
    var ul = document.getElementById(b);
    
    li.onmouseover = function(){
        ul.style.display = "block"    
    }
    li.onmouseout = function(){
        ul.style.display = "none"    
    }
}
fn("li01","ul01")    
fn("li02","ul02")    
fn("li03","ul03")
fn("li04","ul04")    
fn("li05","ul05")    
fn("li06","ul06")