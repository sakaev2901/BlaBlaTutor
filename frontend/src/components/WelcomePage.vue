<template>
  <app-header>
    <v-layout align-center justify-center column>
      <v-flex xs12 sm4 md3>
        <div>
          <v-layout column justify-center>
            <logo></logo>
            <span class="text-xs-center">
            <span>Краткое описание проекта</span>
          </span>
          </v-layout>

        </div>
      </v-flex>
      <img src="../assets/perfect.jpg">
      <v-flex xs12 sm4 md3>
        <div>
          <v-layout column justify-center>
            <v-btn color="#63d3f8" dark round to="/login">Войти</v-btn>
            <v-btn color="#63d3f8" dark round>Зарегистрироваться</v-btn>
          </v-layout>

        </div>
      </v-flex>
    </v-layout>
  </app-header>
</template>

<script>
  import Logo from "@/components/Logo";
  import AppHeader from "@/components/AppHeader";

  export default {
    name: "WelcomePage",
    components: {AppHeader, Logo}
  }
</script>

<style scoped>

</style>
