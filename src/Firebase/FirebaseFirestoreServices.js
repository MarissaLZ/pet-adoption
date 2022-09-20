import firebase from "./FirebaseConfig"

//Adds a favorite
//handleAddLike functions receives petObject and userUid from userProfile state
export const handleAddLike = async (pet, userUid) => {
  //must use pet id as a string and NOT a number
  await firebase
    .firestore()
    .collection("users")
    .doc(userUid)
    .collection("favorites")
    .doc(pet.id.toString())
    .set({
      id: pet.id,
      breeds: pet.breeds,
      age: pet.age,
      name: pet.name,
      distance: pet.distance,
      photos: pet.photos,
    })
}

//Deletes favorite
export const handleDelete = async (pet, userUid) => {
  const snapshot = await firebase
    .firestore()
    .collection("users")
    .doc(userUid)
    .collection("favorites")
    .limit(1)
    .where("id", "==", pet.id)
    .get()

  const doc = snapshot.docs[0]
  doc.ref.delete()
}
