<template>
    <div>
        <HeaderAll></HeaderAll>
      <section class="our_project">
      <div class="our_project__wrapper">
        <h1 class="our_project__title">Our Project</h1>
        <p class="bread_crumbs">Home / Project</p>
      </div>
    </section>
        <FooterAll></FooterAll>
    </div>
</template>


<script>
import HeaderAll from '@/components/HeaderAll.vue';
import FooterAll from '@/components/FooterAll.vue';
export default {
  name: 'ProjectPage',
  components: {
    HeaderAll,
    FooterAll,
  },
  data() {
    return {
      
    };
  },
};
</script>

<style>
.our_project {
  height: 356px;
  background-image: url(../assets/img/ProjectImg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.our_project {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.our_project__wrapper {
  text-align: center;
  background-color: white;
  padding: 40px 100px;
  border-radius: 40px 40px 0 0;
}

.our_project__title {
  margin-bottom: 10px;
  font-size: 50px;
}
</style>