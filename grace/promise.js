const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;

        if(success){
            resolve("success is true");
        }
        else{
            reject(new Error("reject"));
        }
    }, 5000);
})

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error.message));