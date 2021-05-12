<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="9" md="8">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Schedule</h3>
        </div>

        <div class="schedule-vue-sample">
          <div class="col-md-12 control-section">
            <div class="content-wrapper schedule-container">
              <ejs-schedule
                id="Schedule"
                ref="ScheduleObj"
                :height="calenderHieght"
                :selectedDate="dateSelected"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :group="group"
                :currentView="currentView"
                :actionBegin="onActionBegin"
                :actionComplete="onActionComplete"
                :popupOpen="onPopupOpen"
              >
                <e-views>
                  <e-view option="Day"></e-view>
                  <!-- <e-view option="Week"></e-view>
                  <e-view option="Month"></e-view>
                  <e-view option="Agenda"></e-view> -->
                </e-views>
                <e-resources>
                  <e-resource
                    field="DoctorId"
                    title="Doctor"
                    name="Doctors"
                    :allowMultiple="allowMultiple"
                    :dataSource="resourceDataSource"
                    textField="Text"
                    idField="Id"
                    groupIDField="DoctorId"
                    colorField="Color"
                  >
                  </e-resource>
                </e-resources>
              </ejs-schedule>
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="3" md="4">
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Appointment Requests</h3>
        </div>
        <div class="appointment-list">
          <div class="appointment-card" v-for="num in [1, 2, 3]" :key="num">
            <div class="appointment-date-time">
              <span>Mar 19, 2021</span>
              <span>5:00 PM - 6:00 PM</span>
            </div>
            <div class="appointment-title">He - Ryan Smith</div>
            <div class="contact-info">
              <span>melissa.luvisi@gmail.com</span>
              <span>(310)487-4291</span>
            </div>
            <div class="submitted-date">
              <span>Submitted on 3/17/21</span>
              <i class="fa fa-calendar-check-o"></i>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- <b-row>
      <b-col md="12 mt-4">
        <b-button
          class="btn-radius"
          variant="primary ripple m-1"
          v-b-modal.new-appointment
          ><i class="fa fa-plus mr-1"></i> New Appointment</b-button
        >
        <b-button class="btn-radius" variant="outline-primary ripple ml-2"
          >Schedule template</b-button
        >
      </b-col>
    </b-row> -->

    <b-modal id="new-appointment" size="xl"> <NewAppointment /> </b-modal>
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
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 5%);
}
.appointment-card:last-child {
  margin-bottom: 0;
}
.appointment-date-time span {
  color: #00c5b4;
  display: block;
  font-size: 16px;
}
.appointment-title {
  color: #12395f;
  font-weight: bold;
  font-size: 17px;
}
.contact-info span {
  color: #c7cadd;
  display: block;
  font-size: 16px;
}
.contact-info {
  margin-top: 10px;
}
.submitted-date {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 15px;
  color: #c7cadd;
}
.submitted-date i {
  color: #00c5b4;
  font-size: 20px;
}
</style>

<script>
import Vue from "vue";
import fullscreen from "vue-fullscreen";
import { extend } from "@syncfusion/ej2-base";
import {
  SchedulePlugin,
  Day,
  Agenda,
  Month,
  Week,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
import NewAppointment from "../../../components/new-appointent/new-appointment";

Vue.use(SchedulePlugin);
Vue.use(fullscreen);

const resourceData = [
  {
    Id: 1,
    Subject: "Workflow Analysis",
    StartTime: new Date(2018, 7, 1, 9, 30),
    EndTime: new Date(2018, 7, 1, 12, 0),
    IsAllDay: false,
    ProjectId: 1,
    DoctorId: 2,
  },
  {
    Id: 2,
    Subject: "Requirement planning",
    StartTime: new Date(2018, 7, 1, 12, 30),
    EndTime: new Date(2018, 7, 1, 14, 45),
    IsAllDay: false,
    ProjectId: 1,
    DoctorId: 1,
  },
];
export default {
  components: {
    NewAppointment,
  },
  data() {
    return {
      eventSettings: {
        dataSource: extend([], resourceData, null, true),
      },
      selectedDate: new Date(2018, 3, 1),
      group: { byDate: true, resources: ["Doctors"] },
      allowMultiple: true,
      resourceDataSource: [
        {
          Text: "OP - 1",
          Id: 1,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Content writer",
        },
        {
          Text: "OP - 2",
          Id: 2,
          DoctorId: 2,
          Color: "#9e5fff",
          Designation: "Designer",
        },
        {
          Text: "OP - 3",
          Id: 3,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Software Engineer",
        },
        {
          Text: "OP - 4",
          Id: 4,
          DoctorId: 2,
          Color: "#9e5fff",
          Designation: "Support Engineer",
        },
        {
          Text: "Other Office",
          Id: 5,
          DoctorId: 1,
          Color: "#bbdc00",
          Designation: "Human Resource",
        },
      ],
      headerSearch: "",
      dateSelected: new Date(2018, 7, 1),
      currentView: "Day",
      calenderHieght: window.innerHeight - 200,
      fullscreen: false,
    };
  },

  computed: {},
  methods: {
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
      let scheduleElement = document.getElementById("Schedule");
      if (args.requestType === "toolBarItemRendered") {
        let fullScreenIconItem = scheduleElement.querySelector(
          ".full-screen-view-icon"
        );
        fullScreenIconItem.onclick = () => {
          this.$fullscreen.toggle(this.$el.querySelector("#Schedule"), {
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
    schedule: [Day, Week, Month, Agenda, Resize, DragAndDrop],
  },
};
</script>