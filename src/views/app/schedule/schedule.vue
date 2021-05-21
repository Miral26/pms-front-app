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
            <div class="content-wrapper schedule-container without-date-header">
              <ejs-schedule
                v-if="show"
                id="Schedule"
                ref="ScheduleObj"
                :height="calenderHieght"
                :selectedDate="selectedDate"
                :eventSettings="eventSettings"
                :eventRendered="onEventRendered"
                :group="group"
                :showTimeIndicator="showTimeIndicator"
                :currentView="currentView"
                :actionBegin="onActionBegin"
                :actionComplete="onActionComplete"
                :cellClick="onCellClick"
                :eventClick="onEventClick"
                :popupOpen="onPopupOpen"
                :navigating="onNavigating"
              >
                <e-views>
                  <e-view
                    option="Day"
                    :allowVirtualScrolling="virtualScroll"
                  ></e-view>
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
        <div class="appointment-requests-tab">
          <b-tabs content-class="mt-1">
            <b-tab title="ASAP">
              <div class="appointment-list">
                <div
                  class="appointment-card"
                  v-for="num in [1, 2, 3]"
                  :key="num"
                >
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
            </b-tab>
            <b-tab title="Pinboard" active>
              <div class="appointment-list">
                <div
                  class="appointment-card"
                  v-for="num in [1, 2, 3]"
                  :key="num"
                >
                  <div class="appointment-date-time mb-2">
                    <i class="fa fa-thumb-tack pin-icon"></i>
                    <span> Michelle Taylor Lagunas</span>
                  </div>
                  <div class="appointment-title">
                    <p>Mar 19, 2021</p>
                    <p>Consult for braces</p>
                    <p>Consult, ITERO</p>
                  </div>
                  <div class="submitted-date">
                    <span>Show Production</span>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </div>
      </b-col>
    </b-row>
    <b-sidebar
      id="sidebar-right"
      class="patient-detail-sidebar"
      title="Patient Information"
      right
      shadow
    >
      <div class="px-3 py-2">
        <div class="patient-info">
          <div class="left">
            <div class="patient-img">
              <img src="@/assets/images/faces/1.jpg" alt="" />
            </div>
            <div class="patient-detail">
              <h6>Luke Shaw</h6>
              <span>09/03/1978 (7 years old)</span>
            </div>
          </div>
          <div class="right">
            <p>Preferred Days</p>
            <span>[None]</span>
            <p>Preferred Times</p>
            <span>[None]</span>
          </div>
        </div>
        <div class="patient-info-tabs mt-4">
          <b-tabs>
            <b-tab title="Appt">
              <div class="appt-form">
                <b-form-group>
                  <div class="status-dropdown">
                    <label>Status</label>
                    <b-dropdown id="dropdown-1" text="Unconfirmed">
                      <b-dropdown-item>Unconfirmed</b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <a href="#" class="schedule-link">Schedule</a>
                </b-form-group>
                <b-form-group>
                  <ul class="selection-section mt-4">
                    <li>
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" />
                        <span class="checkmark"></span> <span>ASAP</span></label
                      >
                    </li>
                    <li>
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" />
                        <span class="checkmark"></span
                        ><span>Needs Follow-Up</span></label
                      >
                    </li>
                    <li>
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" />
                        <span class="checkmark"></span
                        ><span>Premedicate</span></label
                      >
                    </li>
                    <li>
                      <label class="checkbox checkbox-outline-primary">
                        <input type="checkbox" />
                        <span class="checkmark"></span
                        ><span>Pinned</span></label
                      >
                    </li>
                  </ul>
                </b-form-group>
                <b-form-group>
                  <div class="tx-planner-wrap mt-4">
                    <div class="row">
                      <div class="col-md-4">
                        <label>Procedure(s) 0 seleted<span class="required">*</span></label>
                        <div class="search-procedure">
                          <b-form-input
                            type="text"
                            required
                            placeholder="Description"
                          ></b-form-input>
                          <i class="fa fa-map-marker"></i>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label>Other</label>
                          <b-form-input
                            type="text"
                            required
                            placeholder="Description"
                          ></b-form-input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <span class="tx-planner">Add Tx planner</span>
                      </div>
                    </div>
                  </div>
                </b-form-group>
                <b-form-group>
                  <div class="row">
                    <div class="col-md-4">
                      <label>Operatory</label>
                      <b-dropdown text="Operatory">
                        <b-dropdown-item>Operatory</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label>Operatory</label>
                      <b-dropdown text="Operatory">
                        <b-dropdown-item>Operatory</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label>Operatory</label>
                      <b-dropdown text="Operatory">
                        <b-dropdown-item>Operatory</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                </b-form-group>
              </div>
            </b-tab>
            <b-tab title="Contact Info"> </b-tab>
            <b-tab title="Rel. Appts"> </b-tab>
            <b-tab title="Med. Alerts"> </b-tab>
            <b-tab title="Lab Case"> </b-tab>
          </b-tabs>
        </div>
      </div>
    </b-sidebar>
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
.appointment-title p {
  margin-bottom: 0;
  font-size: 14px;
}
.pin-icon {
  float: right;
  color: #d6d6d6;
  font-size: 20px !important;
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
.appointment-requests-tab .tabs .nav-tabs .nav-item a {
  font-size: 16px;
  margin-left: 0px;
  margin-right: 30px;
}
.appointment-requests-tab .tabs .tab-content {
  padding: 0;
}
#sidebar-right {
  width: 50%;
}
.patient-detail-sidebar .b-sidebar {
  background-color: #fff !important;
}
.patient-detail-sidebar .b-sidebar-header {
  color: #05070b;
}
.patient-detail-sidebar .b-sidebar-header .close {
  margin-right: 10px !important;
}
.patient-detail-sidebar .b-sidebar-header .close svg {
  border-radius: 100%;
  border: 2px solid #d6d6d6;
  color: #d6d6d6 !important;
  width: 20px;
  height: 20px;
  line-height: 20px;
  vertical-align: top;
}
.patient-info {
  display: flex;
  padding: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.right {
  margin-left: auto;
}
.left {
  display: flex;
  align-items: center;
}

.patient-img img {
  border-radius: 100%;
  max-width: 60px;
}

.patient-img {
  margin-right: 10px;
}

.right p {
  margin: 0;
}

.right span {
  margin-bottom: 5px;
  display: block;
  font-weight: 600;
}

.patient-detail h6 {
  font-weight: 600;
  margin: 0;
  font-size: 20px;
}
.status-dropdown {
  display: inline-block;
  position: relative;
}
.status-dropdown label {
  display: block;
  position: absolute;
  top: 10px;
  margin: 0;
  z-index: 9;
  left: 10px;
}
.status-dropdown .dropdown-toggle.btn {
  padding: 0;
  background-color: #fafafa !important;
  border-radius: 10px;
  padding: 30px 50px 10px 10px;
  color: #05070b !important;
  font-size: 16px;
}
.status-dropdown .dropdown-toggle.btn:focus {
  box-shadow: none;
}
.status-dropdown .dropdown-toggle::after {
  content: normal;
}
.status-dropdown .dropdown-menu {
  min-width: 100%;
}
.status-dropdown:after {
  content: "\f107";
  font-family: "FontAwesome";
  border: 0;
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 24px;
  color: #05070b;
  font-weight: bold;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  pointer-events: none;
  z-index: 9;
}
.schedule-link,
.schedule-link:hover {
  margin-left: 20px;
  color: #00c5b4;
  text-decoration: underline;
}
.tx-planner-wrap {
  background-color: #fafafa;
  padding: 20px;
}
.search-procedure {
  position: relative;
}
.search-procedure i {
    position: absolute;
    right: 12px;
    top: 8px;
    font-size: 16px;
}
.required {
  color: #ac252b;
}
.tx-planner {
  color: #00c5b4;
  margin-top: 15px;
  display: block;
  cursor: pointer;
}
.selection-section {
  margin: 0;
  padding: 0;
}
.selection-section li {
  list-style: none;
  float: left;
  margin-right: 50px;
}
.selection-section li .checkbox {
  margin: 0;
}
.selection-section li .checkbox span {
  vertical-align: middle;
}
</style>

<script>
import Vue from "vue";
import fullscreen from "vue-fullscreen";
import { extend } from "@syncfusion/ej2-base";
import { mapActions } from "vuex";
import {
  SchedulePlugin,
  Day,
  Agenda,
  Month,
  Week,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
import * as moment from "moment";

Vue.use(SchedulePlugin);
Vue.use(fullscreen);

const resourceData = [
  {
    Id: 1,
    Subject: "Workflow Analysis",
    StartTime: new Date(new Date().setHours(11)),
    EndTime: new Date(new Date().setHours(12)),
    IsAllDay: false,
    ProjectId: 1,
    DoctorId: 2,
  },
  {
    Id: 2,
    Subject: "Requirement planning",
    StartTime: new Date(new Date().setHours(14)),
    EndTime: new Date(new Date().setHours(16)),
    IsAllDay: false,
    ProjectId: 1,
    DoctorId: 1,
  },
];
export default {
  components: {},
  data() {
    return {
      resourceData: [],
      eventSettings: {
        dataSource: extend([], resourceData, null, true),
      },
      selectedDate: new Date(),
      group: { byDate: true, resources: ["Doctors"] },
      allowMultiple: true,
      showTimeIndicator: false,
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
      cssClas: "schedule-no-date",
      show: false,
      virtualScroll: true,
      currentView: "Day",
      calenderHieght: window.innerHeight - 200,
      fullscreen: false,
    };
  },
  computed: {},
  mounted() {
    this.setResourceData();
  },
  methods: {
    ...mapActions(["setAppointmentData"]),
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
        const fullScreenIconItem = {
          align: "Right",
          prefixIcon: "i-Full-Screen",
          cssClass: "full-screen-view-icon",
        };
        args.items.push(fullScreenIconItem);
        const dayNameElement = {
          align: "Left",
          prefixIcon: "",
          text: moment(this.selectedDate).format("dddd"),
          cssClass: "selected-day-name",
        };
        args.items.push(dayNameElement);
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
    onNavigating(e) {
      this.selectedDate = e.currentDate;
      const element = document.querySelector(
        ".selected-day-name .e-tbar-btn-text"
      );
      if (element) {
        element.innerHTML = moment(this.selectedDate).format("dddd");
      }
      console.log(`e`, e);
    },
    onEventClick() {
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");
    },
    onCellClick(e) {
      console.log(`e`, e);
      this.setAppointmentData({
        headerSearch: "",
        selectedDate: e.startTime,
        selectedTime: moment(new Date(e.startTime).getTime()).format(
          "HH:MM:ss"
        ),
      });
      this.$bvModal.show("new-appointment");
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