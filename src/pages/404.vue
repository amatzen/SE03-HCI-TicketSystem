<template>
  <div>
    <h1 class="h1">404</h1>
    <p class="p">Vi kunne ikke finde den efterspurgte side</p>
    <div class="a">
      <a href="/">Gå til forsiden</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.h1 {
  text-align: center;
  font-size: 10em;
  font-family: Arial, Helvetica, sans-serif;
  color: #24d2b3;
}

.p {
  text-align: center;
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 2em;
}

.a {
  text-align: center;
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 1em;
  color: #24d2b3;
  text-decoration: underline;
}
</style>
