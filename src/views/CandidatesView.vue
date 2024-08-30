<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" align-self="center">
        <header class="header">
          <h1>Candidates</h1>

          <v-btn :prepend-icon="'mdi-plus'" href="candidates/create">Add new</v-btn>
        </header>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="candidates">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Last Name</th>
                <th class="text-left">Email</th>
                <th class="text-left">Skills</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="candidate in store.candidates" :key="candidate.email">
                <td>{{ candidate.firstName }}</td>
                <td>{{ candidate.lastName }}</td>
                <td>{{ candidate.email }}</td>
                <td>
                  <v-btn density="compact" icon="mdi-pencil"></v-btn>
                </td>
                <td>
                  <v-btn density="compact" icon="mdi-file-download"></v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>

<script setup lang="ts">
import { useCandidatesStore } from '../stores/candidates'

const store = useCandidatesStore()

store.fetchCandidates()
</script>

<script lang="ts">
export default {
  name: 'AppCandidatesView',
  data: () => ({})
}
</script>
