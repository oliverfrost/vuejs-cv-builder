<template>
  <h1>Create candidate</h1>

  <v-form ref="form" @submit.prevent="submit">
    <v-container class="w-100">
      <v-row>
        <v-col>
          <v-text-field
            label="First name"
            name="firstName"
            :rules="firstNameRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            label="Last name"
            name="lastName"
            :rules="lastNameRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Email" name="email" :rules="emailRules" required></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field label="Phone number" name="phoneNumber"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn text="Submit" type="submit"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<script lang="ts">
import { candidatesCollection, db } from '@/includes/firebase'
import { getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'

export default {
  name: 'AppCandidateView',
  data: () => ({
    firstNameRules: [
      (value: string) => {
        if (value) return true

        return 'First Name is required.'
      }
    ],
    lastNameRules: [
      (value: string) => {
        if (value) return true

        return 'Last Name is required.'
      }
    ],
    emailRules: [
      (value: string) => {
        if (value) return true

        return 'Email is required.'
      }
    ]
  }),
  methods: {
    async submit(event: SubmitEvent) {
      const formData = new FormData(event.target as HTMLFormElement)
      const candidate = Object.fromEntries(formData)
    }
  }
}
</script>
