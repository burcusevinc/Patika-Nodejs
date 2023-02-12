let pi = 3.14

function circleArea(yaricap) {
    let daireAlan = pi * yaricap * yaricap
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${daireAlan}`);
}

function circleCircumference(yaricap) {
    let daireCevre = 2 * pi * yaricap
    console.log(`Yarıçapı ${yaricap} olan dairenin çevresi: ${daireCevre}`);
}

module.exports = {
    circleArea,
    circleCircumference
}