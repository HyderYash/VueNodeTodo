<template>
  <div>
    <div class="table" v-if="!loading">
      <div class="table-scroll">
        <table class="table-main">
          <thead>
            <tr>
              <th class="fix_col_left">Task</th>
              <th
                v-for="(item, idx) in todoStats[Object.keys(todoStats)[0]][0]
                  .TASK_DETAIL"
                :key="idx"
                class="static_col_middle"
              >
                {{ formatDate(item.RATING_DATE) }}
              </th>
              <th class="fix_col_right">avg.</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in todoStats"
              :key="item[0].TASK_DETAIL.taskRatingId"
            >
              <td class="fix_col_left taskNameBg">
                <span>{{ idx }}</span>
              </td>
              <td
                v-for="taskRate in item[0].TASK_DETAIL"
                :key="taskRate.TASK_RATING + '---' + Math.random()"
                class="static_col_middle"
              >
                <div class="test">
                  {{ taskRate.TASK_RATING }}
                </div>
              </td>
              <td class="fix_col_right">{{ item[1].RATING_AVG }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <v-card
      v-else
      style="
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular
    ></v-card>
    <OverallRatingBar :overallPercent="overallPercent" />
  </div>
</template>
<script>
import * as common from "../../../utils/Common";
import OverallRatingBar from "../../CommonViews/CommonComponents/OverallRatingBar.vue";
const config = common.config;
export default {
  name: "StatsViewer",
  props: ["timeCriteria"],
  components: { OverallRatingBar },
  data() {
    return {
      loading: true,
      todoStats: [],
      // OverallAverage
      taskCounter: 0,
      overallPercent: 0,
      avgSumCounter: 0,
    };
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        const formData = {
          USER_ID: JSON.parse(sessionStorage.getItem("user_data")).ID,
          CRITERIA: this.timeCriteria,
        };
        common
          .fetchAPIData(config.GET_TODOSTATS, formData, "POST")
          .then((json) => {
            if (json.status === "Success") {
              this.loading = false;
              this.todoStats = this.setAvg(json.records[0]);
              console.log(this.todoStats);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    formatDate(date) {
      return common.buildCurrentDateFormat(date);
    },
    setAvg(jsonArr) {
      if (jsonArr !== {}) {
        Object.entries(jsonArr).forEach(([itemKey, itemValue]) => {
          console.log(itemKey);
          this.taskCounter += 1;
          const totalVal = itemValue[0].TASK_DETAIL.length * 10;
          var ratingCounterSum = 0;
          itemValue[0].TASK_DETAIL.forEach((taskVal) => {
            ratingCounterSum += parseInt(taskVal.TASK_RATING);
          });
          var ratAvg = Math.round((ratingCounterSum * 100) / totalVal).toFixed(
            0
          );
          itemValue[1].RATING_AVG = ratAvg;
          this.avgSumCounter += parseInt(ratAvg);
        });
        this.overallPercent = Math.round(
          (this.avgSumCounter * 100) / (this.taskCounter * 100)
        ).toFixed(0);
        return jsonArr;
      }
    },
  },
  beforeCreate() {
    common.cLog(this.$options.name, "beforeCreate");
  },
  created() {
    common.cLog(this.$options.name, "created");
  },
  beforeMount() {
    common.cLog(this.$options.name, "beforeMount");
  },
  mounted() {
    this.getData();
    common.cLog(this.$options.name, "mounted");
  },
  beforeUpdate() {
    common.cLog(this.$options.name, "beforeUpdate");
  },
  updated() {
    common.cLog(this.$options.name, "updated");
  },
  beforeDestroy() {
    common.cLog(this.$options.name, "beforeDestroy");
  },
  destroyed() {
    common.cLog(this.$options.name, "destroyed");
  },
};
</script>
<style scoped>
.test {
  height: 100%;
  width: 100%;
  color: white;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  );
}
table {
  width: 100vw;
  table-layout: fixed;
}
.table-main {
  border-spacing: 0;
}

.table-main thead th {
  background-color: #6eb7c2;
  border: none;
  color: #545253;
  text-align: left;
  font-size: 12px;
  text-align: center;
}

.table-main tbody td {
  border-bottom: solid 1px rgb(75, 90, 102);
  color: #f6f5f1;
  padding: 5px;
  white-space: nowrap;
  font-size: 12px;
  padding: 2px 0px 2px 5px;
}
.table-main tbody td span {
  color: navy;
}

.table-scroll {
  overflow-x: auto;
  padding-bottom: 5px;
  max-width: 100%;
}

.table-main .fix_col_left {
  border-left: solid 1px rgb(75, 90, 102);
  border-right: solid 1px rgb(75, 90, 102);
  border-bottom: solid 1px rgb(75, 90, 102);
  left: 0;
  position: absolute;
  top: auto;
  width: 76px;
}
.table-main .fix_col_right {
  right: 0;
  position: absolute;
  top: auto;
  width: 76px;
  border-left: solid 1px rgb(75, 90, 102);
  border-bottom: solid 1px rgb(75, 90, 102);
  text-align: center;
}
.table-main .static_col_middle {
  width: calc((100% - 152px) / 3) !important;
  /* width: 20% !important; */
}
td {
  border-left: solid 1px rgb(75, 90, 102);
}
.taskNameBg {
  background-color: #f9f9f6;
}
</style>
