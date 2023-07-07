// Sample animal data
const animals = [
    { id: 1, name: "Mr. Cute", image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif", votes: 0 },
    { id: 2, name: "Mx. Monkey", image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif", votes: 0 },
    { id: 3, name: "Ms. Zebra", image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif", votes: 0 },
    { id: 4, name: "Dr. Lion", image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif", votes: 0 },
    { id: 5, name: "Mme. Panda", image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif", votes: 0 },
  ];
  
  // Function to populate the animal list
  function populateAnimalList() {
    const animalList = document.getElementById("animal-list");
  
    animals.forEach(animal => {
      const listItem = document.createElement("li");
      listItem.textContent = animal.name;
      listItem.addEventListener("click", () => showAnimalDetails(animal.id));
      animalList.appendChild(listItem);
    });
  }
  
  // Function to show the animal details
  function showAnimalDetails(animalId) {
    const animalDetails = document.getElementById("animal-details");
    const animal = animals.find(animal => animal.id === animalId);
  
    animalDetails.innerHTML = `
      <h3>${animal.name}</h3>
      <img src="${animal.image}" alt="${animal.name}">
      <p>Votes: ${animal.votes}</p>
    `;
  }
  
  // Function to add votes for an animal
  function addVotes(animalId) {
    const animal = animals.find(animal => animal.id === animalId);
    animal.votes++;
    showAnimalDetails(animalId);
  }
  
  // Function to reset votes for all animals
  function resetVotes() {
    animals.forEach(animal => animal.votes = 0);
    showAnimalDetails(1); // Show details of the first animal
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const animalNameInput = document.getElementById("animal-name");
    const animalName = animalNameInput.value;
    const animalId = animals.length + 1; // Generate a new unique ID
    const newAnimal = { id: animalId, name: animalName, votes: 0 };
    animals.push(newAnimal);
    animalNameInput.value = ""; // Reset input field
    populateAnimalList();
  }
  
  // Event listeners
  document.getElementById("reset-button").addEventListener("click", resetVotes);
  document.getElementById("add-animal-form").addEventListener("submit", handleFormSubmit);
  
  // Initialize the application
  populateAnimalList();
  showAnimalDetails(1); // Show details of the first animal