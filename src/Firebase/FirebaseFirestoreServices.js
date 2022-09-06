import firebase from "./FirebaseConfig"

//working with subcollection
// export const handleAddLike1 = async (petFinderId) => {
//   await firebase
//     .firestore()
//     .collection("users")
//     .doc("kiVt67ScueewYDxUM2qiZspf3e73")
//     .collection("favorites")
//     .doc(petFinderId.toString())
//     .set({
//       petFirebaseId: petFinderId,
//       name: "working on user-favorite-subcollection branch",
//     })
// }

//Adds a favorite
export const handleAddLike = async (pet, userUid) => {
  console.log("userUid", userUid)
  console.log("handleAdd Like Pet", pet.id)
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
      //pet,
    })
}

export const handleDelete = async (pet, userUid) => {
  console.log("Handle delete")
  const snapshot = await firebase
    .firestore()
    .collection("users")
    .doc(userUid)
    .collection("favorites")
    .limit(1)
    .where("id", "==", pet.id)
    .get()

  console.log("snapshot", snapshot)
  const doc = snapshot.docs[0]
  doc.ref.delete()
}

//Deletes a favorite

// }

// //Deletes a favorite
// export const handleDelete = async (pet) => {
//   console.log("Handle delete")
//   const snapshot = await firebase
//     .firestore()
//     .collection("likes")
//     .limit(1)
//     .where("id", "==", pet.id)
//     .get()
