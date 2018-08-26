var crystal = {
    blue:
    {
        name: "blue",
        value: 0
    },

    purple:
    {
        name: "purple",
        value: 0
    },
    green:
    {
        name: "green",
        value: 0
    },
    orange:
    {
        name: "orange",
        value:0
    }
};


var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

var getRandom = function(min, max){
    return Math.floor((Math.random() * max-min +1) + min);
};

var initGame = function(){
        currentScore = 0;
        targetNumber = getRandom(19, 120);
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".userScore").html(currentScore);
};


    crystal.blue.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.orange.value = getRandom(1,12);

    console.log("blue:" + crystal.blue.value);
    console.log("purple:" + crystal.purple.value);
    console.log("green:" + crystal.green.value);
    console.log("orange:" + crystal.orange.value);

    var crystalValue = function(crystal){
        currentScore = currentScore + crystal.value;
        $("#userScore").html(currentScore);

        checkWins();
    }
var checkWins = function(){
    if(currentScore > targetNumber){
        alert("you lost");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        initGame();
    }
else if(currentScore === targetNumber){
    alert("you won");
    console.log("you won");
    win++;
    $("#win").html(win);
    initGame();
}
};

initGame();
    $("#blue").on("click", function(){
        crystalValue(crystal.blue);
    console.log(crystalValue);
   
});

$("#green").on("click", function(){
    crystalValue(crystal.green);
    console.log(crystalValue);
   
});

$("#purple").on("click", function(){
    crystalValue(crystal.purple);
    console.log(crystalValue);
   
});

$("#orange").on("click", function(){
    crystalValue(crystal.orange);
    console.log(crystalValue);
    
});