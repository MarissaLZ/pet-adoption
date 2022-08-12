import firebase from "./FirebaseConfig"

//Adds a favorite
export const handleAddLike = async (petFinderId) => {
  await firebase.firestore().collection("likes").add({
    petFirebaseId: petFinderId,
  })
}

//Deletes a favorite
export const handleDelete = async (petFinderId) => {
  const snapshot = await firebase
    .firestore()
    .collection("likes")
    .limit(1)
    .where("petFirebaseId", "==", petFinderId)
    .get()

  const doc = snapshot.docs[0]
  doc.ref.delete()
}
