<template>
  <div class="page-loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading {
  border: 3px solid #eaf4fb;
  position: absolute;
  left: calc(50% - 35px);
  top: 50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border-top-color: #6cdcd4;
  animation: loader 1s ease-in-out infinite;
  -webkit-animation: loader 1s ease-in-out infinite;
}

@keyframes loader {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes page-loader {
  0% {
    transform: translate(6.14px, 50px) scale(0);
  }

  25% {
    transform: translate(6.14px, 50px) scale(0);
  }

  50% {
    transform: translate(6.14px, 50px) scale(1);
  }

  75% {
    transform: translate(50px, 50px) scale(1);
  }

  100% {
    transform: translate(100px, 50px) scale(1);
  }
}

@keyframes page-loader-r {
  0% {
    transform: translate(100px, 50px) scale(1);
  }

  100% {
    transform: translate(100px, 50px) scale(0);
  }
}

@keyframes page-loader-c {
  0% {
    background: #2ec4b6;
  }

  25% {
    background: #2ec4b6;
  }

  50% {
    background: #2ec4b6;
  }

  75% {
    background: #2ec4b6;
  }

  100% {
    background: #2ec4b6;
  }
}

.page-loader div {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translate(50px, 50px) scale(1);
  background: #2ec4b6;
  animation: page-loader 2.083333333333333s infinite
    cubic-bezier(0, 0.5, 0.5, 1);
}

.page-loader div:nth-child(1) {
  background: #2ec4b6;
  transform: translate(100px, 50px) scale(1);
  animation: page-loader-r 0.5208333333333333s infinite
      cubic-bezier(0, 0.5, 0.5, 1),
    page-loader-c 2.083333333333333s infinite step-start;
}

.page-loader div:nth-child(2) {
  animation-delay: -0.5208333333333333s;
  background: #2ec4b6;
}

.page-loader div:nth-child(3) {
  animation-delay: -1.0416666666666665s;
  background: #2ec4b6;
}

.page-loader div:nth-child(4) {
  animation-delay: -1.5624999999999998s;
  background: #2ec4b6;
}

.page-loader div:nth-child(5) {
  animation-delay: -2.083333333333333s;
  background: #2ec4b6;
}

.page-loader {
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  width: 130px;
  height: 130px;
  margin: 0 auto;
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 99999;
}
#page-loader:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fff;
  top: 0;
  bottom: 0;
  z-index: 9999;
}
#page-loader.show {
  display: block;
}
#page-loader.hide {
  display: none;
}

.page-loader div {
  box-sizing: content-box;
}
</style>
