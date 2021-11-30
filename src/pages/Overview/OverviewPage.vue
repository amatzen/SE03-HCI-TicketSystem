<template>
  <div class="content">
    <div class="group">
      <h3>{{ data }}</h3>
      <li v-for="cases in data" :key="data.title">
        {{ data.title }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewPage",

  data() {
    return {
      data,
    };
  },
};

const data = {
  data: [
    {
      title: "Nye sager",
      tickets: [
        {
          id: 524,
          title: "Lobortis",
          name: "Kristian Bech",
        },
        {
          id: 552,
          title: "Integer",
          name: "Frederikke Hjort",
        },
      ],
    },
    {
      title: "Aktive sager",
      color: "red",
      tickets: [],
    },
  ],
};
</script>

<style scoped></style>
