function start() {
    alert("Find XP amounts on the wiki (https://payday.fandom.com/wiki/Reputation_(Payday_2)/Experience_table) ")
    var levelXP = prompt("What level's XP are you right now?" )
    document.write('Starting XP: ' + levelXP)
    document.write ("<br>")
    var toLevelXP = prompt("What is your desired level's XP?" )
    document.write('Ending XP: ' + toLevelXP)
    document.write ("<br>")
    var infamyBonusPre = prompt("What is your infamy bonus at? (If it's 10%, put '10' for example)" )
    var infamyBonus = infamyBonusPre / 100
    document.write('Infamny Bonus: ' + infamyBonusPre + '%')
    document.write ("<br>")
    var diff = prompt("What difficulty do you want to play on?" )
    document.write('Difficulty: ' + diff)
    document.write ("<br>")
    var heist = prompt("Which heist?" )
    document.write('Heist: ' + heist)
    document.write ("<br>")

    if(heist == "Cook Off") {
        cookOffXP(levelXP, infamyBonus, toLevelXP, diff)
    }
}

function cookOffXP(levelXP, infamyBonus, toLevelXP, diff) {
    var multiples
    var checkDiff = diff

    if(checkDiff == "Normal") {
        multiples = 1
    }else if(checkDiff == "Hard") {
        multiples = 2
    }else if(checkDiff == "Very Hard") {
        multiples = 5
    }else if(checkDiff == "Overkill") {
        multiples = 10
    }else if(checkDiff == "Mayhem") {
        multiples = 11.5
    }else if(checkDiff == "Death Wish") {
        multiples = 13
    }else if(checkDiff == "Death Sentence") {
        multiples = 14
    }
    if(toLevelXP <= levelXP) {
        alert("Your desired XP is lower than your current XP." )
    }
    if(infamyBonus == 0) {
        infamyBonus = 1
    }
    var needed = toLevelXP - levelXP
    bagCalculator(needed, multiples, infamyBonus)

}

function bagCalculator(needed, multiples, infamyBonus) {
    var perBag = 8000 * multiples
    perBag = (perBag * (infamyBonus / 100)) + perBag
    var bags = (needed / perBag) + 1
    var roundedBags = Math.round(bags)
    document.write ("<br>")
    document.write('Total Bags: ' + roundedBags)

}

start()