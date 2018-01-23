var quotes = [
'Today I will do what others won\'t, so tomorrow I can accomplish what others can\'t. \-Jerry Rice',
'No matter how slow you go, you are still lapping everybody on the couch. \-Unknown',
'You miss 100% of the shots you don\'t take. \-Wayne Gretzky',
'The difference between the impossible and the possible lies in a person\'s determination. \-Tommy Lasorda',
'If you want something you\'ve never had, you must be willing to do something you\'ve never done. \-Thomas Jefferson',
'Nothing will work unless you do. \-Maya Angelou',
'Do what you have to do until you can do what you want to do. \-Oprah Winfrey',
'It\'s going to be a journey. It\'s not a sprint to get in shape. \-Kerri Walsh Jennings',
'No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn\'t trying. \-Unknown',
'Strive for progress, not perfection. \-Unknown',
];
function newQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}