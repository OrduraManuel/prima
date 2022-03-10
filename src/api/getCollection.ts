import { ref, watchEffect } from 'vue'

// firebase imports
import { db } from '../../src/api/config'
import { collection, onSnapshot } from 'firebase/firestore'

const getCollection = (c: any) => {
  const documents: any = ref(null);

  // collection reference
  let colRef = collection(db, c)

  const unsub = onSnapshot(colRef, snapshot => {
    let results: any = []
    snapshot.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
    })
    // update values
    documents.value = results
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents }
}

export default getCollection