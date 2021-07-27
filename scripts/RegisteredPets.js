import { getPets } from "./database.js" //getting access to the the pets array state via the getPets function on the database module
import { getWalkers } from "./database.js" //getting access to the the walkers array state via the getWalkers function on the database module

const pets = getPets() //pets is the reference for the pet array state from database module
const walkers = getWalkers() //walkers is the reference for the walkers array state from database module


document.addEventListener(  //1. Instantiate new event listener on the document 
    "click", //2. Set the .addEventListener to listen for a single mouse click
   
    (clickEvent) => { //3.  handler function, responds to the click event
        const itemClicked = clickEvent.target  // 4. Instantiate variable itemClicked to reference the target of the click event
       
        if (itemClicked.id.startsWith("pet")) { //5. Check for condition: is did the user click an html element with an id that begins with the string "pet" ?
            const [,currentPetId] = itemClicked.id.split("--") //6. If step 5 condition was met, then the id's value will be split into separate strings at the -- character an put into an array ["pet--", "id#"].Reference the second string from that array with the variable currentPetId
           
            for (const pet of pets) { //7. Instantiate a for loop to iterate through objects in the pets array
                if (pet.id === parseInt(currentPetId)) { //8. Parse the string referenced by currentPetId into a number data type.  Check for condition: does that value strictly match the value of the id property in the pet object?  If it does, move on to step 9.
                   
                    for(const walker of walkers) { //9. Instantiate a nested for loop to iterate through each object in the walkers array.
                        if (walker.id === pet.walkerId ){ //10.  Check for condition: does the walker object's id property valie strictly match the pet object's walkerId value?  If it does, move on to step 11.
                            window.alert(`${pet.name} is being walked by ${walker.name}`)//11. Instantiate a window alert to appear for the user.  The window will display an interpolated sentence that uses the pet's name and the walker's name from the database.js state.
                        }
                    }
                }
            }
        }
    }
)
export const RegisteredPets = () => { //instantiate function RegisteredPets to create an unordered list using pet state  
    let petHTML = "<ul>" //instantiate reassignable variable petHTML to reference the unordered list
    for (const pet of pets) { //iterate through the objects in the pet array
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>` //while iterating the array, create interpolated sentences using array object state to be used as list items. Label the list items with an id to be used in the click event above.  Assign the list items to petHTML as a growing list.
    }
    petHTML += "</ul>" //assign the closing unordered list tag to the end of the data referenced by petHTML/
    return petHTML //have the function retreive the data referenced by petHTML (Now a fully formed unordered list to display pet names to the user)
}

