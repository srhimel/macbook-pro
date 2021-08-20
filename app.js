function getPrice(priceId) {
    document.getElementById(priceId + '-price').addEventListener('click', function (event) {
        let price = event.target.getAttribute('price');
        price = parseFloat(price);
        if (price >= 0) {
            document.getElementById(priceId + '-amount').innerText = price;
            document.getElementById('total-price').innerText = totalSum();
            document.getElementById('below-total').innerText = totalSum();
        }

    });
}

//execute function

getPrice('memory');
getPrice('storage');
getPrice('delivery');

// Get Total Amount

function amonutValue(amountId) {
    let amountValue = document.getElementById(amountId + '-amount').innerText;
    return parseFloat(amountValue);
}

function totalSum() {
    return amonutValue('best') + amonutValue('memory') + amonutValue('storage') + amonutValue('delivery');
}

// Apply Coupon
document.getElementById('coupon-apply').addEventListener('click', function () {
    const belowTotal = document.getElementById('below-total');
    const couponCheck = document.getElementById('coupon-box').value.toLowerCase();
    const couponNotification = document.getElementById('coupon-noti');
    if (couponCheck == 'stevekaku') {
        const coupon = belowTotal.innerText * .2;
        belowTotal.innerText -= coupon;
        couponNotification.innerText = 'Coupon Applied Successfull'
        couponNotification.style.color = 'green';
    }
    else {
        couponNotification.innerText = 'Coupon is not okay! try using: stevekaku'
        couponNotification.style.color = 'red';
        belowTotal.innerText = document.getElementById('total-price').innerText;
    }
});