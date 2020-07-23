var first = ['Все виды электромонтажных работ','Видеонаблюдение','Сигнализацию','Домофонию','Домашние кинотеатры', 'Hi-Fi аудио','Бесперебойное питание зданий'];
var firstM = [], el;

var $first = $('.the-first'); 
var $container = $('#container');

// init static //    
$first.text(first[0]);

// create measurables //
for(var i = 0; i < first.length; i++){
    el = $('<div class="measurable">' + first[i] + '</div>');
    $container.append(el);
    firstM.push(el.width());
}

// loop the loop //
var activeWordsIndex = 0;
setInterval(function(){
    activeWordsIndex++;
    var firstIndex = activeWordsIndex % first.length;
    
    $first.text( first[firstIndex] );
    $first.css({
        transition: 'none', 
        transform: 'translate(-200px)',
        opacity: '0'
    });
    setTimeout(function(){
        $first.css({
            transition: 'all 1s ease',
            transform: 'translate(-5px)',
            opacity: '1'
        });
    }, 50);
}, 3000);