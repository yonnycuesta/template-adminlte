<template>
    <div class="wrapper">
  <!-- Navbar -->
    <Navbar></Navbar>
  <!-- /.navbar -->
  <!-- Main Sidebar Container -->
 <Sidebar></Sidebar>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <router-view></router-view>
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
    <Footer></Footer>
  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
</template>

<script>

import Navbar from '../../components/layouts/Navbar.vue'
import Sidebar from '../../components/layouts/Sidebar.vue'
import Footer from '../../components/layouts/Footer.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  },
}
</script>