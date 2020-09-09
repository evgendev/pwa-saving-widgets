<template>
  <header>
    <div class="navigation">
      <a href="#" class="navigation__action-menu" @click.stop.prevent="isShowMenu = !isShowMenu">
        <svg v-if="isShowMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.29 256L506.14 34.14a20 20 0 00-28.28-28.28L256 227.72 34.14 5.86A20 20 0 005.86 34.14L227.72 256 5.86 477.86a20 20 0 1028.28 28.28L256 284.29l221.86 221.85a20 20 0 0028.28-28.28z"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 277.33"><path d="M368 154.67H16a16 16 0 010-32h352a16 16 0 110 32zM368 32H16a16 16 0 010-32h352a16 16 0 010 32zM368 277.33H16a16 16 0 010-32h352a16 16 0 110 32z"/></svg>
      </a>
      <h1>Sample PWA Saving Prompt</h1>
    </div>

    <nav :class="isShowMenu && 'is-show'">
      <ul>
        <li @click="isShowMenu = false">
          <nuxt-link exact to="/">Home</nuxt-link>
        </li>
<!--        <li>-->
<!--          <nuxt-link to="/all">Products</nuxt-link>-->
<!--        </li>-->
        <!-- <li>
          <nuxt-link to="/women">Women</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/men">Men</nuxt-link>
        </li>-->
        <li @click="isShowMenu = false">
          <div class="carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
          <nuxt-link to="/cart">Cart</nuxt-link>
        </li>
        <li class="navigation__install">
          <a onclick="w4pwa.showWidget('coupon')">Install App</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    isShowMenu: false
  }),
  computed: {
    ...mapGetters(["cartCount"])
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;

  &__action-menu {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }

  &__install {
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    width: 100%;
    padding: 10px 20px;
    box-shadow: 0 1px 5px rgba(black, .4);
    z-index: 10;
  }
}

header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
  @media screen and (max-width: 600px) {
    padding-top: 48px;
  }
}

nav {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;

  @media screen and (max-width: 600px) {
    width: 100%;
    border: none;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    z-index: 9;
    margin-top: 48px;
    padding: 0;
    transform: translate3d(-100%, 0 ,0);
    opacity: 0;
    transition: all .225s ease-in-out;
    will-change: transform, opacity;
  }

  &.is-show {
    transform: translate3d(0, 0 ,0);
    opacity: 1;
  }

  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;

      @media screen and (max-width: 600px) {
        display: block;
        font-size: 20px;
        border: none;
      }

      a {
        color: black;

        @media screen and (max-width: 600px) {
          display: block;
          padding: 20px;
        }
        &:hover {
          color: #c14103;
        }
      }
    }
  }
}

.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}
</style>