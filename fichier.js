function hideMe() {
var ale = document.getElementById('blokcentral');
var stylese = ale.style.display;

var findButton = document.getElementById('JSButton');
var displayButton = findButton.style.display;

if (stylese !== 'flex') {
	ale.style.display = 'flex';
	findButton.style.display = 'none';
} else {
	ale.style.display = 'flex';
	findButton.style.display = 'none';
}
}
function search() {
var recupSearch=document.getElementById('mysearch').value;
window.location.href = 'https://www.google.com/search?q=' + recupSearch;
}

setTimeout(function() {
	window.confirm("Venez sur le site suivant !! Méga Géniale")
	if (window.confirm('Etes-vous sûr ?')) {
		window.location.href = 'http://www.e-sudoku.fr/';
	};
}, 10000);