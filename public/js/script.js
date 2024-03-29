$(document).ready(function () {

	$('.buttonsContainer').on('click', 'button', function () {
		var product = $(this).text();

		$.ajax({
			url: `/product/${product}`,
			type: 'GET',
			dataType: 'json',
			success: function (data) {
				$('.productsContainer').html('');
				var productsArrayLength = data.products.length;

				for (i = 0; i < productsArrayLength; i++) {
					var img = data.products[i].image;
					var title = data.products[i].title;
					var price = data.products[i].price;
					var type = data.products[i].type;
					var ID = data.products[i].ID;

					$('.productsContainer').append(`
						<div class='listing'>
							<div class='listingImage'>
								<a href='products/${ID}'><img src='public/${img}'></a>
							</div>
							<div class='listingTitle'>
								<a href='products/${ID}'><p>${title}</p></a>
							</div>
							<div class='listingPrice'>
								<p>$${price}</p>
							</div>
							 
							<div class='listingButtons'>
								<a href="buyNow/${ID}">
									<button id="buyNow">Buy it Now</button>
								</a>
								<button id='addCart' value='${ID}'>Add to Cart</button>
							</div>
						</div>
					`);
				}
			}
		});
	});

	//add to cart
	$('body').on('click', '#addCart', function () {
		var ID = $(this).val();

		$.ajax({
			url: `/addCart/${ID}`,
			type: "GET",
			dataType: "json",
			success: function (data) {
				$('.navLink em').html('');
				var cartNumb = data.cartNumb;

				$('.navLink em').html(cartNumb);

			}

		});
	});

});
