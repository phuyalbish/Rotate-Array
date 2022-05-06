
setInterval(function(){document.getElementById("range_value").innerHTML = document.getElementById("range").value;}, 100);

// Button Onclick...............
document.getElementById("button").addEventListener("click", function(){
    var x = document.getElementById("name").value;
    if(x != ""){
        var red = Math.floor(Math.random() * (250 - 100 + 1) + 100);
        var green = Math.floor(Math.random() * (250 - 100 + 1) + 100);
        var blue = Math.floor(Math.random() * (250 - 100 + 1) + 100);
        var colors = "rgb("+red+","+green+","+blue+")";
        document.getElementById("name").value ="";
        array[array.length] = new Array(x,colors);
        display(x,colors);

        
    }
});


function display(name,colors){
    var a = document.createElement("div");
    var b = document.createAttribute("class");
    b.value = "inner_container";
    a.setAttributeNode(b);
    a.innerHTML = name;
    a.style.background =colors;
    document.getElementById("only_Container").appendChild(a);
    

}

// ///////////////////////


var array = new Array();
console.log(array);


function remove(){

    var elements = document.querySelector("#only_Container");
    var child = elements.lastElementChild;  
    while (child) { 
        elements.removeChild(child); 
        child = elements.lastElementChild; 
    } 
}

function left(){
    remove();
    var i,j;
    var n = document.getElementById("range").value;
    var x;

    if(array.length>1){
        for(j=0; j<n; j++){
            x = array[0];
            for(i=1; i<array.length; i++){
                array[i-1] = array[i];
            }
            array[array.length-1] = x;
        }
    }

    for(i=0; i<array.length; i++){
        display(array[i][0],array[i][1]);
    }


}


function right(){
    remove();
    var i,j;
    var n = document.getElementById("range").value;
    var x;

    if(array.length>1){

        for(j=0; j<n; j++){
            x = array[array.length-1];
            for(i=array.length-1; i>=0; i--){
                array[i] = array[i-1];
            }
            array[0] = x;
        }
    }




    /////
    for(i=0; i<array.length; i++){
        display(array[i][0],array[i][1]);
    }


}



                                


