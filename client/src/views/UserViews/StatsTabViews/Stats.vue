<template>
  <div class="stats_container">
    <v-container style="padding: 0px; height: 65px">
      <v-row>
        <v-col
          cols="6"
          sm="6"
          md="6"
          style="text-align: center; padding-top: 14px"
        >
          <v-chip
            class="ma-2"
            :color="$store.getters.getRatingText.ratingBG"
            :text-color="$store.getters.getRatingText.ratingColor"
          >
            <strong>{{ $store.getters.getRatingText.ratingText }}</strong>
          </v-chip>
        </v-col>
        <v-col cols="6" sm="6" md="6">
          <div class="select_align_contanier">
            <div class="select_maxw">
              <v-select
                item-text="label"
                item-value="value"
                :items="items"
                dense
                outlined
                v-model="selectVal"
                @change="handleFilterChange"
              ></v-select>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <StatsViewer :timeCriteria="selectVal" :key="componentKey" />
  </div>
</template>
<script>
import StatsViewer from "./StatsViewer.vue";
export default {
  name: "Stats",
  data: () => ({
    items: [
      { label: "This Week", value: "W" },
      { label: "This Month", value: "M" },
      { label: "This Year", value: "Y" },
      { label: "Lifetime", value: "L" },
    ],
    selectVal: "M",
    componentKey: 0,
  }),
  components: { StatsViewer },
  methods: {
    handleFilterChange(selectObj) {
      this.selectVal = selectObj;
      this.componentKey += 1;
    },
  },
};
</script>
<style>
.stats_container {
  max-width: 100vw;
  padding: 10px;
  padding-top: 0px;
}
.select_align_contanier {
  display: flex;
  justify-content: right;
  align-items: flex-end;
  height: 70px;
}
.select_maxw {
  max-width: 140px;
}
.v-select.v-input--dense .v-select__selection--comma {
  font-size: 12px !important;
}
</style>
