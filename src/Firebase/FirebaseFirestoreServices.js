import firebase from "./FirebaseConfig"

//Adds a favorite
export const handleAddLike = async (pet) => {
  console.log("handleAdd Like Pet", pet.id)
  //must use pet id as a string and NOT a number
  await firebase.firestore().collection("likes").doc(pet.id.toString()).set({
    id: pet.id,
    breeds: pet.breeds,
    age: pet.age,
    name: pet.name,
    distance: pet.distance,
    photos: pet.photos,
    //pet,
  })
}

//Deletes a favorite
export const handleDelete = async (pet) => {
  console.log("Handle delete")
  const snapshot = await firebase
    .firestore()
    .collection("likes")
    .limit(1)
    .where("id", "==", pet.id)
    .get()

  const doc = snapshot.docs[0]
  doc.ref.delete()
}
