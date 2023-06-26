document.addEventListener("DOMContentLoaded", function() {
    // JSON data
    const charactersData = {
      "characters": [
        {
          "id": 1,
          "name": "Mr. Cute",
          "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 2,
          "name": "Mx. Monkey",
          "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 3,
          "name": "Ms. Zebra",
          "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
          "votes": 0
        },
        {
          "id": 4,
          "name": "Dr. Lion",
          "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
          "votes": 0
        },
        {
          "id": 5,
          "name": "Mme. Panda",
          "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
          "votes": 0
        }
      ]
    };
  
    // Get the characterList container element
    const characterList = document.getElementById("characterList");
  
    // Loop through the characters and create elements to display them
    charactersData.characters.forEach(character => {
      // Create a div element for each character
      const characterDiv = document.createElement("div");
  
      // Create an image element and set its source
      const characterImage = document.createElement("img");
      characterImage.src = character.image;
  
      // Create a heading element and set its text content
      const characterName = document.createElement("h3");
      characterName.textContent = character.name;
  
      // Append the image and heading elements to the character div
      characterDiv.appendChild(characterImage);
      characterDiv.appendChild(characterName);
  
      // Append the character div to the characterList container
      characterList.appendChild(characterDiv);
    });
  });
  