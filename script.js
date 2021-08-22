// memory portion
document.getElementById('eight').addEventListener('click', function () {
    const eightGbPrice = document.getElementById('memory-price');
    const eightMemoryCost = 0;
    eightGbPrice.innerText = eightMemoryCost;
    calculateTotal()
    // console.log('eightMemoryCost');
})

document.getElementById('sixteen').addEventListener('click', function () {
    const sixteenGbPrice = document.getElementById('memory-price');
    const sixteenMemoryCost = 180;
    sixteenGbPrice.innerText = sixteenMemoryCost;
    calculateTotal()
    // console.log('sixteenGbPrice');

})

// storage portion
document.getElementById('low-ssd').addEventListener('click', function () {
    const lowSsdPrice = document.getElementById('storage-price');
    const lowSsdStorageCost = 0;
    lowSsdPrice.innerText = lowSsdStorageCost;
    calculateTotal()
})
document.getElementById('medium-ssd').addEventListener('click', function () {
    const mediumSsdPrice = document.getElementById('storage-price');
    const mediumSsdStorageCost = 100;
    mediumSsdPrice.innerText = mediumSsdStorageCost;
    calculateTotal()
})
document.getElementById('high-ssd').addEventListener('click', function () {
    const highSsdPrice = document.getElementById('storage-price');
    const highSsdStorageCost = 180;
    highSsdPrice.innerText = highSsdStorageCost;
    calculateTotal()
})

// delivery portion
document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-price');
    const notNeeded = 0;
    deliveryCost.innerText = notNeeded;
    calculateTotal()
})
document.getElementById('delivery-costly').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-price');
    const needed = 20;
    deliveryCost.innerText = needed;
    calculateTotal()
})

// total price
function calculateTotal() {
    const deliveryPrice = document.getElementById('delivery-price').value;
    const ssdPrice = document.getElementById('storage-price').value;
    const gbPrice = document.getElementById('memory-price').value;
    const totalPrice = deliveryPrice + ssdPrice + gbPrice;

    document.getElementById('total-price').innerText = parseFloat(totalPrice.value);

    document.getElementById('apply').addEventListener('click', function () {
        const promoText = document.getElementById('promo-box');
        if (promoText == stevekaku) {
            totalPrice * 5;
        }
        else {
            promoText = document.getElementById('promo-box');
        }
        return totalPrice;
    })
}
