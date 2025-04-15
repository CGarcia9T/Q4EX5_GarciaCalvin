// The Menu Guide; B = Burger; F = Fries; S = Soda

function checkOrder() {
	var customerOrder = document.getElementById('orderValue').value.toUpperCase();

	switch (customerOrder) {
		case "B":
			document.getElementById('orderResult').innerHTML = "You ordered a burger.";
			break;
		case "F":
			document.getElementById('orderResult').innerHTML = "You ordered fries.";
			break;
		case "S":
			document.getElementById('orderResult').innerHTML = "You ordered a soda.";
			break;
		default:
			document.getElementById('orderResult').innerHTML = "Invalid entry, please try again.";
	}
}