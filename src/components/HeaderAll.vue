<template>
    <header class="header">
      <div class="container">
        <nav class="nav">
          <ul class="nav__logo">
            <li><a href="#"><img class="logo" src="../assets/img/Logo.svg" alt="logo"></a></li>
          </ul>
          <ul class="nav__menu">
            <li class="menu__item"><router-link class="link" to="/">Home</router-link></li>
            <li class="menu__item"><router-link class="link" to="/project">Project</router-link></li>
            <li class="menu__item"><router-link class="link" to="/blog">Blog</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderAll'
  };
  </script>
  
  <style scoped>
  /* стили для хедера */
  </style>