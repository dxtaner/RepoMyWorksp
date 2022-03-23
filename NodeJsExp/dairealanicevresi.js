// daire alanı
const arguments = process.argv.slice(2)

const dairealani = (yaricap) => { 
    let alan = Math.PI * yaricap * yaricap;
    let cevre = 2 * yaricap * Math.PI;
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
    console.log(`Yarıçapı ${yaricap} olan dairenin çevresi: ${cevre}`)
}

dairealani(arguments[0] * 1);