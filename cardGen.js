function cardGen(){
    var characters = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
var icons = ["https://www.shareicon.net/data/512x512/2016/07/03/790482_poker_512x512.png","https://www.spreadshirt.com/image-server/v1/mp/designs/12491917,width=178,height=178/poker-suit-diamond.png","http://media.decalsmania.com/spade/black.png","http://freevector.co/wp-content/uploads/2014/06/17235-clover-ace1.png"];



var charLength = characters.length;
var randomChar = Math.floor(Math.random()*(charLength));
document.getElementById('charDiv').innerHTML = '<h1 id="character">'+characters[randomChar]+'</h1>';

var iconLength = icons.length;
var randomIcon = Math.floor(Math.random()*iconLength);
document.getElementById('upperIcon').innerHTML = '<img src="'+icons[randomIcon]+'" id="topIcon"></img>';
document.getElementById('lowerIcon').innerHTML = '<img src="'+icons[randomIcon]+'" id="bottomIcon"></img>';

}

cardGen();

function clickFunction(){
    cardGen();
}


// heart https://www.shareicon.net/data/512x512/2016/07/03/790482_poker_512x512.png
// diamond https://www.spreadshirt.com/image-server/v1/mp/designs/12491917,width=178,height=178/poker-suit-diamond.png
// spade http://media.decalsmania.com/spade/black.png
// clover http://freevector.co/wp-content/uploads/2014/06/17235-clover-ace1.png