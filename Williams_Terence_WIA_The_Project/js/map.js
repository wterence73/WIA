//dropdown example
$(function() {
    new Maplace({
    locations: LocsA,
    map_div: '#gmap-dropdown',
    controls_title: 'Choose a location:'
}).Load();

//ul list example
new Maplace({
    locations: LocsB,
    map_div: '#gmap-list',
    controls_type: 'list',
    controls_title: 'Choose a location:'
}).Load();
    
});