<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="12" xl="12" md="12">
        <!--  <b-card header="Daily Huddle" header-bg-variant="transparent">-->
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center mb-4">
            <div class="mr-3 page-title"><h3 class="font-weight-bold m-0">Daily Huddle</h3></div>
            <div class="daily-huddle">
              <span :class="`mr-3 ${selectedView === 'Table' ? 'active-tab' : ''}`"
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
              <span :class="`ml-2 ${selectedView !== 'Table' ? 'active-tab' : ''}`">Card</span>
            </div>
          </div>
          <div>
            <b-dropdown
              id="view-selector"
              class="mb-2 mr-5"
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
        <b-row class="provider-dropdown"> </b-row>
        <div class="huddle-tab" v-if="selectedView === 'Table'">
          <b-tabs content-class="mt-1">
            <b-tab title="Scheduled" active>
              <div class="mb-20">
                <DynamicCustomTableView
                  :columns="tableColumns"
                  :rows="tableRows"
                />
              </div>
            </b-tab>
            <b-tab title="In Office">
              <div class="card mb-20">
                <div class="card-body p-0">
                  <DynamicCustomTableView
                    :columns="tableColumns2"
                    :rows="tableRows2"
                  />
                </div>
              </div>
            </b-tab>
            <b-tab title="Finished">
              <div class="card mb-20">
                <div class="card-body p-0">
                  <DynamicCustomTableView
                    :columns="tableColumns"
                    :rows="tableRows"
                  />
                </div>
              </div>
            </b-tab>
            <b-tab title="Deferred">
              <div class="card mb-20">
                <div class="card-body p-0">
                  <DynamicCustomTableView
                    :columns="tableColumns2"
                    :rows="tableRows2"
                  />
                </div>
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
import { echartBar, echartPie } from "@/data/echarts";
import DynamicCustomTableView from "../dashboards/views/table/DynamicCustomTableView";
import DynamicDraggableView from "../dashboards/views/draggable/DynamicDraggableView";
import { echart1, echart2, echart3 } from "@/data/dashboard1";

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
      rating: 4,
      search: "",
      isProduct: true,
      echartBar,
      echartPie,
      echart1,
      echart2,
      echart3,
      columns: [
        {
          label: "Order Id",
          field: "id",
          thClass: "text-left pl-3",
          tdClass: "text-left pl-3",
        },
        {
          label: "Buyer Name",
          field: "name",
          thClass: "text-left",
          tdClass: "text-left",
        },
        {
          label: "Product",
          field: "img",
          html: true,
          thClass: "text-left",
          tdClass: "text-left",
        },
        {
          label: "Status",
          field: "span",
          html: true,
          thClass: "text-left",
          tdClass: "text-left",
        },

        {
          label: "Shipping Cost",
          field: "score",

          // html:true,
          type: "percentage",
          thClass: "text-left",
          tdClass: "text-left",
        },
        {
          label: "Date",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "mmm Do yy",
          thClass: "text-left",
          tdClass: "text-left",
        },
      ],
      tableColumns: ["Time", "Location", "Name", "DOB", "Contact", "Status"],
      tableColumns2: ["Time", "Location", "Name", "DOB", "Contact", "Status"],
      tableRows: [
        {
          id: "1Pm",
          location: "Tower-NZ",
          name: "Alex",
          dob: "01-01-1985",
          contact: "9909601051",
          status: "Scheduled",
        },
        {
          id: "2Pm",
          location: "Ala-NZ",
          name: "Max",
          dob: "01-01-1854",
          contact: "99434501051",
          status: "Scheduled",
        },
        {
          id: "3Pm",
          location: "Tower-NZ",
          name: "Joohn",
          dob: "01-01-1945",
          contact: "9905321051",
          status: "Scheduled",
        },
      ],
      tableRows2: [
        {
          id: "3Pm",
          location: "Tower-NZ",
          name: "Alex",
          dob: "01-01-1985",
          contact: "9909601051",
          status: "Scheduled",
        },
        {
          id: "6Pm",
          location: "Ala-NZ",
          name: "Max",
          dob: "01-01-1854",
          contact: "99434501051",
          status: "Scheduled",
        },
        {
          id: "9Pm",
          location: "Tower-NZ",
          name: "John",
          dob: "01-01-1945",
          contact: "9905321051",
          status: "Scheduled",
        },
      ],
      rows: [
        {
          id: 1,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/iphone-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-primary p-2 ">Delivered</span>',
          createdAt: "2019-10-31 ",
          score: 0.03343,
        },
        {
          id: 2,
          name: "Jane",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 3,
          name: "Susan",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-3.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-4.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
          createdAt: "2011-10-30",
          score: 0.03343,
        },
        {
          id: 4,
          name: "Chris",
          img:
            '<img src="' +
            require("@/assets/images/products/speaker-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/speaker-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-primary p-2">Pending</span>',
          createdAt: "2011-10-11",
          score: 0.03343,
        },
        {
          id: 5,
          name: "Dan",
          img:
            '<img src="' +
            require("@/assets/images/products/watch-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/watch-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-info p-2">Processing</span>',
          createdAt: "2011-10-21",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/speaker-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/speaker-2.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-success p-2 ">Delivered</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 7,
          name: "John",
          img:
            '<img src="' +
            require("@/assets/images/products/headphone-3.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/headphone-4.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-info p-2 ">Pending</span>',
          createdAt: "2019-10-31 ",
          score: 0.03343,
        },
        {
          id: 8,
          name: "Jane",
          img:
            '<img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt=""> <img src="' +
            require("@/assets/images/products/iphone-1.jpg") +
            '" class="rounded-circle avatar-sm" alt="">',
          span:
            '<span class="badge badge-pill badge-outline-danger p-2">Shipped</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
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
    padding: 15px;
}
.card-table .table tbody tr td:first-child span {
    border-radius: 10px 0 0 10px;
}
.card-table .table tbody tr td:last-child span {
    border-radius: 0 10px 10px 0;
}
</style>
