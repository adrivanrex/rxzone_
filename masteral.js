function stringtodate(a){
    balance = [];
    for (var i = a.length - 1; i >= 0; i--) {
        balance.push(a[i]);
    }
    console.log(balance);
    characters = [];
    for (var you = balance.length - 1; you >= 0; you--) {
        characters.push(balance[you].charCodeAt(0));
    }

    console.log(characters);
    var arr = characters;
    var total=0;
    for(var i in arr) { total += arr[i]; }
    console.log(total);
    var date = new Date(total * 1000);
    var year    = date.getFullYear();
    var month   = date.getMonth();
    var day     = date.getDay();
    var hour    = date.getHours();
    var minute  = date.getMinutes();
    var seconds = date.getSeconds(); 
    return date;
}

console.log(stringtodate("a+b"));
