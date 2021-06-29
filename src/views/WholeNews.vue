<template>
  <div>
    <h1 class="mt-4">News</h1>

    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Naslov</th>
            <th scope="col">Tekst</th>
            <th scope="col">Vreme Kreiranja</th>
            <th scope="col">Autor</th>
            <th scope="col">Tagovi</th>
            <th scope="col">Datum Kreiranja</th>
            <th scope="col">Komentari</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="news1 in news" :key="news1.id">
            <td>{{ news1.naslov }}</td>
            <td>{{ news1.text }}</td>
            <td>{{ new Date(news1.vremeKreiranja).toDateString() }}</td>
            <td>{{ news1.ime }}</td>
            <td>{{ news1.reci }}</td>
            <td>{{ new Date(news1.datumKreiranja).toDateString() }}</td>
            <td>{{ news1.tekst }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WholeNews",
  data() {
    return{
      news: []
    }
  },
  mounted() {
    this.$axios.get(`/api/homePage/wholeNews/${this.$route.params.id}`).then((response) => {
      this.news = response.data;
    });
  },
}
</script>

<style scoped>

</style>