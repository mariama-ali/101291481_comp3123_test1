
const resolvedPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        reslove(success);
    }, 500)
});

const rejectedPromise = new Promise((reslove, reject) => {
    setTimeout(() => {
        try {
            throw new Error('error delayed excepetion!');
        } catch (e) {
            reject(e);
        }
    }, 500)
})

resolvedPromise.then((successMessage) => {
    console.log(successMessage)
});
rejectedPromise.catch(error => {
    console.error(error)
});