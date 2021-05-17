<template>
  <div>
    <Header />
    <div class="landing-wrap">
      <div class="w-100 h-100">
        <b-row>
          <b-col md="6" lg="6">
            <div class="banner-image">
              <img src="@/assets/images/banner-image.svg" alt />
            </div>
          </b-col>
          <b-col md="6" lg="6">
            <div class="banner-content">
              <h2>Manage Your Dental Practice Better.</h2>
              <p>
                Vertically integrated PMS, EHR & Telehealth platform for fast
                patient scheduling & management.
              </p>
              <a href="" class="btn btn-white"> Get Stearted</a>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.landing-wrap {
  min-height: 100vh;
  padding: 100px 60px;
  background-color: #6cdcd4;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.banner-image {
  position: relative;
  padding: 40px;
  max-width: 680px;
  margin: 0 auto;
  z-index: 1;
}
.banner-image:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 100%;
  -moz-transform: rotate(-55deg);
  -webkit-transform: rotate(-55deg);
  transform: rotate(-55deg);
  margin: -70px;
  z-index: -1;
}
.banner-content h2 {
  color: #fff;
  font-size: 80px;
  font-weight: bold;
}
.banner-content p {
  color: #fff;
  font-size: 30px;
}
.btn.btn-white {
  color: #6cdcd4;
  background-color: #fff;
  padding: 10px 40px;
  border-radius: 40px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}
</style>
<script>
import Header from "../global-header/global-header.vue";
import Footer from "../global-footer/global-footer.vue";

export default {
  components: { Header, Footer },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>