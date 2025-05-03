function filterProducts(gender) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (gender === 'all') {
            product.classList.remove('hidden');
        } else {
            if (product.getAttribute('data-gender') === gender) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        }
    });
}

document.getElementById("headerIcons").addEventListener("click",() =>{
    document.getElementById("nav").classList.toggle("show-nav");
});
document.getElementById("btnClose").addEventListener("click",() =>{
    document.getElementById("nav").classList.toggle("show-nav");
});