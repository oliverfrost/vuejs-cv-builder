import { defineStore } from 'pinia'
import { CANDIDATES } from '../../data/candidates/candidates'
import type { Candidate } from '@/models/candidate'
import { candidatesCollection } from '@/includes/firebase'
import { getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

export const useCandidatesStore = defineStore('candidates', {
  state: () => ({
    candidates: CANDIDATES
  }),
  actions: {
    async fetchCandidates() {
      try {
        const snapshot = await getDocs(candidatesCollection)

        this.candidates = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as unknown as Candidate[]
      } catch (e) {
        console.error('[useCandidatesStore] Failed to fetch list of candidates: ', e)
      } finally {
        // isLoading.value = false;
      }
    },
    async addCandidate(candidate: Candidate) {
      try {
        await addDoc(candidatesCollection, candidate)
      } catch (e) {
        console.error('[useCandidatesStore] Failed to add candidate:', e)
      }
    },
    async deleteCandidate(id: string) {
      try {
        await deleteDoc(doc(candidatesCollection, id))
      } catch (e) {
        console.error(`[[useCandidatesStore]] Failed to delete the candidate with ID ${id}:`, e)
      }
    }
  }
})
