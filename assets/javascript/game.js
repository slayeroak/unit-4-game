// game character objects
var yoda = {
    name: "Yoda",
    img_location: "assets/images/yoda.jpg",
    health_points: 300,
    attack_power: 10,
    counter_attack_power: 10,
    apiSpot: 20,
};

var lukeSkywalker = {
    name: "Luke Skywalker",
    img_location: "assets/images/luke.jpg",
    health_points: 135,
    attack_power: 15,
    counter_attack_power: 8,
    apiSpot: 1,
};

var darthVader = {
    name: "Darth Vader",
    img_location: "assets/images/vader.jpg",
    health_points: 140,
    attack_power: 7,
    counter_attack_power: 15,
    apiSpot: 4,
};

var darthMaul = {
    name: "Darth Maul",
    img_location: "assets/images/maul.jpg",
    health_points: 200,
    attack_power: 3,
    counter_attack_power: 20,
    apiSpot: 44,
};

// Global Variables
var characters_array = [yoda, lukeSkywalker, darthVader, darthMaul];
var user_char;
var user_hp;
var user_att_power;
var comp_defender
var defender_hp
var noDefender = true;
var gameOver = false;
var backgroundImage

//  url
var swURL = "https://swapi.co/api/";


// Game Functions

function displayMovieInfo() {

    var movie = $(this).attr("data-name");
    var queryURL = swURL + "people/" + user_char.apiSpot + "/";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var res = response;
        console.log(res);
        alert("You choose " + res.name);

      // Creating a div to hold the stats
      var statDiv = $("<div class ='stats'>");

      // Storing the rating data
      var charName = response.name;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Name: " + charName);

      // Displaying the rating
      statDiv.append(pOne);
      $("#stat-view").prepend(statDiv);

    //   // Storing the release year
    //   var released = response.Released;

    //   // Creating an element to hold the release year
    //   var pTwo = $("<p>").text("Released: " + released);

    //   // Displaying the release year
    //   movieDiv.append(pTwo);

    //   // Storing the plot
    //   var plot = response.Plot;

    //   // Creating an element to hold the plot
    //   var pThree = $("<p>").text("Plot: " + plot);

    //   // Appending the plot
    //   movieDiv.append(pThree);

    //   // Retrieving the URL for the image
    //   var imgURL = response.Poster;

    //   // Creating an element to hold the image
    //   var image = $("<img>").attr("src", imgURL);

    //   // Appending the image
    //   movieDiv.append(image);

    //   // Putting the entire movie above the previous movies
    //   $("#movies-view").prepend(movieDiv);
      
    });
}

// determine which character that player selects
function findCharacter(name){
    for (var i = 0; i < characters_array.length; i++) {
        if (characters_array[i].name === name) {
            console.log(characters_array[i]);
            return characters_array[i];
        }
    }
}

// print all character function
function printAllChar() {
    // empty the characters div
    $("#characters").empty();
    // run the function for each character in the character array
    $.each(characters_array, function(index, val) {
        // define character elements
        var charEle = $("<div class = 'character'></div>");
        var name = $("<h4>" + val.name + "</h4>");
        var image = $("<img>");
        image.attr("src", val.img_location)
        var hp = $("<p>" + val.health_points + "</p>");

        // append name image hp to charEle, then append charEle to characters div
        charEle.append(name, image, hp);
        $("#characters").append(charEle);
    })
}

// print enemies
function printEnemy(user_char){
    var all_characters = $(".character");
    var character = $(user_char);

    $.each(all_characters, function(index, val) {
        if (! character.is(val)) {
            $(val).attr("class", "enemy");
            $("#enemies").append($(val));
        }
    });
}


$(document).ready(function(){

    // step 1 define print all char function above and run inside the document read block
    printAllChar();

    // step 2 listen for click event when user clicks a character and run function to save char info into variables, then print enemies
    $("#characters").on("click", ".character", function(){
        //save chosen character's object info to variables and define a findCharacter function above
        user_char = findCharacter($(this).find("h4").text());
        console.log(this);
        user_hp = user_char.health_points;
        user_att_power = user_char.attack_power;

        displayMovieInfo();
   
        //print the enemies, define print enemeny above
        printEnemy(this);
        

        // change game background image to battle stage image
        backgroundImage = "assets/images/swbattlestage.jpg";
        $(".box").css("background-image", "url(" + backgroundImage + ")");
    });

    //step 3 listen for enemy click event when user clicks an enemy and run function to store enemy attributes
    $("#enemies").on("click", ".enemy", function() {
        // if there is no defender, define it, switch a global nodefender var, display it
        if (noDefender) {
            comp_defender = findCharacter($(this).find("h4").text());
            defender_hp = comp_defender.health_points;
            noDefender = false;

            // enemy defender
            $(this).attr("class", "defender");
            $("#defender").append(this);
            $("#result").empty();
        }
    });

    // step 4: Player attacks, defender loses hp, defender attacks user_char, user loses hp, 
    // increase player atk user_att_power, defender loss, player loss, if no defender,  game over, game not over

    // listen for attack button click and run function
    $("#attackButton").on("click"), function () {
        // if no defender, if game is not over
    }
});
