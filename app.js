require('dotenv').config();
const Trello = require('./node_modules/trello/main');
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva de VS_Trello_luka ${new Date()}`;

console.log('Ejecutando APP.js!');

trello.addCard(cardTitle, 'LukitaChan Card Description', '626ed353a0b41b136c410f63', function (error, trelloCard) {
	if (error) {
		console.log('Could not add card:', error);
	} else {
		console.log('Added card:', trelloCard);
	}
});
