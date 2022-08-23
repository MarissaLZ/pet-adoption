
function sortPetList(animalType, zipcode, sortParam) {
    return (
        fetch("https://api.petfinder.com/v2/oauth2/token", {
            body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_PETFINDER_API_KEY}&client_secret=${process.env.REACT_APP_PETFINDER_CLIENT_SECRET}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
            .then((response) => response.json())
            .then((result) =>
                fetch(`https://api.petfinder.com/v2/animals?type=${animalType}&location=${zipcode}&${sortParam}`, {
                    headers: {
                        Authorization: `Bearer ${result.access_token}`
                    }
                })
                    .then((response) => response.json())
            )
    )
}

export default sortPetList