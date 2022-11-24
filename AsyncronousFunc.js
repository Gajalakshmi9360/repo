
console.log("line1");

function my() {
    console.log("line2");
}

setTimeout(my,3000)

console.log("line3");

//promise

let myPromise = new Promise((resolve, reject) => {
    let result = "Success"
    if (result === 'Success') { 
        resolve(result)
    }else{
        reject("Failed to fetch Data")
    }
});
myPromise
    .then((data) => console.log("Data received : "+data))
        .catch((err) => {console.log("error message : "+err);})

