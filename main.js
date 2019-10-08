alert("You are on a hike on the Kuliouou Ridge Trail in Honolulu, Hawai'i. You see something moving in the bushes near by on an alternate route to reach the top of the hike.")

var takeRoute = confirm("Do you want to check it out and take this way instead?")

if(takeRoute === true) {
    alert("You take the alternate route and realize it is a menehune motioning you to follow it.");

    var temple = prompt("The menehune walks you to their temples and you have to choose which temple to enter. Do you enter 1, 2, or 3?");
    
    if(temple == '1') {
        alert("You are ambushed by a bunch of menehune, they drag you by the legs and throw you off the cliffs of the hike. Congrats. You died.");
    } else if(temple == '2') {
    alert("You walk in and discover a vast amount of prisoner hikers. They scream at you to free them from the ropes of their bounded hands and legs, until you are faced with a mutant menehune charging at you.");

    var fight = confirm("Do you want to fight the mutant menehune back?"); 

    if(fight === true) {
        alert("Conveniently, there is a weapon strategically placed near by that somehow the prisoners could not get a hold of.");
        var weapon = prompt("Do you want to grab the spear or shield?");
        if(weapon == "spear") {
            alert("You grabbed the spear and successfully pierced the mutant menehune through its heart. You free everyone from their ropes, run the hell out of there and go on your merry ways to the top of the hike once again.");
        }
        
        else if (weapon == "shield") {
            alert("You grabbed the shield a little too late. The mutant menehune jumps on your back and dangles off you, wrapping its tiny arms around your neck and strangling you with its tribal necklace. You die of suffocation. Sorry.");
        }

    } else {
        alert("You turn around and sprint away from the temple as fast you can, avoiding the mutant menehune entirely and abandoning the prisoner hikers. You go back to taking the traditional route of the hike.");
    }


    
}else {
    alert("You entered temple 3 and magically teleported to the top of the hike. You are met by other hikers who are drenched in sweat and complaining that it took so long just to see a view of the entire Hawai'i Kai. You smirk to yourself in satisfaction and take a million photos of the view for your Instagram. Yay, you made it!");
}

}else {
    alert("You are boring and not a risk taker. You take the arduous, 3-4 hour way to the view of the top of the hike.");
}


