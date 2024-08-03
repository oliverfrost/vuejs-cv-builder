<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet class="pa-4" color="grey-lighten-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

        <div>example@domain.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <!-- <v-icon :icon="mdiAccountGroup" /> -->

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :prepend-icon="icon"
          :title="text"
          :to="to"
          link
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Manatal Clone</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script lang="ts">
export default {
  data: () => ({
    drawer: null,
    links: [
      ['mdi-account-group', 'Candidates', 'candidates'],
      ['mdi-file-account', 'Templates', 'templates']
    ]
  })
}
</script>
