const getToDo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error)
                resolve("excuted successfully")
            else
                reject("failed to execute");
        }, 2000)
    })
}
getToDo()
    .then(todo => {
        console.log(todo);
    })
    .catch(error => {
        console.log(error);
    });