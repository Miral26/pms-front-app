<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <!-- <breadcumb :page="'Dashboard'" :folder="'Version 1'" /> -->
    <b-row>
      <b-col lg="12" xl="12" md="12">
        <b-card header="Daily Huddle" header-bg-variant="transparent">
          <b-row class="provider-dropdown">
            <b-dropdown id="dropdown-1" text="Select Provider" class="mb-2 mr-5">
              <b-dropdown-item>-- None --</b-dropdown-item>
              <b-dropdown-item>Heather Jones</b-dropdown-item>
              <b-dropdown-item>Kevin Paige</b-dropdown-item>
              <b-dropdown-item>Richard Greene</b-dropdown-item>
            </b-dropdown>
          </b-row>
          <div>
            <b-tabs content-class="mt-1">
              <b-tab title="Scheduled" active>
                <div class="card mb-20">
                  <div class="card-body p-0">
                    <DynamicCustomTable
                      :columns="tableColumns"
                      :rows="tableRows"
                    />
                  </div>
                </div>
              </b-tab>
              <b-tab title="In Office">
                <div class="card mb-20">
                  <div class="card-body p-0">
                    <DynamicCustomTable
                      :columns="tableColumns2"
                      :rows="tableRows2"
                    />
                  </div>
                </div>
              </b-tab>
              <b-tab title="Finished">
                <div class="card mb-20">
                  <div class="card-body p-0">
                    <DynamicCustomTable
                      :columns="tableColumns"
                      :rows="tableRows"
                    />
                  </div>
                </div>
              </b-tab>
              <b-tab title="Deferred">
                <div class="card mb-20">
                  <div class="card-body p-0">
                    <DynamicCustomTable
                      :columns="tableColumns2"
                      :rows="tableRows2"
                    />
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { echartBar, echartPie } from "@/data/echarts";
import DynamicCustomTable from "../dashboards/tables/DynamicCustomTable";
import { echart1, echart2, echart3 } from "@/data/dashboard1";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "DashboardV1",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v1",
  },
  components: {
    DynamicCustomTable,
  },
  data() {
    return {
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
        {
          label: "Action",
          field: "action",
          html: true,
          thClass: "text-left",
          tdClass: "text-left",
        },
      ],
      tableColumns: [
        "Time",
        "Location",
        "Name",
        "DOB",
        "Contact",
        "Status",
        "action",
      ],
      tableColumns2: [
        "Time",
        "Location",
        "Name",
        "DOB",
        "Contact",
        "Status",
        "action",
      ],
      tableRows: [
        {
          id: "1Pm",
          location: "Tower-NZ",
          name: "Alex",
          dob: "01-01-1985",
          contact: "9909601051",
          status: "Pending",
        },
        {
          id: "2Pm",
          location: "Ala-NZ",
          name: "Max",
          dob: "01-01-1854",
          contact: "99434501051",
          status: "Done",
        },
        {
          id: "3Pm",
          location: "Tower-NZ",
          name: "Joohn",
          dob: "01-01-1945",
          contact: "9905321051",
          status: "Review",
        },
      ],
      tableRows2: [
        {
          id: "3Pm",
          location: "Tower-NZ",
          name: "Alex",
          dob: "01-01-1985",
          contact: "9909601051",
          status: "Pending",
        },
        {
          id: "6Pm",
          location: "Ala-NZ",
          name: "Max",
          dob: "01-01-1854",
          contact: "99434501051",
          status: "Done",
        },
        {
          id: "9Pm",
          location: "Tower-NZ",
          name: "John",
          dob: "01-01-1945",
          contact: "9905321051",
          status: "Review",
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
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
          action:
            '<button class=" btn btn-outline-primary text-black btn-rounded">View</button>',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getItems"]),
    totalRows() {
      // return this.getFilterProducts.length;
    },
  },
  created: function () {
    // this.items = this.getItems;
  },
  methods: {
    addCartPage(item) {},
  },
  mounted() {
    // this.paginate(this.perPage, 0);
  },
};
</script>
<style>
.provider-dropdown {
  justify-content: flex-end;
}
</style>
