<template>
  <div>
    <app-textlockup />
<!--    <app-sales-boxes />-->
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
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
