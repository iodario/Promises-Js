const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve ('Hey!');
        }  else {
            reject ('Whops!');
        }
    });
};

somethingWillHappen ()
    .then (response => {console.log(response)})
    .catch (err => {console.error(err)});

// other option
const somethingWillHappen2 = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve ('True');
            }, 2000)
        } else {
            const err = new Error ('Whops!');
            reject (err);
        }
    })
}

somethingWillHappen2()
    .then (response => {console.log(response)})
    .catch (error => {console.error(error)});


// other option, chained promises

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then (response => {console.log('Array of Results', response)})
    .catch (err =>{console.error(err)});

