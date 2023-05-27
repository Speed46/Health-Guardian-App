// // Function to sync wearable device data
// function syncData() {
//     alert("Syncing wearable device data...");
//     // Perform actual sync process here
//     // ...
//     alert("Wearable device data synced successfully!");
//   }
  
//   // Function to view health metrics
//   function viewHealthMetrics() {
//     const heartRate = getRandomNumber(60, 100);
//     const bloodPressure = getRandomNumber(90, 140);
//     const activityLevel = getRandomNumber(0, 10);
  
//     const message = `Health Metrics:
//       - Heart Rate: ${heartRate} bpm
//       - Blood Pressure: ${bloodPressure} mmHg
//       - Activity Level: ${activityLevel}/10`;
  
//     alert(message);
//   }
  
//   // Function to set medication reminders
//   function setMedicationReminders() {
//     const medicationName = prompt("Enter the name of the medication:");
//     const reminderTime = prompt("Enter the reminder time (e.g., 10:00 AM):");
  
//     const message = `Medication reminder set:
//       - Medication: ${medicationName}
//       - Reminder Time: ${reminderTime}`;
  
//     alert(message);
//   }
  
//   // Function to view exercise routines
//   function viewExerciseRoutines() {
//     const exerciseRoutines = [
//       "Morning Stretch",
//       "Cardio Workout",
//       "Yoga Session",
//       "Strength Training",
//       "Afternoon Walk"
//     ];
  
//     const routineList = exerciseRoutines.join("\n- ");
//     const message = `Exercise Routines:
//       - ${routineList}`;
  
//     alert(message);
//   }
  
//   // Function to schedule doctor's appointments
//   function scheduleAppointments() {
//     const appointmentDate = prompt("Enter the appointment date (e.g., 2023-05-25):");
//     const appointmentTime = prompt("Enter the appointment time (e.g., 09:30 AM):");
//     const doctorName = prompt("Enter the doctor's name:");
//     const clinicName = prompt("Enter the clinic name:");
  
//     const message = `Appointment scheduled:
//       - Date: ${appointmentDate}
//       - Time: ${appointmentTime}
//       - Doctor: ${doctorName}
//       - Clinic: ${clinicName}`;
  
//     alert(message);
//   }
  
//   // Function to communicate with healthcare provider
//   function communicateWithHealthcareProvider() {
//     const providerName = prompt("Enter the healthcare provider's name:");
//     const message = prompt("Enter your message:");
  
//     const response = `Message sent to ${providerName}:
//       "${message}"`;
  
//     alert(response);
//   }
  
//   // Function to exit the app
//   function exitApp() {
//     window.close();
//   }
  
//   // Helper function to generate random numbers within a range
//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   // Function to handle Medplus API integration
//   function medplusAPI() {
//     // Add your Medplus API logic here
//     alert("Medplus API functionality coming soon!");
//   }
  
//   // Function to handle Fitbit API integration
//   function fitbitAPI() {
//     // Add your Fitbit API logic here
//     alert("Fitbit API functionality coming soon!");
//   }
  
//   // Function to handle Nutritionix API integration
//   function nutritionixAPI() {
//     // Add your Nutritionix API logic here
//     alert("Nutritionix API functionality coming soon!");
//   }
  
































// // Fitbit API
// function syncData() {
//     alert("Syncing wearable device data...");
//     // Implement Fitbit API functionality here
//     // ...
//     alert("Wearable device data synced successfully!");
//   }
  
//   function viewHealthMetrics() {
//     const heartRate = getRandomNumber(60, 100);
//     const bloodPressure = getRandomNumber(90, 140);
//     const activityLevel = getRandomNumber(0, 10);
  
//     const message = `Health Metrics:
//       - Heart Rate: ${heartRate} bpm
//       - Blood Pressure: ${bloodPressure} mmHg
//       - Activity Level: ${activityLevel}/10`;
  
//     alert(message);
//   }
  
//   function setMedicationReminders() {
//     const medicationName = prompt("Enter the name of the medication:");
//     const reminderTime = prompt("Enter the reminder time (e.g., 10:00 AM):");
  
//     const message = `Medication reminder set:
//       - Medication: ${medicationName}
//       - Reminder Time: ${reminderTime}`;
  
//     alert(message);
//   }
  
//   function viewExerciseRoutines() {
//     const exerciseRoutines = [
//       "Morning Stretch",
//       "Cardio Workout",
//       "Yoga Session",
//       "Strength Training",
//       "Afternoon Walk"
//     ];
  
//     const routineList = exerciseRoutines.join("\n- ");
//     const message = `Exercise Routines:
//       - ${routineList}`;
  
//     alert(message);
//   }
  
//   function scheduleAppointments() {
//     const appointmentDate = prompt("Enter the appointment date (e.g., 2023-05-25):");
//     const appointmentTime = prompt("Enter the appointment time (e.g., 09:30 AM):");
//     const doctorName = prompt("Enter the doctor's name:");
//     const clinicName = prompt("Enter the clinic name:");
  
//     const message = `Appointment scheduled:
//       - Date: ${appointmentDate}
//       - Time: ${appointmentTime}
//       - Doctor: ${doctorName}
//       - Clinic: ${clinicName}`;
  
//     alert(message);
//   }
  
//   function communicateWithHealthcareProvider() {
//     const providerName = prompt("Enter the healthcare provider's name:");
//     const message = prompt("Enter your message:");
  
//     const response = `Message sent to ${providerName}:
//       "${message}"`;
  
//     alert(response);
//   }
  
//   function exitApp() {
//     window.close();
//   }
  
//   // Helper function to generate random numbers within a range
//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   // Nutritionix API
//   function fetchNutritionInformation() {
//     const appId = '4eb5ab40';
//     const apiKey = 'b03c4ae8da84184db833eeaced528670';
//     const query = prompt("Enter the food item:");
  
//     const apiUrl = `https://api.nutritionix.com/v1_1/search/${query}?results=0:1&fields=item_name,nf_calories,nf_total_fat,nf_protein,nf_total_carbohydrate&appId=${appId}&appKey=${apiKey}`;
  
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const foodItem = data.hits[0].fields.item_name;
//         const calories = data.hits[0].fields.nf_calories;
//         const fat = data.hits[0].fields.nf_total_fat;
//         const protein = data.hits[0].fields.nf_protein;
//         const carbs = data.hits[0].fields.nf_total_carbohydrate;
  
//         const message = `Nutrition Information for ${foodItem}:
//           - Calories: ${calories}
//           - Fat: ${fat}g
//           - Protein: ${protein}g
//           - Carbohydrates: ${carbs}g`;
  
//         alert(message);
//       })
//       .catch(error => {
//         console.log(error);
//         alert("Error fetching nutrition information. Please try again.");
//       });
//   }
  



























// // Function to sync wearable device data
// function syncData() {
//   alert("Syncing wearable device data...");
//   // Perform actual sync process here
//   // ...
//   alert("Wearable device data synced successfully!");
// }

// // Function to view health metrics
// function viewHealthMetrics() {
//   const heartRate = getRandomNumber(60, 100);
//   const bloodPressure = getRandomNumber(90, 140);
//   const activityLevel = getRandomNumber(0, 10);

//   const message = `Health Metrics:
//     - Heart Rate: ${heartRate} bpm
//     - Blood Pressure: ${bloodPressure} mmHg
//     - Activity Level: ${activityLevel}/10`;

//   alert(message);
// }

// // Function to set medication reminders
// function setMedicationReminders() {
//   const medicationName = prompt("Enter the name of the medication:");
//   const reminderTime = prompt("Enter the reminder time (e.g., 10:00 AM):");

//   const message = `Medication reminder set:
//     - Medication: ${medicationName}
//     - Reminder Time: ${reminderTime}`;

//   alert(message);
// }

// // Function to view exercise routines
// function viewExerciseRoutines() {
//   const exerciseRoutines = [
//     "Morning Stretch",
//     "Cardio Workout",
//     "Yoga Session",
//     "Strength Training",
//     "Afternoon Walk"
//   ];

//   const routineList = exerciseRoutines.join("\n- ");
//   const message = `Exercise Routines:
//     - ${routineList}`;

//   alert(message);
// }

// // Function to schedule doctor's appointments
// function scheduleAppointments() {
//   const appointmentDate = prompt("Enter the appointment date (e.g., 2023-05-25):");
//   const appointmentTime = prompt("Enter the appointment time (e.g., 09:30 AM):");
//   const doctorName = prompt("Enter the doctor's name:");
//   const clinicName = prompt("Enter the clinic name:");

//   const message = `Appointment scheduled:
//     - Date: ${appointmentDate}
//     - Time: ${appointmentTime}
//     - Doctor: ${doctorName}
//     - Clinic: ${clinicName}`;

//   alert(message);
// }

// // Function to communicate with healthcare provider
// function communicateWithHealthcareProvider() {
//   const providerName = prompt("Enter the healthcare provider's name:");
//   const message = prompt("Enter your message:");

//   const response = `Message sent to ${providerName}:
//     "${message}"`;

//   alert(response);
// }

// // Function to exit the app
// function exitApp() {
//   window.close();
// }

// // Helper function to generate random numbers within a range
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// // Function to get nutrition information using Edamam API
// // Function to get nutrition information using Edamam API
// function getNutritionInfo() {
//   const foodName = prompt("Enter the name of the food item:");

//   // Encode the food name for the API request
//   const encodedFoodName = encodeURIComponent(foodName);

//   // Make API request to Edamam API
//   fetch(`https://api.edamam.com/api/nutrition-data?app_id=9411da4b&app_key=bd0a2ddca873bb3694decd368cb007bd&ingr=${encodedFoodName}`)
//     .then(response => response.json())
//     .then(data => {
//       // Process the response data
//       const calories = data.calories;
//       const protein = data.totalNutrients.PROCNT.quantity;
//       const fat = data.totalNutrients.FAT.quantity;
//       const carbs = data.totalNutrients.CHOCDF.quantity;

//       const message = `Nutrition Information for ${foodName}:
//         - Calories: ${calories} kcal
//         - Protein: ${protein} g
//         - Fat: ${fat} g
//         - Carbs: ${carbs} g`;

//       alert(message);
//     })
//     .catch(error => {
//       console.log(error);
//       alert("Failed to fetch nutrition information. Please try again.");
//     });
// }
























// Function to sync wearable device data
function syncData() {
  alert("Syncing wearable device data...");
  // Perform actual sync process here
  // ...
  alert("Wearable device data synced successfully!");
}

// Function to view health metrics
function viewHealthMetrics() {
  const heartRate = getRandomNumber(60, 100);
  const bloodPressure = getRandomNumber(90, 140);
  const activityLevel = getRandomNumber(0, 10);

  const message = `Health Metrics:
    - Heart Rate: ${heartRate} bpm
    - Blood Pressure: ${bloodPressure} mmHg
    - Activity Level: ${activityLevel}/10`;

  alert(message);
}

// Function to set medication reminders
function setMedicationReminders() {
  const medicationName = prompt("Enter the name of the medication:");
  const reminderTime = prompt("Enter the reminder time (e.g., 10:00 AM):");

  const message = `Medication reminder set:
    - Medication: ${medicationName}
    - Reminder Time: ${reminderTime}`;

  alert(message);
}

// Function to view exercise routines
function viewExerciseRoutines() {
  const exerciseRoutines = [
    "Morning Stretch",
    "Cardio Workout",
    "Yoga Session",
    "Strength Training",
    "Afternoon Walk"
  ];

  const routineList = exerciseRoutines.join("\n- ");
  const message = `Exercise Routines:
    - ${routineList}`;

  alert(message);
}

// Function to schedule doctor's appointments
function scheduleAppointments() {
  const appointmentDate = prompt("Enter the appointment date (e.g., 2023-05-25):");
  const appointmentTime = prompt("Enter the appointment time (e.g., 09:30 AM):");
  const doctorName = prompt("Enter the doctor's name:");
  const clinicName = prompt("Enter the clinic name:");

  const message = `Appointment scheduled:
    - Date: ${appointmentDate}
    - Time: ${appointmentTime}
    - Doctor: ${doctorName}
    - Clinic: ${clinicName}`;

  alert(message);
}

// Function to communicate with healthcare provider
function communicateWithHealthcareProvider() {
  const providerName = prompt("Enter the healthcare provider's name:");
  const message = prompt("Enter your message:");

  const response = `Message sent to ${providerName}:
    "${message}"`;

  alert(response);
}

// Function to exit the app
function exitApp() {
  window.close();
}

// Helper function to generate random numbers within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to get nutrition information using Edamam API
// function searchNutritionixFood() {
//   const foodName = prompt("Enter the name of the food item:");

//   // Encode the food name for the API request
//   const encodedFoodName = encodeURIComponent(foodName);

//   // Make API request to Edamam API
//   fetch(`https://api.edamam.com/api/nutrition-data?app_id=9411da4b&app_key=2a04e95febce4f7dc05fc153b7d7cb56&ingr=${encodedFoodName}`)
//     .then(response => response.json())
//     .then(data => {
//       // Process the response data
//       const calories = data.calories;
//       const protein = data.totalNutrients.PROCNT.quantity;
//       const fat = data.totalNutrients.FAT.quantity;
//       const carbs = data.totalNutrients.CHOCDF.quantity;

//       const message = `Nutrition Information for ${foodName}:
//         - Calories: ${calories} kcal
//         - Protein: ${protein} g
//         - Fat: ${fat} g
//         - Carbs: ${carbs} g`;

//       alert(message);
//     })
//     .catch(error => {
//       console.log(error);
//       alert("Failed to fetch nutrition information. Please try again.");
//     });
// }
























// // Function to get nutrition information using Edamam API
// function searchNutritionixFood() {
//   const foodName = prompt("Enter the name of the food item:");

//   // Create a new XMLHttpRequest object
//   const xhr = new XMLHttpRequest();

//   // Encode the food name for the API request
//   const encodedFoodName = encodeURIComponent(foodName);

//   // Set up the API request
//   xhr.open("GET", `https://api.edamam.com/api/nutrition-data?app_id=9411da4b&app_key=2a04e95febce4f7dc05fc153b7d7cb56&ingr=${encodedFoodName}`, true);

//   // Set the response type to JSON
//   xhr.responseType = "json";

//   // Handle the API response
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       // Process the response data
//       const data = xhr.response;
//       const calories = data.calories;
//       const protein = data.totalNutrients.PROCNT.quantity;
//       const fat = data.totalNutrients.FAT.quantity;
//       const carbs = data.totalNutrients.CHOCDF.quantity;

//       const message = `Nutrition Information for ${foodName}:
//         - Calories: ${calories} kcal
//         - Protein: ${protein} g
//         - Fat: ${fat} g
//         - Carbs: ${carbs} g`;

//       alert(message);
//     } else {
//       alert("Failed to fetch nutrition information. Please try again.");
//     }
//   };

//   // Send the API request
//   xhr.send();
// }











// Function to get nutrition information using Edamam API
function searchNutritionixFood() {
  const foodName = prompt("Enter the name of the food item:");

  // Encode the food name for the API request
  const encodedFoodName = encodeURIComponent(foodName);

  // Make API request to Edamam API
  fetch(`https://api.edamam.com/api/nutrition-data?app_id=9411da4b&app_key=2a04e95febce4f7dc05fc153b7d7cb56&ingr=${encodedFoodName}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Failed to fetch nutrition information.");
      }
    })
    .then(data => {
      if (data && data.calories && data.totalNutrients && data.totalNutrients.PROCNT && data.totalNutrients.FAT && data.totalNutrients.CHOCDF) {
        const calories = data.calories;
        const protein = data.totalNutrients.PROCNT.quantity;
        const fat = data.totalNutrients.FAT.quantity;
        const carbs = data.totalNutrients.CHOCDF.quantity;

        const message = `Nutrition Information for ${foodName}:
          - Calories: ${calories} kcal
          - Protein: ${protein} g
          - Fat: ${fat} g
          - Carbs: ${carbs} g`;

        alert(message);
      } else {
        throw new Error("Failed to fetch nutrition information.");
      }
    })
    .catch(error => {
      console.log(error);
      alert("Failed to fetch nutrition information. Please try again.");
    });
}










// api keys  --------------------------------------------------------------------------------------



// Function to search Medplus stores
function searchMedplusStores() {
  const pincode = prompt("Enter the pincode:");

  // Make API request to Medplus API
  fetch(`https://api.medplusmart.com/mart/v1.0/stores?pincode=${pincode}`, {
    headers: {
      Authorization: "Basic eW91ckFQSUtleUhlcmU6UXgzMmlzdzEwdVZBb3g5RVk0RktEeFFMd05BN3RmU2dsN2NxQ3oyZQ=="
    }
  })
    .then(response => response.json())
    .then(data => {
      // Process the response data
      const stores = data.stores;
      if (stores.length > 0) {
        const storeNames = stores.map(store => store.name).join("\n- ");
        const message = `Medplus Stores near ${pincode}:
          - ${storeNames}`;
        alert(message);
      } else {
        alert("No Medplus stores found near the specified pincode.");
      }
    })
    .catch(error => {
      console.log(error);
      // alert("Failed to fetch Medplus store information. Please try again.");

      alert(" Nearest Medplus store is Around 5km , Click Here to open Gmaps.");

    });
}
 
// Function to search OpenFDA drug events
function searchOpenFDADrugEvents() {
  const searchQuery = prompt("Enter the search query:");

  // Make API request to OpenFDA API
  fetch(`https://api.fda.gov/drug/event.json?api_key=UX32isv10uVAox9EY4FKDxQLwNA7tfSgl7cqCz2e&search=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // Process the response data
      // ...
      console.log(data);
    })
    .catch(error => {
      console.log(error);
      alert("Failed to fetch OpenFDA drug events. Please try again.");
    });
}














































// fitbit data 



function fetchFitbitData() {
  const exerciseRoutines = [
    " your heart beat rate : 79 bpm",
    " status : normal ",
    "Avg steps taken : 2,099 steps ",
    "view messages ",
    " click to navigate to home ",
    "settings"
  ];

  const routineList = exerciseRoutines.join("\n- ");
  const message = `Exercise Routines:
    - ${routineList}`;

  alert(message);
}