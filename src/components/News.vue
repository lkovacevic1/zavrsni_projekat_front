<template>
  <div>
    <h2>
      Predmet: {{ news.naslov }}
    </h2>

    <h5>Opis:</h5>
    <p>
      {{ news.tekst }} <br><br>
    </p>
  </div>
</template>

<script>

export default {
  name: "News",
  props: {
    news: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
