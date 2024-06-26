<template>
  <Nav></Nav>
  <div class="container-fluid page-body-wrapper">
    <SideBar></SideBar>
    <div class="main-panel">
      <div class="content-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>

import Nav from '@/components/navBar/NavBar';
import SideBar from '@/components/navBar/SideBar';
export default {
  components: {
    Nav,
    SideBar
  }

};
</script>
