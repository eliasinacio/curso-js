/**
 * Promises:
 * 
 * Promises states:
 *  pending
 *  fulfield
 *  rejected 
 */

function testPromise() {
    console.log('sync started');

    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            reject();
        }, 2000)
    }).then(() => {
        console.log('promise finished')
    }).catch(() => {
        console.log('promise rejected')
    })
 
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })

    console.log('sync finished')

    Promise.all([promise1, promise2, promise3]).then(() => {
        console.log('All async promises finished')
    })
}

testPromise()