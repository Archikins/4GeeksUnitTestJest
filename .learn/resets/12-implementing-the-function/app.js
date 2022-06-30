let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const eurYen = (num) => {
    let result = num * oneEuroIs["JPY"]
    return result
}

const fromEuroToDollar = (num) => {
    let result = num * oneEuroIs["USD"]
    return result
}

const eurGbp = (num) => {
    let result = num * oneEuroIs["GBP"]
    return result
}
const yenEur = (num) => {
    let result = num / oneEuroIs["JPY"]
    return result
}

const usdEur = (num) => {
    let result = num / oneEuroIs["USD"]
    return result
}

const gbpEur = (num) => {
    let result = num / oneEuroIs["GBP"]
    return result
}

const fromDollarToYen = (num) => {
    let result = eurYen(usdEur(num)) 
    return result
}

const fromYenToPound = (num) => {
    let result = eurGbp(yenEur(num)) 
    return result
}


console.log(fromEuroToDollar(1))

module.exports= {
    eurGbp,
    eurYen,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
    yenEur,
    gbpEur,
    usdEur
}


