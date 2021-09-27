'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// XMLhttpRequest()

// const getCountriesData = (countrie, population) => {
    
//     const http = new XMLHttpRequest()

//     http.open('GET', `https://restcountries.com/v3/name/${countrie}`)
//     http.send()
//     console.log(http.responseText)

//     http.addEventListener('load', function() {
//         console.log(this.responseText)

//         const [data] = JSON.parse(this.responseText)
//         console.log(data)

//         data.population = population

//         const lang = Object.values(data.languages)[0] // This method get the frist value of the object does'nt matter if is a string or an object will return the frist value.
//         const signal = Object.values(data.currencies)[0]
//         console.log(lang)
//         console.log(signal)

//         const html = `<article class="country">
//         <img class="country__img" src="${data.flags[0]}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${data.population}</p>
//         <p class="country__row"><span>🗣️</span>${lang}</p>
//         <p class="country__row"><span>💰</span>${signal.symbol} ${signal.name}</p>
//         </div>
//     </article>`

//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = '1'

//     console.log(html)
//     })
// }

// getCountriesData('brazil' , '211M')
// getCountriesData('canada', '37M')
// getCountriesData('usa', '37M')


const renderCountry = function(data) {
    
    const html = `<article class="country">
    <img class="country__img" src="${data.flags[0]}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${lang}</p>
    <p class="country__row"><span>💰</span>${signal.symbol} ${signal.name}</p>
    </div>
    </article>`

    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = '1'
} 

let lang, signal, data

const getCountriesDataAndNeighbour = (countrie) => {
    
    const http = new XMLHttpRequest()
    http.open('GET', `https://restcountries.com/v3/name/${countrie}`)
    http.send()
    console.log(http.responseText)

    http.addEventListener('load', function() {

        // Destructuring data from the request.
        [data] = JSON.parse(this.responseText)
        console.log(data)
    
        // Passing population.
        // data.population = population

        // Get lang and Signal.
        lang = Object.values(data.languages)[0] // This method get the frist value of the object does'nt matter if is a string or an object will return the frist value.
        signal = Object.values(data.currencies)[0]

        // Render HTML Function
        renderCountry(data)

        const [neighbour] = data.borders
        console.log(neighbour)

        if(!neighbour) return;

        // This function will be caled after the frist one beacuse we need the nighbour value to make the call.
        const http2 = new XMLHttpRequest()
        http2.open('GET', `https://restcountries.com/v3/alpha/${neighbour}`)
        http2.send()
        console.log(http.responseText)

        http2.addEventListener('load', function() { // callback
            const data2 = this.responseText
            console.log(data2)
        })
    })
}

getCountriesDataAndNeighbour('portugal')