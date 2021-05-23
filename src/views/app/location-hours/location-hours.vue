<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="12" md="12">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Location Hours</h3>
        </div>

        <div class="d-flex justify-content-between mb-3">
          <div class="d-flex">
            <label class="radio radio-success">
              <input
                type="radio"
                name="radio"
                :checked="selectedTimeInterval === 10"
                @change="changeInterval(10)"
              />
              <span>Display schedule in 10 minutes increments</span>
              <span class="checkmark"></span>
            </label>
            <label class="radio radio-success ml-3">
              <input
                type="radio"
                name="radio"
                :checked="selectedTimeInterval === 15"
                @change="changeInterval(15)"
              />
              <span>Display schedule in 15 minutes increments</span>
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="d-flex">
            <label>Default appointment length (min)</label>
            <b-form-input type="number" class="w-auto ml-2"> </b-form-input>
          </div>
        </div>

        <div class="schedule-vue-sample">
          <div class="control-section">
            <div class="schedule-container">
              <ejs-schedule
                id="Schedule2"
                ref="ScheduleObj2"
                :height="calenderHieght"
                :selectedDate="dateSelected"
                :timeScale="timeScale"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :currentView="currentView"
                :actionBegin="onActionBegin"
                :actionComplete="onActionComplete"
                :popupOpen="onPopupOpen"
              >
                <e-header-rows>
                  <!-- <e-header-row option="Month" :template="monthHeaderTemplate"></e-header-row> -->
                  <e-header-row option="Week"></e-header-row>
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
    </b-row>
  </div>
</template>
<style>
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
import { ColorPickerPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(SchedulePlugin);
Vue.use(ColorPickerPlugin);

export default {
  mounted() {
    var target = document.getElementById("element");
    if (target) {
      target.nextElementSibling.insertBefore(
        target,
        target.nextElementSibling.children[1]
      );
    }
  },
  data() {
    return {
      eventSettings: {
        dataSource: extend([], [], null, true),
      },
      selectedTimeInterval: 10,
      timeScale: { enable: true, interval: 10, slotCount: 1 },
      dateSelected: new Date(),
      currentView: "Week",
      calenderHieght: window.innerHeight - 220,
    };
  },
  computed: {},
  methods: {
    makeToast(variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: ` ${variant || "default"}`,
        variant: variant,
        solid: true,
      });
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
      let scheduleElement = document.getElementById("Schedule2");
      if (args.requestType === "toolBarItemRendered") {
        let fullScreenIconItem = scheduleElement.querySelector(
          ".full-screen-view-icon"
        );
        fullScreenIconItem.onclick = () => {
          this.$fullscreen.toggle(this.$el.querySelector("#Schedule2"), {
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
    changeInterval(value) {
      this.selectedTimeInterval = value;
      let scheduleObj = this.$refs.ScheduleObj2;
      scheduleObj.ej2Instances.timeScale.interval = parseInt(
        this.selectedTimeInterval,
        10
      );
      scheduleObj.dataBind();
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
  components: {},
};
</script>