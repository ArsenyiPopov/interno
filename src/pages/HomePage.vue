<template>
  <div class="home-page">
  <HeaderAll></HeaderAll>
 <!-- main_block start  -->
 <section class="let_your_home">
        <div class="container">
            <div class="main_block">
                <div class="main_block__content">
                    <h1 class="main_block__title">Let Your Home
                        Be Unique</h1>
                    <p class="main_block__description">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                    <button class="main_block__btn">Get Started <img class="main_block__btn-arrow" src="../assets/img/arrow.svg"
                            alt="arrow"> </button>
                </div>
            </div>
        </div>
    </section>
    <!-- main_block end  -->

    <!-- Our Projects start -->
    <section class="our_projects">
        <div class="container">
            <h2 class="our_projects__titel">Follow Our Projects</h2>
            <p class="our_projects__description">It is a long established fact that a reader will be distracted by the
                of readable <br> content of page lookings at its layouts points.</p>
            <div class="our_projects__cards">
                <div class="our_projects__card">
                    <img class="card_1" src="../assets/img/card-1.png" alt="card-1">
                    <div class="our_projects__card__info">
                        <div class="card_name">
                            <h3 class="card_name__item">Modern Kitchan</h3>
                            <p class="card_param__item">Decor / Artchitecture</p>
                        </div>
                        <button class="card_btn">></button>
                    </div>
                </div>
                <div class="our_projects__card">
                    <img class="card_2" src="../assets/img/card-2.png" alt="card-2">
                    <div class="our_projects__card__info">
                        <div class="card_name">
                            <h3 class="card_name__item">Modern Kitchan</h3>
                            <p class="card_param__item">Decor / Artchitecture</p>
                        </div>
                        <button class="card_btn">></button>
                    </div>
                </div>
                <div class="our_projects__card">
                    <img class="card_3" src="../assets/img/card-3.png" alt="card-3">
                    <div class="our_projects__card__info">
                        <div class="card_name">
                            <h3 class="card_name__item">Modern Kitchan</h3>
                            <p class="card_param__item">Decor / Artchitecture</p>
                        </div>
                        <button class="card_btn">></button>
                    </div>
                </div>
                <div class="our_projects__card">
                    <img class="card_4" src="../assets/img/card-4.png" alt="card-4">
                    <div class="our_projects__card__info">
                        <div class="card_name">
                            <h3 class="card_name__item">Modern Kitchan</h3>
                            <p class="card_param__item">Decor / Artchitecture</p>
                        </div>
                        <button class="card_btn">></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Projects end -->

    <!-- company-stats start -->
    <section class="company-stats">
        <div class="container">
            <div class="company-stats__block">
                <div class="company-stats__item">
                    <p class="company-stats__num">12</p>
                    <p class="company-stats__name">Years Of Experiance</p>
                </div>
                <div class="company-stats__border"><hr class="vertical-hr"></div>
                <div class="company-stats__item">
                    <p class="company-stats__num">85</p>
                    <p class="company-stats__name">Success Project</p>
                </div>
                <div class="company-stats__border"><hr class="vertical-hr"></div>
                <div class="company-stats__item">
                    <p class="company-stats__num">15</p>
                    <p class="company-stats__name">Active Project</p>
                </div>
                <div class="company-stats__border"><hr class="vertical-hr"></div>
                <div class="company-stats__item">
                    <p class="company-stats__num">95</p>
                    <p class="company-stats__name">Happy CUstomers</p>
                </div>
            </div>
        </div>
    </section>
    <section class="news-block">
        <div class="container">
        <h2 class="news-block__titel our_projects__titel">Articles & News</h2>
        <p class="news-block__description our_projects__description">It is a long established fact that a reader will be distracted by the of readable content<br> of a page when lookings at its layouts the points of using.</p>
        <div class="news__cadrs">
            <div class="news__card">
                <img class="news__card-img" src="../assets/img/news_img-3.png" alt="">
                <div class="clarification"><span>Kitchan Design</span></div>
                <h3 class="news__card-title">Let’s Get Solution For<br> Building Construction<br> Work</h3>
                <div class="news__card__data">
                    <time class="datetime" datetime="2022-12-26">26 December, 2022</time>
                    <button class="news__card_btn card_btn">></button>
                </div>
            </div>
                <div class="news__card">
                    <img class="news__card-img" src="../assets/img/news_img-2.png" alt="">
                    <div class="clarification"><span>Living Design</span></div>
                    <h3 class="news__card-title">Low Cost Latest Invented<br> Interior Designing<br>
                        Ideas.</h3>
                    <div class="news__card__data">
                        <time class="datetime" datetime="2022-12-26">26 December, 2022</time>
                        <button class="news__card_btn card_btn">></button>
                    </div>
                </div>
                <div class="news__card">
                    <img class="news__card-img" src="../assets/img/news_img-1.png" alt="">
                    <div class="clarification"><span>Interior Design</span></div>
                    <h3 class="news__card-title">Best For Any Office &<br> Business Interior<br> 
                        Solution</h3>
                    <div class="news__card__data">
                        <time class="datetime" datetime="2022-12-26">26 December, 2022</time>
                        <button class="news__card_btn card_btn">></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- company-stats end -->
    <FooterAll></FooterAll>
  
  </div>
  </template>
  
  <script>
  import HeaderAll from '@/components/HeaderAll.vue';
  import FooterAll from '@/components/FooterAll.vue';
  export default {
    name: 'HomePage',
    head: {
    title: 'best furniture in europe'
  },
    components: {
    HeaderAll,
    FooterAll,
  },
  };
  
  </script>
  
  <style scoped>
  
  </style>