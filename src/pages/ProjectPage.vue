<template>
  <div>
    <HeaderAll></HeaderAll>
    <section class="our_project">
      <div class="our_project__wrapper">
        <h1 class="our_project__title">Our Project</h1>
        <p class="bread_crumbs">Home / Project</p>
      </div>
    </section>
    <div class="our_project__btn_tags_section">
      <div class="our_project__serch_tags__wrapper">
        <div class="our_project__btn_tags_wrapper">
          <button
            v-for="tag in tags"
            :key="tag"
            @click="toggleTag(tag)"
            :style="{
              backgroundColor: selectedTag.includes(tag) ? '#CDA274' : '#fff',
              color: selectedTag.includes(tag) ? '#fff' : '#292f36',
            }"
            class="our_project__tags_btn"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="our_project__cards_wrapper">
      <ProjectPageCard v-for="articalDetail in filteredArticalDetails" :key="articalDetail.id" :articalDetail = "articalDetail"/>
    </div>
      <div class="pagination">
          <div class="pagination__dot">01</div>
          <div class="pagination__dot">02</div>
          <div class="pagination__dot">03</div>
          <div class="pagination__dot pagination__arrow"> > </div>
        </div>
    </div>

    <FooterAll></FooterAll>
  </div>
</template>

<script>
import HeaderAll from "@/components/HeaderAll.vue";
import FooterAll from "@/components/FooterAll.vue";
import ProjectPageCard from "@/components/ProjectPageCard.vue";
export default {
  name: "ProjectPage",
  head: {
    title: 'Our best projects'
  },
  components: {
    HeaderAll,
    FooterAll,
    ProjectPageCard
},
  data() {
    return {
      selectedTag: [],
      tags: [
        "Bathroom",
        "Bed Room",
        "Kitchan",
        "Living Area",
      ],
      articalDetails: [
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Minimal Bedroom",
                    imgSrc: require("../assets/img/project_1.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Minimal Bedroom",
                    imgSrc: require("../assets/img/project_2.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Classic Minimal Bedroom",
                    imgSrc: require("../assets/img/project_3.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Minimal Bedroom",
                    imgSrc: require("../assets/img/project_4.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Modern Bedroom",
                    imgSrc: require("../assets/img/project_5.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Minimal Bedroom",
                    imgSrc: require("../assets/img/project_6.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Minimal Bedroom",
                    imgSrc: require("../assets/img/project_7.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
                {
                    title: "Let’s Get Solution for Building Construction Work",
                    subTitle: "Modern Bedroom",
                    imgSrc: require("../assets/img/project_8.png"),
                    date: "26 December, 2022",
                    clarification: "Interior / Home / Decore",
                    description_1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
                    description_2: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    tags: ["Bathroom"],
                },
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
            tags: ["Bathroom"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Modern Kitchan",
            imgSrc: require("../assets/img/Building.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Kitchan"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Minimal Kitchan",
            imgSrc: require("../assets/img/Architecture.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Kitchan"],
          },
          {
            title: "Let’s Get Solution for Building Construction Work",
            subTitle: "Modern Kitchan",
            imgSrc: require("../assets/img/Kitchen Planning.jpg"),
            date: "26 December, 2022",
            clarification: "Interior / Home / Decore",
            description_1:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which dont look even slightly believable.",
            description_2:
              "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            tags: ["Kitchan"],
          },
            ]
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
        return this.articalDetails.filter((article) =>
          article.tags.some((tag) => selectedTag.includes(tag))
        );
      }
    },
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

.our_project__cards_wrapper {
  column-count: 2;
  gap: 30px;
}
.our_project__btn_tags_wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: #cda274 solid 1px;
  flex-wrap: wrap;
  border-radius: 10px;
}
.our_project__serch_tags__wrapper {
  flex: 30%;
  display: flex;
  padding-top: 200px;
  padding-bottom: 50px;
  justify-content: center;
}
.our_project__tags_btn {
  padding: 26px 40px;
  background-color: #fff;
  color: #292f36;
  border-radius: 10px;
  border: none;
}
.our_project__tags_btn:hover {
  color: #fff;
  background-color: #292f36;
}
.pagination {
  display: flex;
    padding-top: 40px;
    padding-bottom: 200px;
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
