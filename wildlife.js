/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackSightings(...animals){
	animals.forEach(animal => {
		console.log(`Sighted: ${animal}`);
	});
}

trackSightings("Elephant", "Lion", "Wolf", "Rhino");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const allHabitats = [...forestHabitats, ...savannahHabitats];

console.log(allHabitats);

// which prints all the habitats forest A, Forest B, Savannah C and savannah D.

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 550, // Updated Number
	habitat: "Savannah" // Added habitat
};

console.log(updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const LionGeneticProfile = {
	...lionProfile,
	genetics: "High Diversity"
};

console.log(LionGeneticProfile);


/*
 * Observations:
 * TODO: Explain here.
 // Even though I made a copy , its a shallow copy.
 If there were nested objects inside, changes to the nested parts would affect both the original and the copy,
 spread only makes a shallow copy not a deep one.
 */


/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
//Shallow Copy
const copiedEcosystem = { ...ecosystemHealth };

// Modify a nested property
copiedEcosystem.foodSupply.herbivores = "Decreasing";

console.log("Original Ecosystem:", ecosystemHealth);
console.log("Copied Ecosystem:", copiedEcosystem);
/*
 * Observations:
 * TODO: Explain here.
 * Because the copy is shallow, nested objects like `foodSupply`are still shared between the original and the copy.
 * Changing a nested property affects both objects.
 */

