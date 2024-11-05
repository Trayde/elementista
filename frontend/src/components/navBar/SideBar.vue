<template>
  <!-- partial -->
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="icon-grid menu-icon"></i>
              <span class="menu-title">Home</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="icon-layout menu-icon"></i>
              <span class="menu-title">Conteudo</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><router-link class="nav-link" to="/atividades">Atividades</router-link></li>
                <li class="nav-item"><router-link class="nav-link" to="/videos">Vídeos</router-link></li> 
                <li class="nav-item"><router-link class="nav-link" to="/tutoriais">Tutoriais</router-link></li> 
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#form-elements-lab" aria-expanded="false" aria-controls="form-elements-lab">
              <i class="icon-columns menu-icon"></i>
              <span class="menu-title">Laboratório</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements-lab">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><router-link class="nav-link" to="/agua">Água</router-link></li> 
                <li class="nav-item"><router-link class="nav-link" to="/ar">Ar</router-link></li> 
                <li class="nav-item"><router-link class="nav-link" to="/terra">Terra</router-link></li> 
                <li class="nav-item"><router-link class="nav-link" to="/fogo">Fogo</router-link></li> 
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i class="icon-bar-graph menu-icon"></i>
              <span class="menu-title">Biblioteca</span>
              <i class="menu-arrow"></i>
            </a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#form-elements-post" aria-expanded="false" aria-controls="tables">
              <i class="icon-grid-2 menu-icon"></i>
              <span class="menu-title">Postagem</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="form-elements-post">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"><router-link class="nav-link" to="/noticias">Notícias</router-link></li> 
              </ul>
            </div>
          </li>
          
        </ul>
      </nav>

</template>

<script>

export default {
    name: 'SideBar'
}


</script>