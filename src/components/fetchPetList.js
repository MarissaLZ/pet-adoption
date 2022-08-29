//fetchPetList is a function that accepts userZipCode to get a list of 20 animals based on the users location
function fetchPetList(zipcode, animalType, sortParam, pageNumber) {
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_API_KEY}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((result) =>
      //check for animal type with ternary ? :
      fetch(
        `https://api.petfinder.com/v2/animals?${animalType ? `type=${animalType}` : ""}${
          zipcode ? `&location=${zipcode}` : ""}${
            sortParam ? `&sort=${sortParam}` : ""}${
              pageNumber ? `&page=${pageNumber}` : ""}`,
        {
          headers: {
            Authorization: `Bearer ${result.access_token}`,
          },
        }
      ).then((response) => response.json())
    )
}

export default fetchPetList
