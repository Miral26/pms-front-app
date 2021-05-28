<template>
  <div class="text-center">
    <div class="pt-3 progress-header">
      <b-button
        variant="link"
        class="text-primary btn-back"
        v-if="getCompletedStep > 1"
        @click="setCompletedStep(getCompletedStep - 1)"
        ><i class="fa fa-angle-left mr-2"></i
      ></b-button>
      <b-button
        variant="link"
        class="text-danger btn-cancel"
        v-if="getCompletedStep > 1"
        @click="closeAppointment"
        ><i class="fa fa-times ml-2"></i
      ></b-button>
      <img
        src="@/assets/images/thdc-logo.png"
        alt="Total Health Dental Care"
        style="max-width: 320px; width: 100%; cursor: pointer"
      />
    </div>
    <div class="progress mt-4 mb-5">
      <div
        class="progress-bar progress-bar-striped active"
        role="progressbar"
        v-bind:aria-valuenow="getProgressValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: `${getProgressValue}%` }"
        :class="{ 'progress-bar-success': getProgressValue === 100 }"
      ></div>
    </div>
    <div class="step">
      <div class="container">
        <div class="row justify-content-center" v-if="getCompletedStep === 1">
          <div class="col-xl-7">
            <label class="custom-label"
              >To schedule an appointment, please enter your phone number</label
            >
            <b-form-group>
              <b-input placeholder="Phone Number" type="number" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 2">
          <div class="col-xl-7">
            <label class="custom-label"
              >Please enter 4 digits code that we sent on your number.</label
            >
            <div class="row">
              <div class="col-md-3">
                <b-form-group>
                  <b-input type="text" class="text-center" />
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <b-input type="text" class="text-center" />
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <b-input type="text" class="text-center" />
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group>
                  <b-input type="text" class="text-center" />
                </b-form-group>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 3">
          <div class="col-xl-7">
            <label class="custom-label">What's your first name?</label>
            <b-form-group>
              <b-input placeholder="First Name" type="text" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 4">
          <div class="col-xl-7">
            <label class="custom-label">And what's your last name?</label>
            <b-form-group>
              <b-input placeholder="Last Name" type="text" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 5">
          <div class="col-xl-7">
            <label class="custom-label">And what's your date of birth?</label>
            <b-form-group>
              <b-input placeholder="dd-mm-yyyy" type="date" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 6">
          <div class="col-xl-7">
            <label class="custom-label">What's your gender?</label>
            <b-form-group>
              <select
                name="gender"
                id="gender"
                class="custom-input custom-select"
              >
                <option value="" selected="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Other</option>
              </select>
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 7">
          <div class="col-xl-7">
            <label class="custom-label"
              >Please enter the email address you would like to use</label
            >
            <b-form-group>
              <b-input placeholder="Email" type="email" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 8">
          <div class="col-xl-7">
            <label class="custom-label">What's your address?</label>
            <b-form-group>
              <b-input placeholder="Address" type="text" />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 9">
          <div class="col-xl-7">
            <label class="custom-label"
              >Tell us the reason for the appointment</label
            >
            <b-form-group class="mb-5">
              <select
                name="gender"
                id="gender"
                class="custom-input custom-select"
              >
                <option value="" selected="">Select Reason</option>
                <option value="Teeth Cleaning">Teeth Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </b-form-group>
            <b-form-group>
              <b-textarea
                placeholder="Write additional note here (optional)"
                rows="5"
              />
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 10">
          <div class="col-xl-7">
            <label class="custom-label"
              >Please select your preferred location?</label
            >
            <b-form-group class="mb-5">
              <select
                name="location"
                id="location"
                class="custom-input custom-select"
                style="height: 52px"
              >
                <option value="" selected="">Select Location</option>
                <option value="7000000000142">THDC Office 1</option>
                <option value="7000000000143">THDC Office 2</option>
              </select>
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 11">
          <div class="col-xl-7">
            <label class="custom-label"
              >Please select your welcome appointment. This is for all first
              time patients.</label
            >
            <b-form-group class="mb-5">
              <select
                name="aptLocation"
                id="location"
                class="custom-input custom-select"
                style="height: 52px"
              >
                <option value="">Select Appointment Location</option>
                <option value="7000000000142" selected="">THDC Office 1</option>
              </select>
            </b-form-group>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 12">
          <div class="col-xl-7">
            <label class="custom-label"
              >Choose a time for the appointment?</label
            >
            <div class="schedule-vue-sample">
              <div class="col-md-12 control-section">
                <div class="content-wrapper">
                  <ejs-schedule
                    id="Schedule"
                    height="650px"
                    :selectedDate="selectedDate"
                    :timeScale="timeScale"
                    :eventSettings="eventSettings"
                    :eventRendered="oneventRendered"
                  >
                    <e-views>
                      <e-view
                        option="Day"
                        displayName="5 Days"
                        :interval="dayInterval"
                      ></e-view>
                    </e-views>
                  </ejs-schedule>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" v-if="getCompletedStep === 13">
          <div class="col-xl-7">
            <label class="custom-label"
              >Please confirm before proceeding to schedule an
              appointment.</label
            >
            <table class="mb-5 table table-sm table-bordered">
              <tbody>
                <tr>
                  <th>Time:</th>
                  <td>03:00 pm</td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>June 9, 2021</td>
                </tr>
                <tr>
                  <th>Type:</th>
                  <td>Teeth Cleaning -</td>
                </tr>
                <tr>
                  <th>Location:</th>
                  <td>THDC Office 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-7">
            <div class="btn-action">
              <b-button
                variant="primary"
                class="btn-block btn-radius"
                @click="
                  getCompletedStep < 13 &&
                    setCompletedStep(getCompletedStep + 1)
                "
                >{{
                  getCompletedStep === 12
                    ? "Proceed to confirmation"
                    : getCompletedStep === 13
                    ? "Confirm Appointment"
                    : "Next"
                }}<b-spinner variant="primary"></b-spinner
              ></b-button>
            </div>
            <p class="mt-3" v-if="getCompletedStep === 2">
              Not recieved code?
              <span class="text-primary c-pointer">Resend</span>
            </p>
            <div
              class="map mt-3"
              v-if="getCompletedStep === 10 || getCompletedStep === 11"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8163302922917!2d72.87653721540444!3d21.239130685937898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f46288c33f5%3A0x6242c4a7d89a8416!2sKhodiyar%20Nagar%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394101!5e0!3m2!1sen!2sin!4v1622213138177!5m2!1sen!2sin"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import {
  SchedulePlugin,
  Day,
  Week,
  Month,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-vue-schedule";
Vue.use(SchedulePlugin);

export default {
  data() {
    return {
      eventSettings: { dataSource: extend([], [], null, true) },
      selectedDate: new Date(2018, 5, 21),
      showWeekend: false,
      dayInterval: 5,
      timeScale: { enable: true, interval: 60, slotCount: 1 },
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getLoading", "getProgressValue", "getCompletedStep"]),
  },
  methods: {
    ...mapActions(["setCompletedStep"]),
    closeAppointment() {
      const confirmation = confirm("Are you sure?");
      if (confirmation) this.setCompletedStep(1);
    },
    oneventRendered: function (args) {
      let categoryColor = args.data.CategoryColor;
      if (!args.element || !categoryColor) {
        return;
      }
      args.element.style.backgroundColor = categoryColor;
    },
  },
  provide: {
    schedule: [Day, Week, Month, Resize, DragAndDrop],
  },
};
</script>