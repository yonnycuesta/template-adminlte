<template>
 <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="#" class="brand-link">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

     
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/" href="#" class="nav-link">
              <i class="nav-icon fas fa-home"></i>
              <p>
               Home
              </p>
            </router-link>
          </li>
           <li class="nav-item">
            <router-link to="/about" href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
               About
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>