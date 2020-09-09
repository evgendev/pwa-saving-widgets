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
          <nuxt-link exact to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.435 476.435"><path d="M196.619 296.266h-67.9c-5.8 0-10.4 4.7-10.4 10.4v52.2c0 5.8 4.7 10.4 10.4 10.4h67.9c5.8 0 10.4-4.7 10.4-10.4v-52.2c0-5.8-4.7-10.4-10.4-10.4zm-10.6 55.5h-47v-36.6h47v36.6z"/><path d="M472.819 209.566l-225.6-193.9c-3.8-3.6-9.8-3.6-13.6 0l-229.9 193.8c-3.3 2.8-4.6 7.4-3.1 11.5 1.5 4.2 5.4 7.1 9.9 7.3h44.9v194.4c.3 22.8 19 41 41.8 40.8h282.6c22.5.3 41-17.7 41.3-40.2v-194.9h44.9c4.5-.2 8.4-3.1 9.9-7.3 1.3-4.1.1-8.6-3.1-11.5zm-124.8 233h-83.6v-113.9c0-8.9 4.7-16.7 13.6-16.7h52.8c9.2.3 16.7 7.5 17.2 16.7v113.9zm52.3-19.9c0 11-8.9 19.9-19.8 19.9h-11.5v-113.9c-.6-20.7-17.4-37.3-38.1-37.6h-52.8c-20.4 0-34.5 17.2-34.5 37.6v113.9h-146.4c-10.9.6-20.3-7.8-20.9-18.8v-195.4h324v194.3zm-361.1-215.2l201.2-169.8 197.5 169.8h-398.7z"/></svg>
            <span>Home</span>
          </nuxt-link>
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
          <nuxt-link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450.391 450.391"><path d="M143.673 350.322c-25.969 0-47.02 21.052-47.02 47.02 0 25.969 21.052 47.02 47.02 47.02 25.969 0 47.02-21.052 47.02-47.02.001-25.968-21.051-47.02-47.02-47.02zm0 73.143c-14.427 0-26.122-11.695-26.122-26.122s11.695-26.122 26.122-26.122 26.122 11.695 26.122 26.122c.001 14.427-11.695 26.122-26.122 26.122zM342.204 350.322c-25.969 0-47.02 21.052-47.02 47.02 0 25.969 21.052 47.02 47.02 47.02s47.02-21.052 47.02-47.02c0-25.968-21.051-47.02-47.02-47.02zm0 73.143c-14.427 0-26.122-11.695-26.122-26.122s11.695-26.122 26.122-26.122 26.122 11.695 26.122 26.122c.001 14.427-11.695 26.122-26.122 26.122zM448.261 76.037a13.064 13.064 0 00-8.359-4.18L99.788 67.155 90.384 38.42C83.759 19.211 65.771 6.243 45.453 6.028H10.449C4.678 6.028 0 10.706 0 16.477s4.678 10.449 10.449 10.449h35.004a27.17 27.17 0 0125.078 18.286l66.351 200.098-5.224 12.016a50.154 50.154 0 004.702 45.453 48.588 48.588 0 0039.184 21.943h203.233c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449H175.543a26.646 26.646 0 01-21.943-12.539 28.733 28.733 0 01-2.612-25.078l4.18-9.404 219.951-22.988c24.16-2.661 44.034-20.233 49.633-43.886L449.83 84.917a8.882 8.882 0 00-1.569-8.88zm-43.885 109.191c-3.392 15.226-16.319 26.457-31.869 27.69l-217.339 22.465-48.588-147.33 320.261 4.702-22.465 92.473z"/></svg>
            <span>
              Cart
              <span class="carttotal" v-if="cartCount > 0">{{ cartCount }}</span>
            </span>
          </nuxt-link>
        </li>
        <li class="navigation__install">

          <a onclick="w4pwa.showWidget('save-app')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449.306 449.306"><path d="M447.739 251.298l-59.037-126.433a9.402 9.402 0 00-9.404-5.224h-50.155c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h43.363l48.588 104.49h-59.559c-27.004-.133-51.563 15.625-62.694 40.229a48.588 48.588 0 01-43.886 27.69h-60.604a48.59 48.59 0 01-43.886-27.69c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771 0 10.449-4.678 10.449-10.449s-4.678-10.449-10.449-10.449H80.457a9.926 9.926 0 00-9.404 4.702L2.09 250.776a6.27 6.27 0 00-2.09 4.18v130.09c.832 29.282 24.524 52.744 53.812 53.29h341.682c29.289-.546 52.98-24.008 53.812-53.29v-130.09a7.84 7.84 0 00-1.567-3.658zm-19.331 133.747c-.812 17.743-15.16 31.864-32.914 32.392H53.812c-17.754-.528-32.102-14.648-32.914-32.392V265.927h66.873a48.59 48.59 0 0143.886 27.69c11.131 24.604 35.69 40.362 62.694 40.229h60.604c27.004.133 51.563-15.625 62.694-40.229a48.588 48.588 0 0143.886-27.69h66.873v119.118z"/><path d="M217.339 252.865c3.706 4.04 9.986 4.31 14.025.603a9.8 9.8 0 00.603-.603l71.053-71.576a10.45 10.45 0 00-14.629-14.629l-53.29 53.29V21.42c0-5.771-4.678-10.449-10.449-10.449s-10.449 4.678-10.449 10.449v198.531l-53.29-53.29a10.45 10.45 0 00-14.629 14.629l71.055 71.575z"/></svg>
            <span>Save our App</span>
          </a>
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

  svg {
    display: none;
    width: 24px;
    height: 24px;
    margin-right: 20px;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }

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
        font-size: 20px;
        border: none;
      }

      a {
        color: black;

        @media screen and (max-width: 600px) {
          display: flex;
          align-items: center;
          padding: 20px;

          &>span {
            position: relative;
          }
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

  @media screen and (max-width: 600px) {
    right: auto;
    left: 100%;
  }
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