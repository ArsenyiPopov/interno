<template>
  <div class="blog">
    <HeaderAll></HeaderAll>
    <!-- main_block start  -->
    <section class="articles_and_news">
      <div class="articles_and_news__wrapper">
        <h1 class="articles_and_news__title">Articles & News</h1>
        <p class="bread_crumbs">Home / Blog</p>
      </div>
    </section>

    <section class="latest_post">
      <div class="container">
        <h2 class="latest_post__title">Latest Post</h2>
        <article class="latest_post__card-wrapper">
          <img class="latest_post-img" src="../assets/img/latest_post.png" alt="latest_post">
          <div class="latest_post__article">
            <h3 class="latest_post__card-title">Low Cost Latest Invented Interior Designing Ideas</h3>
            <p class="latest_post__card-description">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.</p>
            <p class="latest_post__card-description">Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.</p>
            <div class="news__card__data">
              <time class="datetime" datetime="2022-12-26">26 December, 2022</time>
              <button class="news__card_btn card_btn">></button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="articles_and_news_block">
      <div class="container">
        <h2 class="articles_and_news_block-title">Articles & News</h2>

        <div class="news__cadrs">
          <div class="news__card" v-for="newsCard in newsCards" :key="newsCard.id">
            <img class="news__card-img" :src="newsCard.imgSrc" alt="">
            <div class="clarification"><span>{{ newsCard.clarification }}</span></div>
            <h3 class="news__card-title">{{ newsCard.title }}</h3>
            <div class="news__card__data">
              <time class="datetime" :datetime="newsCard.date">{{ newsCard.date }}</time>
              <button class="news__card_btn card_btn">></button>
            </div>
          </div>
        </div>
        <div class="pagination">
          <div class="pagination__dot">01</div>
          <div class="pagination__dot">02</div>
          <div class="pagination__dot">03</div>
          <div class="pagination__dot pagination__arrow"> > </div>
        </div>
      </div>
    </section>
    <!-- main_block end  -->
    <FooterAll></FooterAll>
  </div>
</template>
  
<script>
import HeaderAll from '@/components/HeaderAll.vue';
import FooterAll from '@/components/FooterAll.vue';
export default {
  name: 'BlogPage',
  components: {
    HeaderAll,
    FooterAll,
  },
  data() {
    return {
      newsCards: [
        {
          imgSrc: require('../assets/img/news_img-3.png'),
          clarification: 'Kitchen Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
        },
        {
          imgSrc: require('../assets/img/news_img-2.png'),
          clarification: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '26 December, 2022',
        },
        {
          imgSrc: require('../assets/img/news_img-1.png'),
          clarification: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '26 December, 2022',
        },
        {
          imgSrc: require('../assets/img/news_img-4.png'),
          clarification: 'Kitchen Design',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December, 2022',
        },
        {
          imgSrc: require('../assets/img/news_img-5.png'),
          clarification: 'Living Design',
          title: 'Low Cost Latest Invented Interior Designing Ideas',
          date: '26 December, 2022',
        },
        {
          imgSrc: require('../assets/img/news_img-6.png'),
          clarification: 'Interior Design',
          title: 'Best For Any Office & Business Interior Solution',
          date: '26 December, 2022',
        }
      ],
    };
  },
};
</script>
  
<style scoped>
.articles_and_news {
  height: 356px;
  background-image: url(../assets/img/Photo.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.articles_and_news {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.articles_and_news__wrapper {
  text-align: center;
  background-color: white;
  padding: 40px;
  border-radius: 40px 40px 0 0;
}

.articles_and_news__title {
  margin-bottom: 10px;
  font-size: 50px;
}

.latest_post__title {
  padding-top: 150px;
  padding-bottom: 30px;
}

.latest_post__card-wrapper {
  display: flex;
  padding: 30px;
  border: 1px solid #E7E7E7;
  border-radius: 60px;
}

.latest_post__article {
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  align-items: center;
}

.latest_post-img {
  border-radius: 60px;
}

.articles_and_news_block-title {
  padding-top: 150px;
  padding-bottom: 30px;
}

.articles_and_news_block {
  padding-bottom: 100px;
}

.news__card {
  max-width: 341px;
  min-height: 100%;
}

.news__card-title {
  height: 100%;
}

.pagination {
  display: flex;
    padding-top: 20px;
    max-width: 268px;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}
.pagination__dot {
    display: flex;
    height: 52px;
    width: 52px;
    border: 1px solid;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
}

</style>