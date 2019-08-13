function convertFeet(val) {
    val = parseFloat(val);
    document.getElementById("resultMeters").innerHTML =val + " Feet " + "  =  "  + (val * 0.305) + " Metters";

}
function convertMeters(val) {
    val = parseFloat(val);
    document.getElementById("resultFeet").innerHTML =val + " Metters " + "  =  "  + (val * 3.279) + " Feet";

}