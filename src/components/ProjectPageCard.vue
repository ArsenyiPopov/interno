<template>
  <div class="our_project__card">
    <img
      class="our_project-img"
      :src="articalDetail.imgSrc"
      alt="card"
    />
    <div class="card_title_anb_button_wrapper">
      <div class="title_wrap">
        <h2 class="our_project__card-title">{{ articalDetail.subTitle }}</h2>
        <p>{{ articalDetail.clarification }}</p>
      </div>
      <router-link class="card_btn" to="/ProjectDitails">
        <span class="arrow"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPageCard",
  props: {
    articalDetail: Object,
  },
};
</script>

<style scoped>
.our_project__card {
  display: flex;
  flex-direction: column;
}
.card_title_anb_button_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.our_project__card {
  margin-bottom: 30px;
}
.our_project__blog_details__description {
  margin-bottom: 100px;
  p {
    padding-top: 20px;
  }
}
.our_project__serch_tags__titel {
  margin-top: 5px;
  margin-bottom: 20px;
}
.our_project__card-title {
  font-size: 22px;
}
.card_btn {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  font-size: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f0ec; /* Цвет без наведения */
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s; /* Плавный переход цвета при наведении */
  text-decoration: none; /* Убираем подчеркивание */
  color: #292F36; /* Цвет иконки стрелки */
}

.card_btn:hover {
  background-color: #cda274; /* Цвет при наведении */
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 0 12px 20px; /* Стрелка направлена вправо */
  border-color: transparent transparent transparent #ffffff;
}
</style>
