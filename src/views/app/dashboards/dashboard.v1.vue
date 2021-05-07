<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="12" xl="12" md="12">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center mb-4">
            <div class="mr-3 page-title">
              <h3 class="font-weight-bold m-0">Daily Huddle</h3>
            </div>
            <div class="daily-huddle">
              <span
                :class="`mr-3 ${selectedView === 'Table' ? 'active-tab' : ''}`"
                >Tab</span
              >
              <label class="switch m-0">
                <input
                  type="checkbox"
                  :checked="selectedView !== 'Table'"
                  @change="
                    selectedView =
                      selectedView === 'Table' ? 'Draggable' : 'Table'
                  "
                />
                <span class="slider"></span>
              </label>
              <span
                :class="`ml-2 ${selectedView !== 'Table' ? 'active-tab' : ''}`"
                >Card</span
              >
            </div>
          </div>
          <div>
            <b-dropdown
              class="provider-dropdown mb-2 mr-5"
              :text="selectedProvider ? selectedProvider : 'Select Provider'"
            >
              <b-dropdown-item @click="selectedProvider = ''"
                >Select Provider</b-dropdown-item
              >
              <b-dropdown-item
                v-for="provider in providers"
                :value="provider.name"
                :key="provider.id"
                @click="selectedProvider = provider.name"
                >{{ provider.name }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>

        <div class="huddle-tab" v-if="selectedView === 'Table'">
          <b-tabs content-class="mt-1">
            <b-tab title="Scheduled (12)" active>
              <div class="mb-20">
                <DynamicCustomTableView
                  :columns="tableColumns"
                  :rows="tableRows"
                />
              </div>
            </b-tab>
            <b-tab title="In Office (45)">
              <div class="mb-20">
                <DynamicCustomTableView
                  :columns="tableColumns"
                  :rows="tableRows"
                />
              </div>
            </b-tab>
            <b-tab title="Finished (34)">
              <div class="mb-20">
                <DynamicCustomTableView
                  :columns="tableColumns"
                  :rows="tableRows"
                />
              </div>
            </b-tab>
            <b-tab title="Deferred (21)">
              <div class="mb-20">
                <DynamicCustomTableView
                  :columns="tableColumns"
                  :rows="tableRows"
                />
              </div>
            </b-tab>
          </b-tabs>
        </div>
        <div class="mt-1" v-if="selectedView === 'Draggable'">
          <DynamicDraggableView />
        </div>
        <!--</b-card>-->
      </b-col>
    </b-row>
  </div>
</template>
<script>
import DynamicCustomTableView from "../dashboards/views/table/DynamicCustomTableView";
import DynamicDraggableView from "../dashboards/views/draggable/DynamicDraggableView";

import { mapGetters } from "vuex";

export default {
  name: "DashboardV1",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v1",
  },
  components: {
    DynamicCustomTableView,
    DynamicDraggableView,
  },
  data() {
    return {
      providers: [
        {
          id: 1,
          name: "Provider 1",
        },
        {
          id: 2,
          name: "Provider 2",
        },
        {
          id: 3,
          name: "Provider 3",
        },
      ],
      selectedProvider: "",
      selectedView: "Table",
      viewOptions: [
        {
          id: "table_view",
          title: "Table",
        },
        {
          id: "draggable_view",
          title: "Draggable",
        },
      ],
      tableColumns: ["Time", "Location", "Name", "DOB", "Contact", "Status"],
      tableRows: [
        {
          id: 1,
          time: "07:00-07:30 AM",
          location: "Medical Center 1",
          name: "Jack Liang",
          dob: "12-21-1992",
          contact: "(815) - 302 - 864",
          status: "Scheduled",
        },
        {
          id: 2,
          time: "07:00-07:30 AM",
          location: "Medical Center 1",
          name: "Jack Liang",
          dob: "12-21-1992",
          contact: "(815) - 302 - 864",
          status: "Scheduled",
        },
        {
          id: 3,
          time: "07:00-07:30 AM",
          location: "Medical Center 1",
          name: "Jack Liang",
          dob: "12-21-1992",
          contact: "(815) - 302 - 864",
          status: "Scheduled",
        },
        {
          id: 4,
          time: "07:00-07:30 AM",
          location: "Medical Center 1",
          name: "Jack Liang",
          dob: "12-21-1992",
          contact: "(815) - 302 - 864",
          status: "Scheduled",
        },
        {
          id: 5,
          time: "07:00-07:30 AM",
          location: "Medical Center 1",
          name: "Jack Liang",
          dob: "12-21-1992",
          contact: "(815) - 302 - 864",
          status: "Scheduled",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getItems"]),
  },
  created: function () {
    // this.items = this.getItems;
  },
  methods: {
    addCartPage() {},
  },
  mounted() {
    // this.paginate(this.perPage, 0);
  },
};
</script>
<style>
.daily-huddle .switch input:checked + .slider,
.daily-huddle .switch .slider {
  background-color: #fff !important;
}
.switch .slider:before {
  background-color: #6cdcd4 !important;
}
.daily-huddle span {
  color: #9badbf;
  font-weight: normal;
}
.provider-dropdown .dropdown-toggle {
    max-width: 200px;
    min-width: 200px;
    text-align: left;
}
.provider-dropdown .dropdown-menu {
    right: 0 !important;
}
.daily-huddle span.active-tab {
  color: #355677;
}
.huddle-tab {
  background-color: #eaf4fb;
  padding: 20px;
  border-radius: 10px;
}
.tabs .nav-tabs {
  border: 0;
}
.tabs .nav-tabs .nav-item .nav-link {
  border: 0;
  background-color: transparent;
  position: relative;
  font-weight: bold;
  color: #05070b;
  padding: 10px 10px 5px;
}
.tabs .nav-tabs .nav-item .nav-link.active:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 2px;
  background-color: #6cdcd4;
  margin: 0 auto;
}
.tabs .nav-tabs .nav-item .nav-link.active {
  color: #6cdcd4;
  border: 0;
  background-color: transparent;
}
.card-table .table th {
  border: 0;
  padding: 0;
  text-align: center;
  background-color: transparent;
}
.card-table .table th span {
  padding: 12px;
  margin-bottom: 10px;
  display: block;
  border-bottom: 1px solid #ddd;
}
.card-table .table tbody tr td {
  border: 0;
  padding: 0;
  text-align: center;
}
.card-table .table tbody tr:hover {
  background-color: transparent;
}
.card-table .table tbody tr td span {
  background-color: #fff;
  border: 0;
  margin-top: 8px;
  display: block;
  padding: 25px;
}
.card-table .table tbody tr td span label {
  margin: 0;
  padding-left: 12px;
  margin-left: 10px;
  position: relative;
}
.card-table .table tbody tr td span label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #111827;
}
.status {
  color: #00c5b4;
}
.card-table .table tbody tr td:first-child span {
  border-radius: 10px 0 0 10px;
}
.card-table .table tbody tr td:last-child span {
  border-radius: 0 10px 10px 0;
}
</style>
