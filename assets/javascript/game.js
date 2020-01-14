// game character objects
var yoda = {
    name: "Yoda",
    img_location: "",
    health_points: 300,
    attack_power: 10,
    counter_attack_power: 10,
};

var lukeSkywalker = {
    name: "Luke Skywalker",
    img_location: "",
    health_points: 135,
    attack_power: 15,
    counter_attack_power: 8,
};

var darthVader = {
    name: "Darth Vader",
    img_location: "",
    health_points: 140,
    attack_power: 7,
    counter_attack_power: 15,
};

var darthMaul = {
    name: "Darth Maul",
    img_location: "",
    health_points: 200,
    attack_power: 3,
    counter_attack_power: 20,
};

// Global Variables
var characters_array = [yoda, lukeSkywalker, darthVader, darthMaul];
 


// Game Functions

// print all character function
function printAllChar() {
    // empty the characters div
    $("#characters").empty();
    // run the function for each character in the character array
    $.each(characters_array, function(index, val) {
        // define character elements
        var charEle = $("div class='character'></div>");
        var charName = $("<h4>" + val.name + "</h4>");
        var image = $("<img>");
        image.attr("src", val.img_location)
        var hp = $("<p>" + val.health_points + "</p>");

        // append name image hp to charEle, then append charEle to characters div
        charEle.append(name, image, hp);
        $("#characters").append(charEle);
    })
}

$(document).ready(function(){

    // step 1 define print all char function above and run inside the document read block
    printAllChar();



})