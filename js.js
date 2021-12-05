player1 = {symbol : 'O',name:""};
player2 = {symbol : 'X',name:""};
turn = 1;
// winner logic
const values = [];
var str = "" ;
function attach(id,num){
    
    let el = document.getElementById(id);
    if (el.innerHTML == ""){
        if (turn == 1){
            el.innerHTML = player1.symbol;
            values[num-1] = player1.symbol;

            el.style.color = "blue";
            turn = 2;
        }
        else {
            el.innerHTML = player2.symbol;
            values[num-1] = player2.symbol;
            el.style.color = "red";
            turn = 1;
        }
            
    }
    // check the winner 
    let result = document.getElementById('value');
    //[0,1,2]
    if (values[0] == values[1] && values[1] == values[2]){
        if (values[0] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[0] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[2,5,8]
    if (values[2] == values[5] && values[5] == values[8]){
        if (values[2] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[2] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[6,7,8]
    if (values[6] == values[7] && values[7] == values[8]){
        if (values[6] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[6] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[0,3,6]
    if (values[0] == values[3] && values[3] == values[6]){
        if (values[0] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[0] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[1,4,7]
    if (values[1] == values[4] && values[4] == values[7]){
        if (values[1] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[1] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[0,4,8]
    if (values[0] == values[4] && values[4] == values[8]){
        if (values[0] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[0] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[2,4,6]
    if (values[2] == values[4] && values[4] == values[6]){
        if (values[2] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[2] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
    //[3,4,5]
    if (values[3] == values[4] && values[4] == values[5]){
        if (values[3] == player1.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='blue';
            result.innerHTML = player1.name + " Won !";
        }
        if (values[3] == player2.symbol){
            result.style.display = 'block';
            result.style.backgroundColor ='red';
            result.innerHTML = player2.name + " Won !";
        }
        
    }
}

function getName(){
    let box = document.getElementById('input-name');
    let element = document.getElementById('game-board');
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById('name2').value;
    player1.name = name1;
    player2.name = name2;
    element.style.display = 'grid';
    box.style.display = 'none';
    let stat = document.getElementById('stats')
    stat.style.display = 'block';
    stat.innerHTML = '<button class="button" id="player1" style="background-color: blue;">' + player1.name + '</button>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button class="button" onclick="location.reload()" style="width: 20%; font-size:x-large;">Reset Game</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button class="button" id="player2" style="background-color: red;"> ' + player2.name+'</button>'
}
