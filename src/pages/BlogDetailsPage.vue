<script setup>
import { useSeoMeta} from '@unhead/vue';
useSeoMeta({
  title: 'Read our news and articles about the world of Furniture',
  description: 'Our best furniture design projects, for you. Order from us, furniture design is our best solution ',
});
</script>
<template>
    <div class="blog_details">
      <HeaderAll></HeaderAll>

      <img
        class="latest_post-img"
        src="../assets/img/baner_BlogDetailsPage.png"
        alt="latest_post"
      />
      <div class="container">
        <section class="blog_details__wrapper">
          <div class="artical_details__wpappers">
            <div
              class="artical_details__wpapper"
              v-for="articalDetail in filteredArticalDetails"
              :key="articalDetail.id"
            >
              <h2 class="artical_details__titel">{{ articalDetail.title }}</h2>
              <img
                class="artical_details-img news__card-img"
                :src="articalDetail.imgSrc"
                alt="kitchen"
              />
              <div class="blog_details__data">
                <time class="datetime" datetime="2022-12-26">{{
                  articalDetail.date
                }}</time>
                <p>{{ articalDetail.clarification }}</p>
              </div>
              <div class="blog_details__description">
                <p>{{ articalDetail.description_1 }}</p>
                <p>{{ articalDetail.description_2 }}</p>
              </div>
            </div>
          </div>
          <div class="serch_tags__wrapper">
            <h3 class="serch_tags__titel">Tags</h3>
            <div class="btn_tags_wrapper">
              <button
                v-for="tag in tags"
                :key="tag"
                @click="toggleTag(tag)"
                :style="{
                  backgroundColor: selectedTag.includes(tag) ? '#292f36' : '#f4f0ec',
                  color: selectedTag.includes(tag) ? '#fff' : '#292f36',
                }"
                class="tags_btn"
              >
                {{ tag }}
              </button>
            </div>
          </div>
        </section>
      </div>
      <FooterAll></FooterAll>
    </div>
  </template>
  
  <script>
  import HeaderAll from "@/components/HeaderAll.vue";
  import FooterAll from "@/components/FooterAll.vue";
  export default {
    name: "BlogDetailsPage",
    components: {
    HeaderAll,
    FooterAll,
},
    data() {
      return {
        selectedTag: [],
  
        articalDetails: [
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Minimal Bedroom",
            imgSrc: require("../assets/img/kitchen.png"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Kitchen"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Minimal Bedroom",
            imgSrc: require("../assets/img/Bedroom.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Bedroom"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Modern Bedroom",
            imgSrc: require("../assets/img/Building.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Building"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Minimal Bedroom",
            imgSrc: require("../assets/img/Architecture.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Architecture"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Modern Bedroom",
            imgSrc: require("../assets/img/Kitchen Planning.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Kitchen Planning"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Minimal Bedroom",
            imgSrc: require("../assets/img/Bedroom1.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Bedroom"],
          },
        ],
        tags: [
          "Kitchen",
          "Bedroom",
          "Building",
          "Architecture",
          "Kitchen Planning",
        ],
      };
    },
  
    methods: {
      toggleTag(tag) {
        const index = this.selectedTag.indexOf(tag);
        if (index !== -1) {
          this.selectedTag.splice(index, 1);
        } else {
          this.selectedTag.push(tag);
        }
      },
      isSelected(tag) {
        return this.selectedTags.includes(tag);
      },
    },
    computed: {
      filteredArticalDetails() {
        const selectedTag = this.selectedTag;
        if (selectedTag.length === 0) {
          return this.articalDetails;
        } else {
          return this.articalDetails.filter(article =>
            article.tags.some(tag => selectedTag.includes(tag))
          );
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .blog_details__wrapper {
    display: flex;
    margin-top: 200px;
    gap: 50px;
  }
  .blog_details__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .artical_details__wpappers {
    flex: 70%;
  }
  .artical_details-img {
    margin-top: 20px;
  }
  .serch_tags__wrapper {
    flex: 30%;
  }
  .blog_details__description {
    margin-bottom: 100px;
    p {
      padding-top: 20px;
    }
  }
  .btn_tags_wrapper {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .serch_tags__titel {
    margin-top: 5px;
    margin-bottom: 20px;
  }
  .tags_btn {
    padding: 9px 30px;
    background-color: #f4f0ec;
    color: #292f36;
    border-radius: 10px;
    border: none;
  }
  .tags_btn:hover {
    color: #fff;
    background-color: #292f36;
  }
  </style>
  