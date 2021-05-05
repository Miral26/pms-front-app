<template>
  <div class="mb-30">
    <header class="main-header vertical-header d-flex">
      <div class="menu-toggle vertical-toggle" @click="mobileSidebar">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="header-toggle">
        <div class="search-bar">
          <i class="search-icon text-muted i-Magnifi-Glass1"></i>
          <input
            type="text"
            placeholder="Search a Patient"
            v-model="headerSearch"
          />
        </div>

        <!-- Header Icons -->
        <div class="d-flex">
          <i
            class="i-File-Clipboard-File--Text cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Add Appointment'"
          >
          </i>
          <i
            class="i-Add-User cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Add Patient'"
          >
          </i>
          <i
            class="i-Magnifi-Glass- cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Advanced Patient Search'"
          >
          </i>
        </div>
      </div>

      <div class="header-part-right">
        <b-form-datepicker
          id="example-datepicker"
          v-model="dateSelected"
          class="datepicker-input"
        ></b-form-datepicker>

        <div class="dropdown location">
          <b-dropdown
            id="dropdown"
            text="Dropdown Button"
            toggle-class="text-decoration-none"
            no-caret
            variant="button"
          >
            <template slot="button-content">
              <i
                class="i-Home1 header-icon"
                role="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              <span
                class="text-decoration-none text-14 cursor-pointer"
                style="text-decoration: none"
              >
                {{ cloudBase.clinic ? cloudBase.clinic : "Cloud Base..." }}
                <i
                  class="i-Arrow-Down text-20 cursor-pointer header-icon d-sm-inline-block"
                  v-b-popover.hover.bottom="'Client - Location'"
                >
                </i>
              </span>
            </template>
            <div class="menu-icon-grid p-3 border-dark">
              <div class="form-group w-100">
                <b-form>
                  <div class="form-group">
                    <label for="">Select a Clinic</label>
                    <b-form-select
                      id="input-3"
                      v-model="cloudBase.clinic"
                      :options="cloudBase.clinics"
                      required
                    >
                    </b-form-select>
                  </div>

                  <!-- <div class="form-group">
                    <label for="">Select Location</label>
                    <b-form-select
                      class=" "
                      placeholder="Select Location"
                      id="input-3"
                      v-model="cloudBase.location"
                      :options="cloudBase.locations"
                      required
                    >
                    </b-form-select>
                  </div> -->
                </b-form>
              </div>
              <!-- <a href="#"> <i class="i-Shop-4"></i> Home </a> -->
              <!-- <a href="#"> <i class="i-Shop-4"></i> Home </a>
              <a href="#"> <i class="i-Library"></i> UI Kits </a>
              <a href="#"> <i class="i-Drop"></i> Apps </a>
              <a href="#"> <i class="i-File-Clipboard-File--Text"></i> Forms </a>
              <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
              <a href="#"> <i class="i-Ambulance"></i> Support </a> -->
            </div>
          </b-dropdown>
        </div>

        <!-- <div class="" >
        </div> -->
        <!-- Notificaiton -->
        <!-- <div class="dropdown">
          <b-dropdown 
            id="dropdown-1"
            right
            text="Right align"
            class="m-md-2  badge-top-container"
            toggle-class="text-decoration-none"
            no-caret
            variant="link"
          >
            <template slot="button-content">
              <span class="badge badge-primary">3</span>
              <i class="i-Bell text-muted header-icon"  v-b-popover.hover.bottom="'Notifications'"></i>
            </template>
            <vue-perfect-scrollbar
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              :class="{ open: getSideBarToggleProperties.isSideNavOpen }"
              ref="myData"
              class="dropdown-menu-right rtl-ps-none notification-dropdown  ps scroll"
            >
              <div class="dropdown-item d-flex">
                <div class="notification-icon">
                  <i class="i-Speach-Bubble-6 text-primary mr-1"></i>
                </div>
                <div class="notification-details flex-grow-1">
                  <p class="m-0 d-flex align-items-center">
                    <span>New message</span>
                    <span class="flex-grow-1"></span>
                    <span class="text-small text-muted ml-auto">10 sec ago</span>
                  </p>
                  <p class="text-small text-muted m-0">
                    James: Hey! are you busy?
                  </p>
                </div>
              </div>
              <div class="dropdown-item d-flex">
                <div class="notification-icon">
                  <i class="i-Receipt-3 text-success mr-1"></i>
                </div>
                <div class="notification-details flex-grow-1">
                  <p class="m-0 d-flex align-items-center">
                    <span>New order received</span>
                    <span class="flex-grow-1"></span>
                    <span class="text-small text-muted ml-auto">2 hours ago</span>
                  </p>
                  <p class="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                </div>
              </div>
              <div class="dropdown-item d-flex">
                <div class="notification-icon">
                  <i class="i-Empty-Box text-danger mr-1"></i>
                </div>
                <div class="notification-details flex-grow-1">
                  <p class="m-0 d-flex align-items-center">
                    <span>Product out of stock</span>
                    <span class="flex-grow-1"></span>
                    <span class="text-small text-muted ml-auto"
                      >10 hours ago</span
                    >
                  </p>
                  <p class="text-small text-muted m-0">
                    Headphone E67, R98, XL90, Q77
                  </p>
                </div>
              </div>
              <div class="dropdown-item d-flex">
                <div class="notification-icon">
                  <i class="i-Data-Power text-success mr-1"></i>
                </div>
                <div class="notification-details flex-grow-1">
                  <p class="m-0 d-flex align-items-center">
                    <span>Server Up!</span>
                    <span class="flex-grow-1"></span>
                    <span class="text-small text-muted ml-auto"
                      >14 hours ago</span
                    >
                  </p>
                  <p class="text-small text-muted m-0">
                    Server rebooted successfully
                  </p>
                </div>
              </div>
            </vue-perfect-scrollbar>
          </b-dropdown>
        </div> -->
        <!-- Notificaiton End -->

        <!-- User avatar dropdown -->
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Util from "@/utils";
import * as moment from "moment";

export default {
  computed: {
    ...mapGetters([
      "getVerticalCompact",
      "getVerticalSidebar",
      "getSideBarToggleProperties",
    ]),
  },
  data() {
    return {
      dateSelected: new Date(),
      headerSearch: "",
      options2: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
      ],

      cloudBase: {
        clinic: null,
        clinics: [
          { text: "Select Clinic", value: null },
          "Cloud Base...",
          "Clinic1",
          "Clinic2",
          "Clinic3",
        ],
        location: null,
        locations: [
          { text: "Select Location", value: null },
          "USD",
          "Canada",
          "Africa",
          "Australia",
        ],
      },
    };
  },
  methods: {
    ...mapActions([
      "signOut",
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar",
    ]),

    handleFullScreen() {
      Util.toggleFullScreen();
    },
    logoutUser() {
      this.signOut();
      this.$router.push("/app/sessions/signIn");
    },
  },
  watch: {
    // dateSelected(val){
    // }
  },
};
</script>>