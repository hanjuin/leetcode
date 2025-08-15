/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitude = 0
    let haltitude = 0
    for(let i = 0; i < gain.length; i++){
        altitude += gain[i]
        if(altitude > haltitude){
            haltitude = altitude
        }
    }
    return haltitude
};