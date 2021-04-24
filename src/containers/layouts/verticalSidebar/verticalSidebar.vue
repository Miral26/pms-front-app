<template>
  <vue-perfect-scrollbar
    class="sidebar-panel rtl-ps-none ps scroll"
    @mouseleave.native="
      sidebarCompact();
      returnSelectedParentMenu();
    "
    @mouseenter.native="removeSidebarCompact"
    :class="{
      'vertical-sidebar-compact': getVerticalCompact.isSidebarCompact,
      'sidebar-full-collapse': getVerticalSidebar.isMobileCompact,
    }"
    :settings="{ suppressScrollX: true, wheelPropagation: false }"
  >
    <div>
      <div
        class="gull-brand text-center d-flex align-items-center pl-2 mb-2 justify-content-between"
      >
        <div>
          <img class src="@/assets/images/logo.png" />
        </div>
        <div class="toggle-sidebar-compact">
          <label class="switch ul-switch switch-primary ml-auto">
            <input @click="switchSidebar" type="checkbox" />
            <span class="ul-slider o-hidden"></span>
          </label>
        </div>
      </div>

      <div class="close-mobile-menu" @click="mobileSidebar">
        <i class="text-16 text-primary i-Close-Window font-weight-bold"></i>
      </div>

      <div class="mt-4 main-menu">
        <ul class="ul-vertical-sidebar pl-4" id="menu">
          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-1>
              <router-link
                tag="a"
                class="has-arrow"
                to="/app/dashboards/dashboard.v1"
                :class="{ active: selectedParentMenu == 'dashboards' }"
              >
                <i
                  class="i-Bar-Chart text-25 mr-2 text-muted"
                  v-b-popover.hover.right="'Daily Huddle'"
                ></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Daily Huddle</span
                >
              </router-link>
            </div>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-2>
              <router-link
                tag="a"
                class="has-arrow"
                to="/app/dashboards/dashboard.v1"
                :class="{ active: selectedParentMenu == 'scheduler' }"
              >
                <i
                  class="i-Bar-Chart text-25 mr-2 text-muted"
                  v-b-popover.hover.right="'Scheduler'"
                ></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Scheduler</span
                >
              </router-link>
            </div>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-3>
              <a
                class="has-arrow"
                href="#"
                :class="{ active: selectedParentMenu == 'reports' }"
              >
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Reports</span
                >
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-3">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/reports">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Reports</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/alerts">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>KPI Dashboard</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/pages/icons">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Revenue Discovery</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-4>
              <a
                class="has-arrow"
                href="#"
                :class="{ active: selectedParentMenu == 'claims' }"
              >
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Claims</span
                >
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-4">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/extraKits/dropdown">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Claim Management</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/accordion">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Claim History</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-5>
              <router-link
                tag="a"
                class="has-arrow"
                to="/app/dashboards/dashboard.v1"
                :class="{ active: selectedParentMenu == 'payment' }"
              >
                <i
                  class="i-Bar-Chart text-25 mr-2 text-muted"
                  v-b-popover.hover.right="'Payment Plan'"
                ></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Payment Plan</span
                >
              </router-link>
            </div>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-6>
              <router-link
                tag="a"
                class="has-arrow"
                to="/app/dashboards/dashboard.v1"
                :class="{ active: selectedParentMenu == 'secure' }"
              >
                <i
                  class="i-Bar-Chart text-25 mr-2 text-muted"
                  v-b-popover.hover.right="'Secure Messages'"
                ></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Secure Messages</span
                >
              </router-link>
            </div>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-7>
              <a
                class="has-arrow"
                href="#"
                :class="{ active: selectedParentMenu == 'statement' }"
              >
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Statement & Bulk</span
                >
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-7">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/ui-kits/badges">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Billing Statement</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/buttons">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Bulk Check</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-8>
              <a
                class="has-arrow"
                href="#"
                :class="{ active: selectedParentMenu == 'settings' }"
              >
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >Settings</span
                >
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-8">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/ui-kits/cards">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Clinic</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/list">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>HelloPatient</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/progressbar">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Insurance</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/modals">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Progress Notes</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>

          <li class="Ul_li--hover">
            <div v-b-toggle.collapse-9>
              <a
                class="has-arrow"
                href="#"
                :class="{ active: selectedParentMenu == 'more' }"
              >
                <i class="i-Suitcase text-20 mr-2"></i>
                <span
                  class="text-15"
                  :class="{
                    'vertical-item-name': getVerticalCompact.isItemName,
                  }"
                  >More</span
                >
                <arrowIcon />
              </a>
            </div>
            <b-collapse id="collapse-9">
              <ul
                class="Ul_collapse"
                :class="{ 'vertical-item-name': getVerticalCompact.isItemName }"
              >
                <li class="item-name">
                  <router-link tag="a" to="/app/ui-kits/carousel">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Activity Audit</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/ui-kits/pagination">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Imaging Studio</span>
                  </router-link>
                </li>
                <li>
                  <router-link tag="a" to="/app/extraKits/rating">
                    <i class="i-Circular-Point mr-2"></i>
                    <span class>Time Keeper</span>
                  </router-link>
                </li>
              </ul>
            </b-collapse>
          </li>
        </ul>
      </div>
    </div>
  </vue-perfect-scrollbar>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import arrowIcon from "@/components/arrow/arrowIcon";
export default {
  components: {
    arrowIcon,
  },
  computed: {
    ...mapGetters(["getVerticalCompact", "getVerticalSidebar"]),
  },
  data() {
    return {
      selectedParentMenu: "",
    };
  },
  mounted() {
    this.toggleSelectedParentMenu();
    document.addEventListener("click", this.returnSelectedParentMenu);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.returnSelectedParentMenu);
  },
  methods: {
    ...mapActions([
      "switchSidebar",
      "sidebarCompact",
      "removeSidebarCompact",
      "mobileSidebar",
    ]),

    toggleSelectedParentMenu() {
      const currentParentUrl = this.$route.path
        .split("/")
        .filter((x) => x !== "")[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
        console.log(currentParentUrl);
      } else {
        this.selectedParentMenu = "dashboards";
      }
    },
    returnSelectedParentMenu() {
      this.toggleSelectedParentMenu();
    },
  },
};
</script>
<style>
</style>