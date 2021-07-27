import { getWalkers } from "./database.js" //getting access to the the walkers array data via the getWalkers function on the database module

document.addEventListener(  //element.event listener
    "click", //event being listened for 
    (clickEvent) => { //handler function, responds to the click event
        const itemClicked = clickEvent.target  //variable itemClicked is the target of the click event
        if (itemClicked.id.startsWith("walker")) { //if the user clicks something with an id property value starting with string "walker"
            const [,walkerId] = itemClicked.id.split("--") //then the id's value will be split into separate strings at the -- character ["walker--1"  ->  "walker--"   "1"   ->  const ["walker--", "1"]  ->  const [, "1"]  hint- mainjswalker function -> this module line 27

            for (const walker of walkers) { //for each object in the walkers array
                if (walker.id === parseInt(walkerId)) { //if the object's id value is strictly equal to the number part of the split above 
                    window.alert(`${walker.name} services ${walker.city}`)//then a window will open with this interpolated sentence
                }
            }
        }
    }
)


const walkers = getWalkers()  //calling the getWalkers function from the database module and referencing/storing it within the walkers variable on this module


export const Walkers = () => {  //defining a function Walkers that's data can potentially be imported into another module.  
    let walkerHTML = "<ul>" // instantiate a reassignable variable walkerHTML set to an empty unordered list starting bracket [will be built onto later to create list

    for (const walker of walkers) { //for each obj [refered to with variable 'walker'] in the walkers array (imported from database module line 1, stored in variable at line 20) iterate through the walker object
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`//reassign unordered list walker HTML to build onto itself adding interpolated sentences as list items that include each walker object's values for the id and name properties.

    }

    walkerHTML += "</ul>"  //build onto the existing value referenced by walkerHTML by adding the closing tag for the unordered list.
    return walkerHTML //javascript goes in and gets the current value referenced by walkerHTML so it can be used.
}

