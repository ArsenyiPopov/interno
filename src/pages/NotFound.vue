<template>
    <div>
      <HeaderAll />
      <div class="not_found">
        <h1 class="not_found-title">404</h1>
        <p class="not_found-desc">We are sorry, but the page
you requested was not found</p>
      </div>
      <FooterAll />
    </div>
  </template>
  
  <script>
  import FooterAll from '@/components/FooterAll.vue';
  import HeaderAll from '@/components/HeaderAll.vue';
  
  export default {
    name: 'NotFound',
    data() {
      return {};
    },
    mounted() {},
    methods: {},
    components: { FooterAll, HeaderAll },
  };
  </script>
  
  <style scoped>
  .not_found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    flex-direction: column;
    text-align: center;
    color: #333;
  }
  
  .not_found-title {
    font-size: 250px;
    margin-bottom: 20px;
    color: #CDA274;
  }
  
  .not_found-desc {
    font-size: 1.5em;
  }
  </style>
  