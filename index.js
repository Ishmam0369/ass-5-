// discover section
document.getElementById("new-window").addEventListener("click",function(){
    window.location.href="./innerindex.html";
})

// theme button
document.getElementById("theme-changer").addEventListener("click",function(){
    getRandomColor()
})
const colors =[
        "cyan", "pink", "lightpink", "lightgrey", "lightslategray", "orangered", "lightblue", "salmon", "darksalmon", "darkseagreen", "violet", "aquamarine","brickred"]
function getRandomColor (){
    
    
        const randomIndex = Math.floor(Math.random() * colors.length);
        document.getElementById("main").style.backgroundColor = colors[randomIndex];
    
}
// date

let dateUpper = new Date().getFullYear();
let monthUpper = new Date().getMonth() + 1;
let dayUpper = new Date().getDate();
//  document.getElementById("front-date").innerText=dayUpper + "-" + monthUpper + "-" + dateUpper;
// document.getElementById("front-date").style.color="black";
// document.getElementById("front-date").style.fontWeight="600";
document.getElementById("front-date").innerHTML=`
<h1 class="pt-4  text-black font-semibold ">${dayUpper}-${monthUpper}-${dateUpper} 
`;

// btn-1
const taskincrease=document.getElementById("task-increase").innerText
const contaskIncrease =parseInt(taskincrease);

document.getElementById("button-1").addEventListener("click",
    function(){
        document.getElementById("button-1").setAttribute("disabled","true")
        document.getElementById("button-1").style.backgroundColor="grey";
        alert("board Updated Succesfully");
        buttonCount("button-1");
        buttonlost("button-1");
        let name =document.getElementById("low-1").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();
        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name}   at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-6").getAttribute("disabled") === "true") {
            if (document.getElementById("button-2").getAttribute("disabled") === "true") {
                if (document.getElementById("button-3").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-4").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-5").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }

)
// btn-2
document.getElementById("button-2").addEventListener("click",
    function(){
        document.getElementById("button-2").setAttribute("disabled","true")
        document.getElementById("button-2").style.backgroundColor="grey";
        buttonCount("button-2");
        buttonlost("button-2");
        alert("board Updated Succesfully");
        let name =document.getElementById("low-2").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();
        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name}  at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-1").getAttribute("disabled") === "true") {
            if (document.getElementById("button-6").getAttribute("disabled") === "true") {
                if (document.getElementById("button-3").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-4").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-5").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }

)
// btn-3
document.getElementById("button-3").addEventListener("click",
    function(){
        document.getElementById("button-3").setAttribute("disabled","true")
        document.getElementById("button-3").style.backgroundColor="grey";
        buttonCount("button-3");
        buttonlost("button-3");
        alert("board Updated Succesfully");
        let name =document.getElementById("low-3").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();

        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name} at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-1").getAttribute("disabled") === "true") {
            if (document.getElementById("button-2").getAttribute("disabled") === "true") {
                if (document.getElementById("button-6").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-4").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-5").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }

)
// btn-4
document.getElementById("button-4").addEventListener("click",
    function(){
        document.getElementById("button-4").setAttribute("disabled","true")
        document.getElementById("button-4").style.backgroundColor="grey";
        buttonCount("button-4");
        buttonlost("button-4");
        alert("board Updated Succesfully");
        let name =document.getElementById("low-4").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();
        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name} at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-1").getAttribute("disabled") === "true") {
            if (document.getElementById("button-2").getAttribute("disabled") === "true") {
                if (document.getElementById("button-3").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-6").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-5").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }

)
// btn-5
document.getElementById("button-5").addEventListener("click",
    function(){
        document.getElementById("button-5").setAttribute("disabled","true")
        document.getElementById("button-5").style.backgroundColor="grey";
        buttonCount("button-5");
        buttonlost("button-5");
        alert("board Updated Succesfully");
        let name =document.getElementById("low-5").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();
        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name} at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-1").getAttribute("disabled") === "true") {
            if (document.getElementById("button-2").getAttribute("disabled") === "true") {
                if (document.getElementById("button-3").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-4").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-6").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }

)
// btn-6
document.getElementById("button-6").addEventListener("click",
    function(){
        document.getElementById("button-6").setAttribute("disabled","true")
        document.getElementById("button-6").style.backgroundColor="grey";
        buttonCount("button-6");
        buttonlost("button-6");
        alert("board Updated Succesfully");
        let name =document.getElementById("low-6").innerText;
        let p =document.createElement("p");
        let hour =new Date().getHours();
        let minute =new Date().getMinutes();
        let second =new Date().getSeconds();
        p.innerHTML=`<p class="bg-stone-300 text-black p-5 rounded-lg m-5">
            You have completed the task ${name} at ${hour}:${minute}:${second}
        </p>`;
        document.getElementById("history").appendChild(p);
        if (document.getElementById("button-1").getAttribute("disabled") === "true") {
            if (document.getElementById("button-2").getAttribute("disabled") === "true") {
                if (document.getElementById("button-3").getAttribute("disabled") === "true") {
                    if (document.getElementById("button-4").getAttribute("disabled") === "true") {
                        if (document.getElementById("button-5").getAttribute("disabled") === "true") {
                            alert("task has been completed!")
                        };
                    };
                };
            };
        };
    }
    
)

// history remove
document.getElementById("history-remover").addEventListener("click",function(){

    document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
            <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
            <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
        </div>
        <div class="pl-34">
            <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                Clear History
            </button>
        </div>`;

        document.getElementById("history-remover").addEventListener("click",function(){
    document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
            <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
            <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
        </div>
        <div class="pl-34">
            <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                Clear History
            </button>
        </div>`;
      
        document.getElementById("history-remover").addEventListener("click",function(){
            document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
                    <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
                    <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
                </div>
                <div class="pl-34">
                    <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                        Clear History
                    </button>
                </div>`;
                
                document.getElementById("history-remover").addEventListener("click",function(){
                    document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
                            <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
                            <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
                        </div>
                        <div class="pl-34">
                            <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                                Clear History
                            </button>
                        </div>`;
                      
                        document.getElementById("history-remover").addEventListener("click",function(){
                            document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
                                    <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
                                    <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
                                </div>
                                <div class="pl-34">
                                    <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                                        Clear History
                                    </button>
                                </div>`;

                                document.getElementById("history-remover").addEventListener("click",function(){
                                    document.getElementById("history").innerHTML=`<div class="flex gap-4 pl-30 ">
                                            <img class="w-6 h-10 pt-4" src="A5-Dev-Board/assets/activity.png" alt="">
                                            <p class="pt-3 pr-6 text-black text-lg">Activity Log</p>
                                        </div>
                                        <div class="pl-34">
                                            <button id="history-remover" class="btn bg-blue-700 text-white  mt-7 border-none ">
                                                Clear History
                                            </button>
                                        </div>`;
                                      
                                    }
                                    )
                            }
                            )
                    }
                    )
            }
            )
    }
    )
      
}
)


// 
function buttonCount(id){
    let taskIncrease = document.getElementById("task-increase").innerText;
    let contaskIncrease = parseInt(taskIncrease);
    document.getElementById("task-increase").innerText = contaskIncrease + 1;
}

function buttonlost(id){
    let buttonDecrease = document.getElementById("task-decrease").innerText;
    let convertdecrease =parseInt(buttonDecrease);
    document.getElementById("task-decrease").innerText= convertdecrease - 1
}