<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="9" md="8">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Schedule Template</h3>
        </div>

        <div class="schedule-vue-sample">
          <div class="control-section">
            <div class="schedule-container">
              <ejs-schedule
                v-if="show"
                id="Schedule1"
                ref="ScheduleObj1"
                :height="calenderHieght"
                :selectedDate="dateSelected"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :currentView="currentView"
                :actionBegin="onActionBegin"
                :actionComplete="onActionComplete"
                :popupOpen="onPopupOpen"
              >
                <e-header-rows>
                  <!-- <e-header-row option="Month" :template="monthHeaderTemplate"></e-header-row> -->
                  <e-header-row
                    option="Week"
                    :template="weekHeaderTemplate"
                  ></e-header-row>
                  <e-header-row option="Date"></e-header-row>
                </e-header-rows>
                <e-views>
                  <e-view option="Week"></e-view>
                  <!-- <e-view option="Day"></e-view>
                  <e-view option="Month"></e-view> -->
                </e-views>
              </ejs-schedule>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="3" md="4">
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Operatories</h3>
        </div>
        <div class="appointment-list">
          <div
            class="appointment-card"
            v-for="operatory in operatories"
            :key="operatory.id"
          >
            <div class="appointment-title">{{ operatory.title }}</div>
            <ul class="days">
              <li
                :class="
                  !availability['MON'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                M
              </li>
              <li
                :class="
                  !availability['TUE'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                T
              </li>
              <li
                :class="
                  !availability['WED'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                W
              </li>
              <li
                :class="
                  !availability['THU'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                T
              </li>
              <li
                :class="
                  !availability['FRI'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                F
              </li>
              <li
                :class="
                  !availability['SAT'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                S
              </li>
              <li
                :class="
                  !availability['SUN'].includes(operatory.title)
                    ? 'disabled'
                    : ''
                "
              >
                S
              </li>
            </ul>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style>
.appointment-list {
  height: -moz-calc(100vh - 200px);
  height: -webkit-calc(100vh - 200px);
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.appointment-card {
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 5%);
}
.appointment-card:last-child {
  margin-bottom: 0;
}
.appointment-title {
  color: #12395f;
  font-weight: bold;
  font-size: 17px;
}
.days {
  margin: 0;
  padding: 0;
  display: inline-block;
}
.days li {
  float: left;
  color: #33b5e6;
  list-style: none;
  margin-right: 3px;
  font-size: 15px;
  line-height: 1;
  margin-top: 5px;
}
.days li.disabled {
  color: #d5f0f9;
}
</style>

<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import {
  SchedulePlugin,
  Day,
  TimelineViews,
  TimelineMonth,
  Month,
  Week,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
import { getWeekNumber, getWeekLastDate } from "@syncfusion/ej2-schedule";

Vue.use(SchedulePlugin);

const resourceData = [
  {
    Id: 1,
    Subject: "Not Available",
    StartTime: new Date(2018, 7, 1, 11, 0),
    EndTime: new Date(2018, 7, 1, 12, 30),
    IsAllDay: false,
    CategoryColor: "#bbdc00",
    DoctorId: 1,
  },
  {
    Id: 2,
    Subject: "Not Available",
    StartTime: new Date(2018, 7, 2, 14, 0),
    EndTime: new Date(2018, 7, 2, 16, 0),
    IsAllDay: false,
    CategoryColor: "#9e5fff",
    DoctorId: 2,
  },
];

var weekHeaderVue = Vue.component("week-header", {
  template: '<span class="week">{{getWeekDetails(data)}}</span>',
  data() {
    return {
      data: {},
    };
  },
  methods: {
    getWeekDetails: function (value) {
      return "Week " + getWeekNumber(getWeekLastDate(value.date, 0));
    },
  },
});

export default {
  data() {
    return {
      availability: {
        MON: ["OP-1", "OP-2", "OP-3", "OP-5", "Other Office"],
        TUE: ["OP-1", "OP-3", "OP-4", "OP-5"],
        WED: ["OP-3", "OP-4", "OP-5"],
        THU: ["OP-1", "OP-2", "OP-3", "OP-4", "Other Office"],
        FRI: ["OP-1", "OP-2", "OP-3", "OP-5", "Other Office"],
        SAT: ["Other Office"],
        SUN: ["Other Office"],
      },
      operatories: [
        {
          id: 1,
          title: "OP-1",
          days: [{ id: 1, title: "M", available: true }],
        },
        {
          id: 2,
          title: "OP-2",
        },
        {
          id: 3,
          title: "OP-3",
        },
        {
          id: 4,
          title: "OP-4",
        },
        {
          id: 5,
          title: "OP-5",
        },
        {
          id: 6,
          title: "Other Office",
        },
      ],
      eventSettings: {
        dataSource: extend([], resourceData, null, true),
      },
      show: false,
      dateSelected: new Date(2018, 7, 1),
      currentView: "Week",
      calenderHieght: window.innerHeight - 200,
      group: {
        enableCompactView: true,
        resources: ["Doctor"],
      },
      employeeDataSource: [
        {
          Text: "OP - 1",
          Id: 1,
          GroupId: 1,
          Color: "#bbdc00",
          Designation: "Content writer",
        },
        {
          Text: "OP - 2",
          Id: 2,
          GroupId: 2,
          Color: "#9e5fff",
          Designation: "Designer",
        },
        {
          Text: "OP - 3",
          Id: 3,
          GroupId: 1,
          Color: "#bbdc00",
          Designation: "Software Engineer",
        },
        {
          Text: "OP - 4",
          Id: 4,
          GroupId: 2,
          Color: "#9e5fff",
          Designation: "Support Engineer",
        },
        {
          Text: "Other Office",
          Id: 5,
          GroupId: 1,
          Color: "#bbdc00",
          Designation: "Human Resource",
        },
      ],
      weekHeaderTemplate: function () {
        return {
          template: weekHeaderVue,
        };
      },
    };
  },
  computed: {},
  mounted() {
    this.setResourceData();
  },
  methods: {
    setResourceData() {
      this.eventSettings.dataSource = resourceData;
      setTimeout(() => {
        this.show = true;
      }, 200);
    },
    onEventRendered: function (args) {
      let categoryColor = args.data.CategoryColor;
      if (!args.element || !categoryColor) {
        return;
      }
      args.element.style.backgroundColor = categoryColor;
    },
    onActionBegin: function (args) {
      if (args.requestType === "toolbarItemRendering") {
        let fullScreenIconItem = {
          align: "Right",
          prefixIcon: "i-Full-Screen",
          cssClass: "full-screen-view-icon",
        };
        args.items.push(fullScreenIconItem);
      }
    },
    onActionComplete: function (args) {
      let scheduleElement = document.getElementById("Schedule1");
      if (args.requestType === "toolBarItemRendered") {
        let fullScreenIconItem = scheduleElement.querySelector(
          ".full-screen-view-icon"
        );
        fullScreenIconItem.onclick = () => {
          this.$fullscreen.toggle(this.$el.querySelector("#Schedule1"), {
            wrap: false,
            callback: this.fullscreenChange,
          });
        };
      }
    },
    fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    onPopupOpen: (args) => {
      args.cancel = true;
    },
  },
  provide: {
    schedule: [
      Day,
      TimelineViews,
      TimelineMonth,
      Month,
      Week,
      Resize,
      DragAndDrop,
    ],
  },
};
</script>