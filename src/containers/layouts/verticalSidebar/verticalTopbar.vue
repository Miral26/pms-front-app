<template>
  <div class="mb-30">
    <header class="main-header vertical-header d-flex">
      <div class="menu-toggle vertical-toggle" @click="mobileSidebar">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- <div
        :class="{ show: isMegaMenuOpen }"
        class="dropdown mega-menu d-none d-md-block"
        v-on-clickaway="closeMegaMenu"
      >
        <a
          href="#"
          class="btn text-muted dropdown-toggle mr-3"
          id="dropdownMegaMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="toggleMegaMenu"
          >Mega Menu</a
        >
        <div
          class="dropdown-menu text-left"
          :class="{ show: isMegaMenuOpen }"
          aria-labelledby="dropdownMenuButton"
        >
          <div class="row m-0">
            <div class="col-md-4 p-4 text-left bg-img">
              <h2 class="title">
                Mega Menu
                <br />Sidebar
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores natus laboriosam fugit, consequatur.
              </p>
              <p class="mb-30">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem odio amet eos dolore suscipit placeat.
              </p>
              <button class="btn btn-lg btn-rounded btn-outline-warning">
                Learn More
              </button>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Features
              </p>
              <div class="menu-icon-grid w-auto p-0">
                <a href="#"> <i class="i-Shop-4"></i> Home </a>
                <a href="#"> <i class="i-Library"></i> UI Kits </a>
                <a href="#"> <i class="i-Drop"></i> Apps </a>
                <a href="#">
                  <i class="i-File-Clipboard-File--Text"></i> Forms
                </a>
                <a href="#"> <i class="i-Checked-User"></i> Sessions </a>
                <a href="#"> <i class="i-Ambulance"></i> Support </a>
              </div>
            </div>
            <div class="col-md-4 p-4 text-left">
              <p
                class="text-primary text--cap border-bottom-primary d-inline-block"
              >
                Components
              </p>
              <ul class="links">
                <li>
                  <a href="accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="badges.html">Badges</a>
                </li>
                <li>
                  <a href="carousel.html">Carousels</a>
                </li>
                <li>
                  <a href="lists.html">Lists</a>
                </li>
                <li>
                  <a href="popover.html">Popover</a>
                </li>
                <li>
                  <a href="tables.html">Tables</a>
                </li>
                <li>
                  <a href="datatables.html">Datatables</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="nouislider.html">Sliders</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> -->
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
            @click="openAppointmentModal"
            v-b-popover.hover.bottom="'Add Appointment'"
          >
          </i>
          <i
            class="i-Add-User cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Add Patient'"
          >
          </i>
          <!-- <i
            class="i-Magnifi-Glass- cursor-pointer header-icon d-none d-sm-inline-block font-weight-bold"
            v-b-popover.hover.bottom="'Advanced Patient Search'"
          >
          </i> -->
        </div>
      </div>

      <div class="header-part-right">
        <!-- <b-form-datepicker
          :date-format-options="{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }"
          id="example-datepicker"
          v-model="dateSelected"
          class="datepicker-input"
        ></b-form-datepicker> -->

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
                {{ cloudBase.clinic ? cloudBase.clinic : "Cloud Based..." }}
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
                    <b-form-select
                      id="input-3"
                      v-model="cloudBase.clinic"
                      :options="cloudBase.clinics"
                      required
                    >
                    </b-form-select>
                  </div>
                </b-form>
              </div>
            </div>
          </b-dropdown>
        </div>
      </div>

      <b-modal id="new-appointment" size="xl">
        <NewAppointment />
      </b-modal>
    </header>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import * as moment from "moment";
import { mixin as clickaway } from "vue-clickaway";
import Util from "@/utils";
import NewAppointment from "../../../components/new-appointent/new-appointment";

export default {
  mixins: [clickaway],
  components: { NewAppointment },
  computed: {
    ...mapGetters([
      "getVerticalCompact",
      "getVerticalSidebar",
      "getSideBarToggleProperties",
    ]),
  },
  data() {
    return {
      isMegaMenuOpen: false,
      dateSelected: new Date(),
      headerSearch: "",
      appointmentData: {
        headerSearch: "",
        selectedTime: moment().format("HH:MM:ss"),
        selectedDate: new Date(2018, 7, 1),
      },
      options2: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" },
      ],

      cloudBase: {
        clinic: "Cloud Based...",
        clinics: ["Cloud Based...", "Clinic1", "Clinic2", "Clinic3"],
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
      "setAppointmentData",
    ]),
    openAppointmentModal() {
      this.setAppointmentData({
        headerSearch: "",
        selectedTime: moment().format("HH:MM:ss"),
        selectedDate: new Date(2018, 7, 1),
      });
      this.$bvModal.show("new-appointment");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    },
    closeMegaMenu() {
      this.isMegaMenuOpen = false;
      // console.log(this.isMouseOnMegaMenu);
      // if (!this.isMouseOnMegaMenu) {
      //   this.isMegaMenuOpen = !this.isMegaMenuOpen;
      // }
    },
    toggleMegaMenu() {
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
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