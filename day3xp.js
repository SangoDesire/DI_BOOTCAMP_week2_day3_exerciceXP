const people = ["Greg", "Mary", "Devon", "James"];

/*Write code to remove “Greg” from the people array*/
people.delete("Greg");
/*Write code to replace “James” to “Jason”.*/
people.replace(James, "Jason");
/*Write code to add your name to the end of the people array.*/
people.push("koffi");
//Write code that console.logs Mary’s index. 
//take a look at the indexOf method on Google.
console.log(people.indexOf(Mary));

//Write code to make a copy of the people array using the slice method
const myBest = fruits.slice(0, 2, 3);

//Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(indexOf("Foo")) //it GIVE -1 becaus doesn't exist in people.
    //Create a variable called last which value is the last element of the array.
let last = James; //le premier element du tableau indice 0 alors le dernier element est donné longeur - 1

//PART II - LOOPS
//*Using a loop, iterate through the people array and console.log each person.*/
for (i = 0; i = people.length; + i++) {
    cosnole.log(indexOf(0), +"" + indexOf(1), +" " + indexOf(2), +" " + indexOf(3))
}

//*Using a loop, iterate through the people array and exit the loop after you console.log “Jason” *
for (i = 0; i <= people.length; i++) {
    if (i == "Jason")
        break
}
//EXERCICE 2 : Your Favorite Colors
//Create an array called colors where the value is a list of your five favorite colors
colors = ["blanc", "bleu", "rouge", "vert"]
for (i = 0; i <= colors.length; i++) {
    console.log("Mon choix N°1 est:" + colors[0] + " " + "Mon choix N° 2 est:" + " " +
        colors[1][1] + " " + "Mon choix N°3 est:" + " " + colors[2][2] + "Mon choix N° 4 est:" + "" +
        colors[2][2])
}

// EXERCICE 3 : Repeat The Question
//Prompt the user for a number.

console.log(typeof(a))
    //While the number is smaller than 10 continue asking the user for a new number
let a
do {
    a = prompt("Entrez un numero svp!")
} while (isNaN(a) || parseFloat(a) < 10 || parseInt(a) < 10)


//EXERCICE 4 : Building Management
//Copy and paste the above object to your Javascript file.
const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent: {
            sarah: [3, 990],
            dan: [4, 1000],
            david: [1, 500],
        },
    } //Console.log the number of floors in the building
console.log("numbers of floors is : " + "" + building.numberOfFloors)

//Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

//Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.david[1]) {
    building.numberOfRoomsAndRent.david[1] + 1200

}
// EXERCICE 5 : Family
//Create an object called family with a few key value pairs.
const family = {
    father: "koffi",
    mother: "judith",
    elder: "marcel",
    nephews: "saintClair"
}

//Using a for in loop, console.log the keys of the object.
for (const key in family) {
    console.log(key);
}
//À l' aide d'une for inboucle, console.log les valeurs de l'objet.
for (const key in family) {
    console.log(family[key]);
}


//EXERCICE 6 : Rodolphe
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let tp = ""
for (const key in details) {
    tp += key + " " + details[key]
}
console.log(tp);

//EXERCIEC 7 : Groupe Secret
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let societe = ""
for (const name of names) {
    societe += name.charAt(0)

}
let trie = societe.split("").sort()
let societeName = ""
for (const name of trie) {
    societeName += trie.charAt(0)

}
console.log(societeName)