var tria = [];
tria[0] = [true, undefined, undefined];
tria[1] = [false, false, true];
tria[2] = [true, true, true];

// niente -> undefined
// X -> false
// O -> true
var verificaRiga = function(row) {
    var winner;
    if(row[0] == true && row[1] == true && row[2] == true) {
        winner = true;
    } else if (row[0] == false && row[1] == false && row[2] == false) {
        winner = false;
    }
    return winner;
}

//verificaRiga([true,true,true]);
//verificaRiga([false,false,false]);
//verificaRiga([false,true,undefined]);




var verificaTria = function(tria){
    var winner;
    if (verificaRiga(tria[0]) == true || verificaRiga(tria[1]) == true || verificaRiga(tria[2]) == true){
        winner = true;
    } else if(verificaRiga(tria[0]) == false || verificaRiga(tria[0]) == false || verificaRiga(tria[0]) == false){
        winner = false;
    }
    return winner;
};


var winner = verificaTria(tria);
if (winner == true) {
    console.log("Vince O!");
} else if (winner == false) {
    console.log("Vince X!");
} else {
    //no basta
}


// manca colonna, diagonali, inserire una mossa (verificando se valida), contrinuare fino a vittoria