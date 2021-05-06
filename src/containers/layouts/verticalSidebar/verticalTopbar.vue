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
          :date-format-options="{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }"
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
                </b-form>
              </div>
            </div>
          </b-dropdown>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Util from "@/utils";

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