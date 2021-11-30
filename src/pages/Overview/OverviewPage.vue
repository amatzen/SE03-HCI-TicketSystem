<template>
  <div>
    <div v-for="column in data" :key="column.title">
      {{ column.title }}
      <div>
        <p v-for="ticket in column.tickets" :key="ticket.id">{{ ticket.title}}</p>
      </div>
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
