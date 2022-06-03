<template>
  <v-card dark>
    <v-card-text class="progressBarContainer">
      <v-progress-linear
        :value="overallPercent"
        :color="chipProgressColor"
        rounded
        height="25"
        :style="'justify-content: left; color:' + textColor"
      >
        <strong style="padding-left: 10px"
          >Overall Percentage: {{ overallPercent }}%
          {{ getStatusMessage }}</strong
        >
      </v-progress-linear>
      <div class="motivationTextContainer">
        <strong>{{ this.motivationMessage }}</strong>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "OverallRatingBar",
  props: ["overallPercent"],
  data() {
    return {
      motivationMessage: "",
      textColor: "",
      chipProgressColor: "",
      ratingText: "",
    };
  },
  computed: {
    getStatusMessage() {
      return this.retStatMessage();
    },
  },
  methods: {
    retStatMessage() {
      if (this.overallPercent > 99) {
        this.motivationMessage = "Congratulations... You are doing GREAT !!";
        this.textColor = "white";
        this.chipProgressColor = "#2cba00";
        this.ratingText = "Excellent";
      } else if (this.overallPercent > 95) {
        this.motivationMessage = "Well Running. Few steps away from perfect!";
        this.textColor = "black";
        this.chipProgressColor = "#a3ff00";
        this.ratingText = "Very Good";
      } else if (this.overallPercent > 85) {
        this.motivationMessage = "Good Going. Keep it up!";
        this.textColor = "black";
        this.chipProgressColor = "#fff400";
        this.ratingText = "Good";
      } else if (this.overallPercent > 75) {
        this.motivationMessage = "Good Start. Pull up your socks!";
        this.textColor = "black";
        this.chipProgressColor = "#ffa700";
        this.ratingText = "Fair";
      } else {
        this.motivationMessage = "Need Improvements. You need to work hard";
        this.textColor = "white";
        this.chipProgressColor = "#ff0000";
        this.ratingText = "Poor";
      }
      const storeData = {
        ratingText: this.ratingText,
        ratingBG: this.chipProgressColor,
        ratingColor: this.textColor,
      };
      this.$store.dispatch("setRatingText", storeData);
    },
  },
};
</script>
<style scoped>
.v-card.v-sheet.theme--dark {
  box-shadow: none;
}
.motivationTextContainer {
  padding-top: 5px;
  color: yellow;
}
</style>
