<script setup>
import { useSeoMeta} from '@unhead/vue';
useSeoMeta({
  title: 'Our best furniture design project_ditails',
  description: 'Our best furniture design projects, for you. Order from us, furniture design is our best solution ',
});
</script>

<template>
  <HeaderAll />
  <div class="project_ditails">
    <img
      class="latest_post-img"
      src="../assets/img/progect_deteiles.png"
      alt="latest_post"
    />
  </div>
  <div class="container">
    <div class="project_ditails__block">
        <h1>{{ projectDetails.title }}</h1>
        <p v-html="projectDetails.description"></p>
    </div>
  
  <ProjectSwiper/>

</div>
  <FooterAll />
</template>

<script>
import FooterAll from "@/components/FooterAll.vue";
import HeaderAll from "@/components/HeaderAll.vue";
import { mapGetters } from 'vuex';
import ProjectSwiper from "@/components/ProjectSwiper.vue";

export default {
  name: "ProjectDitails",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['projectDetails']),
  },
  mounted() {},
  methods: {},
  components: { HeaderAll, FooterAll, ProjectSwiper },
};
</script>

<style>
.project_ditails__block {
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center; 
    width: 658px;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 100px;
}

.project_ditails__block h1 {
    text-align: center;
    margin-bottom: 12px; 
}
</style>
