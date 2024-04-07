document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');

    cartIcon.addEventListener('click', function(event) {
        event.preventDefault();
        cartDropdown.style.display = (cartDropdown.style.display === 'block') ? 'none' : 'block';
    });

    // Code để thêm sản phẩm vào giỏ hàng và cập nhật tổng tiền sẽ được thêm ở đây
});
