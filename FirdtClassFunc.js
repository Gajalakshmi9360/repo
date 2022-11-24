var Show = function (Data) {
    console.log(`This is callback function ${Data}`);
}

Show("API")

var mainFun = function (fun) {
    //Statements to Actions
    //data retrived is success
    fun("Success")
}

mainFun(
    function(str){
        console.log(str);
    }
)

//Closure func

let MyGlobalFunc = function () {
    let name = "sandy"
    let color = "white"
    return function () {
        console.log(`${name}, ${color}`);
    }
}
let ClosureFunc = MyGlobalFunc()
ClosureFunc()