const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Coupon Popup
const coupon = urlParams.get('coupon')
const percentage = urlParams.get('percentage')
console.log('The Coupon given was "' + coupon + '"')
console.log('The Percentage given was "' + percentage + '"')
if(coupon) {
    document.querySelector(".coupon-popup").classList.add("active")

    document.getElementById("coupon-popup-coupon").value = coupon;
    
    

    document.querySelector(".coupon-popup .close-btn").addEventListener("click", function(){
        document.querySelector(".coupon-popup").classList.remove("active")
    });
};
if(percentage) {
    document.getElementById("coupon-popup-percentage").innerHTML = percentage + "%";
} else {
    document.getElementById("coupon-popup-percentage").innerHTML = 10 + "%";
}



// Partner Popup
const partner = urlParams.get('partner')

if(partner.toLowerCase() === 'imber') {
    let logo = '/images/partners/imber.png';
    let name = 'Imber Development';
    let coupon = 'Z7LTB4Q8VS';
    let percentage = '25'
    let referral = 'Imber';

    // Open and Close
    document.querySelector(".partner-popup").classList.add("active")
    document.querySelector(".partner-popup .close-btn").addEventListener("click", function(){
        document.querySelector(".partner-popup").classList.remove("active")
    });

    // Edit Element
    document.getElementById("partner-popup-name").innerHTML = name;
    document.getElementById("partner-popup-logo").src = logo;
    document.getElementById("partner-popup-percentage").innerHTML = percentage + '%';
    document.getElementById("partner-popup-coupon").value = coupon;
    document.getElementById("partner-popup-referral").value = referral;


};