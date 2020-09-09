<template>
  <div>
<!--    <app-textlockup />-->
<!--    <app-sales-boxes />-->

    <div>
      <h1 class="heading"><span>Follow the</span> <span class="btn install-pwa">Electric Buttons</span></h1>
      <h2 class="heading">There are 3 different saving prompts, each with own value and timing.<br>Open on any mobile, tablet or desktop.</h2>
    </div>
    <app-featured-products />

    <div class="install-pwa-section">
      <button class="install-pwa" onclick="w4pwa.showWidget('coupon')">Save our shop to Access Offers</button>
    </div>
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  }
};
</script>

<style lang="scss" scoped>
h1.heading {
  @media screen and (max-width: 600px) {
    font-size: 26px;
  }
}
h2.heading {
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
}
.heading {
  text-align: center;
  span {
    vertical-align: middle;
    white-space: nowrap;
  }
}
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
