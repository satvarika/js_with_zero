let bear = {
    color: 'white',
    birthDay: new Date('1089-08-18T03:24:00'),
    eat: {
        honey: true,
        bunny: false,
        fish: true,
        ovo: false,
    },

}

function getBearColor() {
    document.getElementById("bearColor").innerHTML = bear.color
}

// console.log('мишута какой цвет?', bear.color)

// console.log('мишута есть зайчат?', bear.eat.bunny)

// console.log('мишута есть мед?', bear.eat.honey)


// const diffTime = new Date() - bear.birthDay
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365))

// console.log('сколько лет?', diffDays)

