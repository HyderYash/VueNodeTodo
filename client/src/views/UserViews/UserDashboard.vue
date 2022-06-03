<template>
  <div>
    <v-tabs v-model="currentTab" background-color="indigo" centered dark>
      <v-tabs-slider></v-tabs-slider>

      <v-tab> Tab1 </v-tab>
      <v-tab> Stats </v-tab>
      <v-tab> Tab 3 </v-tab>
      <v-tab> Tab 4 </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab" touchless>
      <v-tab-item> 1111 </v-tab-item>
      <v-tab-item> <Stats /> </v-tab-item>
      <v-tab-item> 3333 </v-tab-item>
      <v-tab-item> 4444 </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Stats from "./StatsTabViews/Stats.vue";
export default {
  name: "UserDashboard",
  data() {
    return {
      currentTab: 0,
    };
  },
  components: {
    Stats,
  },
};
</script>
