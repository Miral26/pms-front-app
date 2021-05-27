<template>
  <b-sidebar
    id="sidebar-right"
    class="patient-detail-sidebar"
    title="Patient Information"
    @change="onSidebarVisibilityChange"
    right
    shadow
  >
    <div class="px-3 py-2">
      <div class="patient-info row align-items-center">
        <div class="left col-md-8" v-if="getPatientData.id">
          <div class="patient-img">
            <img src="@/assets/images/faces/1.jpg" alt="" />
          </div>
          <div class="patient-detail">
            <h6>
              {{ getPatientData.first_name }} {{ getPatientData.last_name }}
            </h6>
            <span
              >{{ moment(getPatientData.dob).format("YYYY/MM/DD") }} ({{
                moment().diff(moment(getPatientData.dob), "years")
              }}
              years old)</span
            >
          </div>
        </div>
        <div class="left col-md-8" v-if="!getPatientData.id">
          <h5 class="mb-3">Create New Patient</h5>
          <b-form-group>
            <div class="form-row">
              <div class="col-md-6">
                <label>First Name <span class="required">*</span></label>
                <b-form-input
                  type="text"
                  :value="getPatientData.first_name || ''"
                />
              </div>
              <div class="col-md-6">
                <label>Last Name <span class="required">*</span></label>
                <b-form-input
                  type="text"
                  :value="getPatientData.last_name || ''"
                />
              </div>
            </div>
          </b-form-group>
          <b-form-group>
            <div class="form-row">
              <div class="col-md-6">
                <label>Gender</label>
                <b-dropdown
                  class="gender-dropdown"
                  :text="getPatientData.gender || 'Select a gender'"
                >
                  <b-dropdown-item @click="setPatientData({ gender: '' })"
                    >Select a gender</b-dropdown-item
                  >
                  <b-dropdown-item @click="setPatientData({ gender: 'Male' })"
                    >Male</b-dropdown-item
                  >
                  <b-dropdown-item @click="setPatientData({ gender: 'Female' })"
                    >Female</b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <div class="col-md-6">
                <label>Birthday <span class="required">*</span></label>
                <b-form-datepicker
                  :date-format-options="{
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  }"
                  :value="getPatientData.dob"
                  id="patient-dob"
                  class="datepicker-input icon-none"
                ></b-form-datepicker>
              </div>
            </div>
          </b-form-group>
        </div>
        <div class="right col-md-4 text-right">
          <p>Preferred Days</p>
          <span>[None]</span>
          <p>Preferred Times</p>
          <span>[None]</span>
        </div>
      </div>
      <div class="patient-info-tabs mt-4">
        <div class="time-icon">
          <img src="@/assets/images/clock.svg" alt="image" />
        </div>
        <b-tabs>
          <b-tab
            title="Appt"
            :active="getActiveTabInPatientForm === 'appt'"
            @click="setActiveTabInPatientForm('appt')"
          >
            <div class="appt-form">
              <b-form-group>
                <div class="d-flex align-items-center">
                  <div class="status-dropdown">
                    <label>Status</label>
                    <b-dropdown id="dropdown-1" text="Unconfirmed">
                      <b-dropdown-item>Unconfirmed</b-dropdown-item>
                    </b-dropdown>
                  </div>
                  <a href="#" class="schedule-link">Schedule</a>
                  <b-button
                    variant="button"
                    class="btn-primary ml-auto"
                    @click="$router.push('/app/video-call')"
                    >Enter Video</b-button
                  >
                </div>
              </b-form-group>
              <b-form-group>
                <ul class="selection-section mt-4">
                  <li>
                    <label class="checkbox checkbox-outline-primary">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                      <span>ASAP</span></label
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
                      <span class="checkmark"></span><span>Pinned</span></label
                    >
                  </li>
                </ul>
              </b-form-group>
              <b-form-group>
                <div class="tx-planner-wrap mt-4">
                  <div class="row">
                    <div class="col-md-4">
                      <label
                        >Procedure(s) 0 selected<span class="required"
                          >*</span
                        ></label
                      >
                      <div class="search-procedure">
                        <b-form-input
                          type="text"
                          required
                          placeholder="Procedure selected"
                        ></b-form-input>
                        <i class="fa fa-map-marker"></i>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label>Other</label>
                      <b-form-input
                        type="text"
                        required
                        placeholder="Other"
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
                <div class="patient-form-filed mt-3">
                  <div class="row">
                    <div class="col-md-4">
                      <label>Operatory <span class="required">*</span></label>
                      <b-dropdown text="Operatory">
                        <b-dropdown-item>Operatory</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label
                        >Additional Provider
                        <span class="required">*</span></label
                      >
                      <b-dropdown text="Additional Provider">
                        <b-dropdown-item>Additional Provider</b-dropdown-item>
                      </b-dropdown>
                    </div>
                    <div class="col-md-4">
                      <label>Additional Provider</label>
                      <b-dropdown text="Additional Provider">
                        <b-dropdown-item>Additional Provider</b-dropdown-item>
                      </b-dropdown>
                    </div>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="patient-form-filed mt-3">
                  <div class="row">
                    <div class="col-md-3">
                      <label>Date</label>
                      <b-form-datepicker
                        class="icon-none"
                        :date-format-options="{
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                        }"
                        v-model="selectedDate"
                        :min="selectedDate"
                      ></b-form-datepicker>
                    </div>
                    <div class="col-md-4">
                      <label>Time</label>
                      <div class="form-row">
                        <div class="col-md-6">
                          <b-form-group>
                            <b-form-timepicker
                              id="time1"
                              now-button
                              class="default-timepicker"
                              reset-button
                              locale="en"
                            ></b-form-timepicker>
                          </b-form-group>
                        </div>
                        <div class="col-md-6">
                          <b-form-timepicker
                            id="time2"
                            now-button
                            class="default-timepicker"
                            reset-button
                            locale="en"
                          ></b-form-timepicker>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <label>Length</label>
                      <div class="form-row">
                        <div class="col-md-6">
                          <div class="d-flex align-items-center">
                            <b-form-input
                              type="text"
                              required
                              placeholder="Time"
                            ></b-form-input>
                            <div class="lenght-lebel">hr</div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="d-flex align-items-center">
                            <b-form-input
                              type="text"
                              required
                              placeholder="Time"
                            ></b-form-input>
                            <div class="lenght-lebel">min</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form-group>
              <b-form-group>
                <div class="patient-form-filed mt-3">
                  <label>Notes</label>
                  <b-form-textarea
                    rows="5"
                    placeholder="Enter Appointment Note"
                  >
                  </b-form-textarea>
                </div>
              </b-form-group>
            </div>
          </b-tab>
          <b-tab
            title="Contact Info"
            :active="getActiveTabInPatientForm === 'contact'"
            @click="setActiveTabInPatientForm('contact')"
          >
          </b-tab>
          <b-tab
            title="Rel. Appts"
            :active="getActiveTabInPatientForm === 'rel'"
            @click="setActiveTabInPatientForm('rel')"
          >
          </b-tab>
          <b-tab
            title="Med. Alerts"
            :active="getActiveTabInPatientForm === 'med'"
            @click="setActiveTabInPatientForm('med')"
          >
          </b-tab>
          <b-tab
            title="Lab Case"
            :active="getActiveTabInPatientForm === 'lab'"
            @click="setActiveTabInPatientForm('lab')"
          >
          </b-tab>
          <b-tab
            v-if="getPatientData.id"
            title="Chat"
            :active="getActiveTabInPatientForm === 'chat'"
            @click="setActiveTabInPatientForm('chat')"
          >
            <PatientChat
          /></b-tab>
        </b-tabs>
        <div class="patient-form-button">
          <b-form-group class="px-3">
            <div class="row mt-4">
              <div class="col-md-8">
                <div class="form-btn">
                  <b-button variant="primary" class="rounded">Save</b-button>
                  <b-button variant="outline-primary" class="rounded"
                    >Cancel</b-button
                  >
                </div>
              </div>
              <div class="col-md-4 text-right">
                <b-button variant="link" class="text-danger">Delete</b-button>
              </div>
            </div>
          </b-form-group>
        </div>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PatientChat from "../../components/patient-chat/patient-chat";
import * as moment from "moment";
export default {
  data() {
    return {
      moment,
      selectedDate: new Date(),
    };
  },
  components: { PatientChat },
  computed: {
    ...mapGetters(["getPatientData", "getActiveTabInPatientForm"]),
  },
  methods: {
    ...mapActions(["setActiveTabInPatientForm", "setPatientData"]),
    onSidebarVisibilityChange(e) {
      const element = document.querySelector(".patient-detail-sidebar");
      if (e) {
        element.classList.add("sidebar-open");
      } else {
        element.classList.remove("sidebar-open");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
