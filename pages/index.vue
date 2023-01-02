<template>
  <v-app-bar app>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Yorozu</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="n in 8" :key="n" cols="3">
          <v-card height="400"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
