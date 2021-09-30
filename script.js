// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

// // XMLhttpRequest()

// // const getCountriesData = (countrie, population) => {
    
// //     const http = new XMLHttpRequest()

// //     http.open('GET', `https://restcountries.com/v3/name/${countrie}`)
// //     http.send()
// //     console.log(http.responseText)

// //     http.addEventListener('load', function() {
// //         console.log(this.responseText)

// //         const [data] = JSON.parse(this.responseText)
// //         console.log(data)

// //         data.population = population

// //         const lang = Object.values(data.languages)[0] // This method get the frist value of the object does'nt matter if is a string or an object will return the frist value.
// //         const signal = Object.values(data.currencies)[0]
// //         console.log(lang)
// //         console.log(signal)

// //         const html = `<article class="country">
// //         <img class="country__img" src="${data.flags[0]}" />
// //         <div class="country__data">
// //         <h3 class="country__name">${data.name.common}</h3>
// //         <h4 class="country__region">${data.region}</h4>
// //         <p class="country__row"><span>👫</span>${data.population}</p>
// //         <p class="country__row"><span>🗣️</span>${lang}</p>
// //         <p class="country__row"><span>💰</span>${signal.symbol} ${signal.name}</p>
// //         </div>
// //     </article>`

// //     countriesContainer.insertAdjacentHTML('beforeend', html)
// //     countriesContainer.style.opacity = '1'

// //     console.log(html)
// //     })
// // }

// // getCountriesData('brazil' , '211M')
// // getCountriesData('canada', '37M')
// // getCountriesData('usa', '37M')

// let lang, signal

// const renderCountry = function(data, className = '') {
    
//     const html = `<article class="country ${className}">
//     <img class="country__img" src="${data.flags[0]}" />
//     <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${lang}</p>
//     <p class="country__row"><span>💰</span>${signal.symbol} ${signal.name}</p>
//     </div>
//     </article>`

//     countriesContainer.insertAdjacentHTML('beforeend', html)
// } 

// // const request = fetch('https://restcountries.com/v3/name/brasil') // Promise.

// const renderError = msg => {
//     countriesContainer.insertAdjacentText('beforeend', msg)
// }

// const objValues = function(promData) {
//     lang = Object.values(promData.languages)[0] // This method get the frist value of the object does'nt matter if is a string or an object will return the frist value.
//     signal = Object.values(promData.currencies)[0]
// }

// // const getCountriesDataAndNeighbour = (countrie) => {
    
// //     const http = new XMLHttpRequest()
// //     http.open('GET', `https://restcountries.com/v3/name/${countrie}`)
// //     http.send()
// //     console.log(http.responseText)

// //     http.addEventListener('load', function() {

// //         // Destructuring data from the request.
// //         const [data] = JSON.parse(this.responseText)
// //         console.log(data)
    
// //         // Passing population.
// //         // data.population = population

// //         // Get lang and Signal.
//         // lang = Object.values(data.languages)[0] // This method get the frist value of the object does'nt matter if is a string or an object will return the frist value.
//         // signal = Object.values(data.currencies)[0]

// //         // Render HTML Function
// //         renderCountry(data)

// //         const [neighbour] = data.borders
// //         console.log(neighbour)

// //         if(!neighbour) return;

// //         // This function will be caled after the frist one beacuse we need the nighbour value to make the call.
// //         const http2 = new XMLHttpRequest()
// //         http2.open('GET', `https://restcountries.com/v3/alpha/${neighbour}`)
// //         http2.send()
// //         console.log(http.responseText)

// //         http2.addEventListener('load', function() { // callback
// //             const [data2] = JSON.parse(this.responseText)
// //             console.log(data2)
// //             renderCountry(data2, 'neighbour')
// //         })
// //     })
// // }

// // // getCountriesDataAndNeighbour('portugal')
// // getCountriesDataAndNeighbour('usa')


// // Fetch API

// // Promise -> An object that is used as a placeholder for the future result of an asyncronous operation. Basicaly -> is a container for future value.

// // In promises we no longer need to rely on events and callbacks passed into asynchronous function to handle asynchronous results.

// // Instead of nesting callbacks, we can CHAIN PROMISES for a sequence of asynchronous operations: escaping callback hell.

// const getJSON = (url, errMsg = 'Something wrong') => {
//     return fetch(url).then(res => {
//         console.log(res)
        
//         if(!res.ok) {
//             throw new Error(`${errMsg} ${res.status}`) // thow method will imediatly terminate the function and propagate to the catch block, and treat this error.
//         }

//         return res.json()
//     })
// }


// // const getCountryData = function(country) {
// //     fetch(`https://restcountries.com/v3/name/${country}`)
// //     .then(
// //     res => {
// //         console.log(res)
        
// //         if(!res.ok) {
// //             throw new Error(`Country not found ${res.status}`) // thow method will imediatly terminate the function and propagate to the catch block, and treat this error.
// //         }

// //         return res.json()
// //     })//, // This json() method is used to read the data from the request by fetch api.
// //     // err => alert(err)) // To deal with errors we can get them as a second paramether of the then method.
// //     .then(data => {
// //         const [promData] = data
// //         objValues(promData)
// //         renderCountry(promData)
// //         console.log(promData)
// //         // const [neighbour] = promData.borders
// //         const neighbour = 'aiousdioas'
// //         if(!neighbour) return;

// //         return fetch(`https://restcountries.com/v3/alpha/${neighbour}`) // THE RETURN VALUE FROM THE THEN METHOD AWAYS WILL BE THE PARAM OF THE NEXT THEN()
// //         .then(res => {
// //             if(!res.ok) {
// //                 throw new Error(`Country not found ${res.status}`) // thow method will imediatly terminate the function and propagate to the catch block, and treat this error.
// //             }
// //             res.json()
// //         })
// //         .then(data => {
// //             const [promData] = data
// //             objValues(promData)
// //             renderCountry(promData, 'neighbour')
// //         })
// //     }) // The then method is avaliable in all promises.
// //     .catch(error => {
// //         console.error(`${error} meu erro personalizado`)
// //         renderError(`Something went wrong!!! ${error}`)
// //     }) // We use catch in the end of the promise chain to deal with all errors.
// //     .finally(() => {
// //         countriesContainer.style.opacity = 1
// //     }) // Always will be called when the promisse is fullfiled or rejected.
// // }

// // btn.addEventListener('click', () => {
// //     getCountryData('brasil')
// // })

// // getCountryData('oaijsdia')

// // NEW REFACTORED CODE

// let lat, long 

// const whereAmI = function() {
//     navigator.geolocation.getCurrentPosition( pos => {
//         console.log(pos)
//         const {latitude} = pos.coords
//         const {longitude} = pos.coords
//         lat = latitude
//         long = longitude
//         console.log(lat,long)

//         const getLocation = () => {
//             return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//             .then(res => {
//                 if(!res.ok) {
//                     console.log(res)
//                     throw new Error(`Cant get the data ${res.status}`)
//                 }
//                 return res.json()
//             })
//             .then(data => {
//                 console.log(data)
//                 const myData = data
//                 return [getCountryData(myData.country), getCountryData('germany'), getCountryData('colombia')]
//             })
//             .catch((err) => {
//                 console.error(err)
//             })
//         }
//         getLocation()

//     })
// }

// whereAmI()

// const getCountryData = function(country) {
//     getJSON(`https://restcountries.com/v3/name/${country}`)//, // This json() method is used to read the data from the request by fetch api.
//     // err => alert(err)) // To deal with errors we can get them as a second paramether of the then method.
//     .then(data => {
//         const [promData] = data
//         objValues(promData)
//         renderCountry(promData)
//         console.log(promData)
//         console.log(promData.borders)
        
//         // If the object doesent have the value.
//         if(promData.borders === undefined) {
//             throw new Error('Country not found')
//         }

//         const [neighbour] = promData.borders

//         return getJSON(`https://restcountries.com/v3/alpha/${neighbour}`)
//         .then(data => {
//             const [promData] = data
//             objValues(promData)
//             renderCountry(promData, 'neighbour')
//         })
//     }) // The then method is avaliable in all promises.
//     .catch(error => {
//         console.error(`${error} meu erro personalizado`)
//         renderError(`Something went wrong!!! ${error}`)
//     }) // We use catch in the end of the promise chain to deal with all errors.
//     .finally(() => {
//         countriesContainer.style.opacity = 1
//     }) // Always will be called when the promisse is fullfiled or rejected.
// }

// // btn.addEventListener('click', () => {
// //     getCountryData('australia')
// // })

// console.log('test start')

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)

// // This will be resolved frist beacuse of the microtest queue. All the promisses are priority in the call back queue
// Promise.resolve('Resolved Promise 1').then(res => console.log(res)) // Build a promise that will be imediatly resolved

// // Promise 2 
// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 10000; i++) {
//         console.log(res)
//     }
// })


// console.log('test end')


// Building a promise
// const lotteryPromise = new Promise(function(resolve, reject) {
//     console.log('Lotter draw is happening')
//     setTimeout(() => {
//         if(Math.random() >= 0.5) {
//             resolve('You win some money')
//         } else {
//             reject(new Error('You lose some money'))
//         }
//     }, 2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

// // Function that will return a promise -> Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000)
    })
}

// wait(2).then(() => {
//     console.log('I waited for 2 seconds')
//     return wait(1)
// }).then(() => console.log('I waited for 1 second'))

// // Promises static methods
// Promise.resolve('abc').then(res => console.log(res)) // Will resolve imediatly
// Promise.reject('abc').catch(res => console.error(res))



// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(pos => resolve(pos), err => reject(err))
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     })
// }

// getPosition().then(pos => console.log(pos))

// Challenge #3

const imgContainer = document.querySelector('.images')

const createImg = function(imgPath) {
    return new Promise(function(resolve, reject) { // New Promise expect a callback function.
        const img = document.createElement('img')
        img.src = imgPath

        img.addEventListener('load', function() {
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error', function() {
            reject(new Error('Img not found!'))
        })
    })
}

let currentImg

createImg('img/img-1.jpg').then(img => {
    currentImg = img
    console.log('img 1 loaded')
    return wait(2)
}).then(() => {
    currentImg.style.display = 'none'
    return createImg('img/img-2.jpg')
}).then(img => {
    currentImg = img
    console.log('Image 2 loaded')
    return wait(2)
}).then(() => {
    createImg.style.display = 'none'
})
.catch(err => console.error(err))