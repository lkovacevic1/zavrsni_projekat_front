<template>
  <div>
    <subject :news="news"></subject>
  </div>
</template>

<script>
import News from "../components/News";

export default {
  name: "SingleNews",
  components: News,
  data() {
    return {
      news: {},
    }
  },
  created() {
    this.$axios.get(`/api/news/find/${this.$route.params.id}`).then((response) => {
      this.news = response.data;
    });
  }
}
</script>

<style scoped>

</style>