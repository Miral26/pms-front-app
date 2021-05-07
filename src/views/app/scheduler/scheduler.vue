<template>
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="9" md="8">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="mb-3 page-title">
          <h3 class="font-weight-bold m-0">Scheduler</h3>
        </div>

        <div class="schedule-vue-sample">
          <div class="control-section">
            <div class="schedule-container">
              <ejs-schedule
                id="Schedule"
                ref="ScheduleObj"
                :height="calenderHieght"
                :cssClass="cssClass"
                :selectedDate="selectedDate"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :group="group"
                :currentView="currentView"
              >
                <e-header-rows>
                  <!-- <e-header-row
              option="Month"
              :template="monthHeaderTemplate"
            ></e-header-row>
            <e-header-row
              option="Week"
              :template="weekHeaderTemplate"
            ></e-header-row> -->
                  <!-- <e-header-row option="Date"></e-header-row> -->
                </e-header-rows>
                <e-views>
                  <e-view option="Day"></e-view>
                  <e-view option="Week"></e-view>
                  <!-- <e-view option="Month"></e-view> -->
                  <!-- <e-view option="TimelineDay"></e-view>
            <e-view option="TimelineWeek"></e-view>
            <e-view option="TimelineMonth"></e-view> -->
                </e-views>
                <e-resources>
                  <e-resource
                    field="DoctorId"
                    title="Doctors"
                    name="Doctor"
                    :dataSource="employeeDataSource"
                    textField="Text"
                    idField="Id"
                    groupIDField="GroupId"
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
    <b-row>
      <b-col md="12 mt-4">
        <b-button class="btn-radius" variant="primary ripple m-1"
          ><i class="fa fa-plus mr-1"></i> New Appointment</b-button
        >
        <b-button class="btn-radius" variant="outline-primary ripple ml-2"
          >Schedule template</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<style>
.schedule-vue-sample .block-events.e-schedule .template-wrap {
  width: 100%;
}

.schedule-vue-sample
  .block-events.e-schedule
  .e-vertical-view
  .e-resource-cells {
  height: 58px;
}

.schedule-vue-sample
  .block-events.e-schedule
  .e-timeline-view
  .e-resource-left-td,
.schedule-vue-sample
  .block-events.e-schedule
  .e-timeline-month-view
  .e-resource-left-td {
  width: 170px;
}

.schedule-vue-sample
  .block-events.e-schedule
  .e-resource-cells.e-child-node
  .employee-category,
.schedule-vue-sample
  .block-events.e-schedule
  .e-resource-cells.e-child-node
  .employee-name {
  padding: 5px;
}

.schedule-vue-sample .block-events.e-schedule .employee-image {
  width: 45px;
  height: 40px;
  float: left;
  border-radius: 50%;
  margin-right: 10px;
}

.schedule-vue-sample .block-events.e-schedule .employee-name {
  font-size: 13px;
}

.schedule-vue-sample .block-events.e-schedule .employee-designation {
  font-size: 10px;
}
.appointment-list {
  height: -moz-calc(100vh - 255px);
  height: -webkit-calc(100vh - 255px);
  height: calc(100vh - 255px);
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
  font-size: 20px;
}
.contact-info span {
  color: #c7cadd;
  display: block;
  font-size: 16px;
}
.contact-info {
  margin-top: 15px;
}
.submitted-date {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 20px;
  color: #c7cadd;
}
.submitted-date i {
  color: #00c5b4;
  font-size: 20px;
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
  // Month,
  Week,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);

export default {
  data() {
    return {
      blockData: [
        {
          Id: 1,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 1, 10, 0),
          EndTime: new Date(2018, 7, 1, 12, 0),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 1,
        },
        {
          Id: 2,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 1, 16, 0),
          EndTime: new Date(2018, 7, 1, 20, 0),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 2,
        },
        {
          Id: 3,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 1, 12, 0),
          EndTime: new Date(2018, 7, 1, 14, 0),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 3,
        },
        {
          Id: 4,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 4, 11, 0),
          EndTime: new Date(2018, 7, 5, 10, 0),
          IsAllDay: true,
          IsBlock: true,
          DoctorId: 4,
        },
        {
          Id: 5,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 10, 11, 0),
          EndTime: new Date(2018, 7, 12, 10, 0),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 5,
        },
        {
          Id: 6,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 8),
          EndTime: new Date(2018, 7, 11),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 6,
        },
        {
          Id: 9,
          Subject: "Client Meeting",
          StartTime: new Date(2018, 7, 3, 8, 0),
          EndTime: new Date(2018, 7, 3, 10, 30),
          IsAllDay: false,
          DoctorId: 3,
        },
        {
          Id: 10,
          Subject: "Conference",
          StartTime: new Date(2018, 7, 2, 13, 30),
          EndTime: new Date(2018, 7, 2, 15, 0),
          IsAllDay: false,
          DoctorId: 4,
        },
        {
          Id: 11,
          Subject: "Employee Recruitment",
          StartTime: new Date(2018, 7, 1, 10, 0),
          EndTime: new Date(2018, 7, 1, 13, 0),
          IsAllDay: false,
          DoctorId: 5,
        },
        {
          Id: 12,
          Subject: "Data Analyzing",
          StartTime: new Date(2018, 7, 1, 15, 0),
          EndTime: new Date(2018, 7, 1, 17, 0),
          IsAllDay: false,
          DoctorId: 6,
        },
        {
          Id: 13,
          Subject: "Content Writting",
          StartTime: new Date(2018, 7, 2, 14, 0),
          EndTime: new Date(2018, 7, 2, 16, 0),
          IsAllDay: false,
          DoctorId: 1,
        },
        {
          Id: 14,
          Subject: "Meeting",
          StartTime: new Date(2018, 7, 1, 9, 0),
          EndTime: new Date(2018, 7, 1, 11, 0),
          IsAllDay: false,
          DoctorId: 4,
        },
        {
          Id: 15,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 29, 11, 0),
          EndTime: new Date(2018, 7, 31, 10, 0),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 4,
        },
        {
          Id: 16,
          Subject: "Not Available",
          StartTime: new Date(2018, 7, 12),
          EndTime: new Date(2018, 7, 15),
          IsAllDay: false,
          IsBlock: true,
          DoctorId: 3,
        },
      ],
      eventSettings: {
        dataSource: extend([], this.blockData, null, true),
      },
      selectedDate: new Date(2018, 7, 1),
      currentView: "Day",
      calenderHieght: window.innerHeight - 255,
      cssClass: "block-events",
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
  },
  provide: {
    schedule: [
      Day,
      TimelineViews,
      TimelineMonth,
      // Month,
      Week,
      Resize,
      DragAndDrop,
    ],
  },
};
</script>