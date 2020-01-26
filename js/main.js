    var locs = [
        ["38.82634","-107.60381"],["39.07861","-108.41027"],["38.88589","-107.58253"],["39.07221","-108.40469"],["39.07505","-108.39373"],["39.115529","-108.325794"],["38.60797","-108.03621"],["39.105627","-108.355456"],["39.107404","-108.389369"],["39.117231","-108.362088"],["39.091901","-108.430842"],["39.09035","-108.3667"],["39.045728","-108.447431"],["39.104194","-108.389553"],["39.105832","-108.365821"],["39.046375","-108.436188"],["38.60738","-108.00163"],["39.106845","-108.365892"],["39.03675","-108.4749"],["39.10468","-108.38576"],["39.0846623","-108.3857671"],["39.06603","-108.56488"],["39.116621","-108.36067"],["38.899693","-107.577303"],["39.097046","-108.349879"],["39.116621","-108.36067"],["39.04591","-108.44237"],["39.090821","-108.662153"],["39.111978","-108.355815"],["39.03685","-108.45828"],["39.118056","-108.364689"]
    ]



function ad_show(){
var ad_increment = localStorage.getItem("ad_increment");  //create a tracking variable

if (ad_increment == null){                                //if that tracking varialble dosen't exist create one and set to zero
    localStorage.setItem("ad_increment","0")
}

  var ad_increment_temp = (ad_increment)+0;               //add a digit to the tracking variable on every refresh

  localStorage.setItem("ad_increment",ad_increment_temp)  //update that tracking variable in local storage

if (ad_increment.length >=3){                             //if tracking variable is more than 5 digits reset to 1 digital and show interstitial ad
  localStorage.setItem("ad_increment","0")

  setTimeout(function (){

  // Something you want delayed.
    admob.interstitial.show()  

}, 2000); // How long do you want the delay to be (in milliseconds)? 

}

}

