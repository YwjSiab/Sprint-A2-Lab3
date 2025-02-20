// Declare an array named animals containing multiple objects
const animals = [
    { id: 1, name: 'Max', age: 5, breed: 'Labrador' },
    { id: 2, name: 'Bella', age: 3, breed: 'Bulldog' },
    { id: 3, name: 'Charlie', age: 4, breed: 'Beagle' }
  ];
  
  // Log the name of each animal in the console
  animals.forEach(animal => console.log('Animal name:', animal.name));
  
  // Update the age of a specific animal (e.g., 'Bella') and log the updated array
  animals.forEach(animal => {
    if (animal.name === 'Bella') {
      animal.age = 4;
    }
  });
  
  // Add a new property gender to each animal object, set to 'male' or 'female'
  animals.forEach(animal => {
    animal.gender = animal.name === 'Bella' ? 'female' : 'male';
  });
  console.log('Animals array with gender and age property:', animals);
  
  // Filter out animals with gender set to 'male' and log to console
  const females = animals.filter(animal => animal.gender === 'female');
  console.log('Female animals:', females);
  
  // Search for an animal by name and log them to the console
  const searchName = 'Charlie';
  const foundAnimal = animals.find(animal => animal.name === searchName);
  console.log('Searched animal:', foundAnimal);
  