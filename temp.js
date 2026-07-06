//temperature converter
function celcius(temp) {
    let ferenhite=""
    ferenhite=(temp*9/5)+32
    return ferenhite
}
function ferenhite(temp) {
    let celcius=""
    celcius=(temp-32)*5/9
    return celcius}
 console.log(ferenhite(-102))