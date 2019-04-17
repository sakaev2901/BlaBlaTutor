<template>
    <v-app id="inspire">
      <v-navigation-drawer
        style="background-color: rgb(0, 184, 244)"
        dark
        disable-resize-watcher
        fixed
        v-model="drawer"
        right
        app

      >
        <v-list dense>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>perm_identity</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Личный кабинет</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>help_outline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Помощь</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>accessible</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>О нас</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Выйти</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="#00b8f4" dark fixed app>
        <v-icon>aspect_ratio</v-icon>
        <v-toolbar-title>BlaBlaTutor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon flat>
          <v-icon>home</v-icon>
        </v-btn>

        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>

</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
