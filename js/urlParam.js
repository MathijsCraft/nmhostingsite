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
}else {
    document.getElementById("coupon-popup-percentage").innerHTML = 10 + "%";
}