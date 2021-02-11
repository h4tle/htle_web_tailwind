<template>
  <div v-if="Users">
      <div :key="key" v-for="(user, key) in Users">
        <h3>{{ user.FirstName }} </h3>
        <h4>{{ user.Email }}</h4>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["getUsers"]),
  },
  components: {},
  name: "Users",

  computed: {
    ...mapGetters(["Users"]),
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>

</style>