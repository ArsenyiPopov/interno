<template>
     <!-- footer start -->
     <footer class="footer">
        <div class="container">
            <div class="footer__block">
        <div class="footer__col">
            <img class="logo" src="../assets/img/Logo.svg" alt="logo">
            <p class="footer__description">It is a long established fact that a reader<br> will be distracted lookings.</p>
            <div class="social_networks">
               <a class="social_networks__link" href="#"><img src="../assets/img/tw.svg" alt="" class="icon_social"></a>
               <a class="social_networks__link" href="#"><img src="../assets/img/in.svg" alt="" class="icon_social"></a>
            </div>
        </div>
        <ul class="footer__col">
            <h4 class="footer_title">Pages</h4>
            <li class="menu__item"><router-link class="link" to="/">Home</router-link></li>
            <li class="menu__item"><router-link class="link" to="/project">Project</router-link></li>
            <li class="menu__item"><router-link class="link" to="/blog">Blog</router-link></li>
        </ul>
        <div class="footer__col">
            <h4 class="footer_title">Contact</h4>
            <p class="address">55 East Birchwood Ave.<br> Brooklyn, New York 11201</p>
            <p class="mail">contact@interno.com</p>
            <p class="tel">(123) 456 - 7890</p>
        </div>
    </div>
</div>
    </footer>
    <!-- footer end -->
  </template>
  
  <script>
  export default {
    name: 'FooterAll'
  };
  </script>
  
  <style scoped>
  /* стили для хедера */
  </style>