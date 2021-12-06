<template>
  <div class="bg-gray-100 font-semibold p-4 pt-6 rounded relative">
    <span
        class="
        bg-tealish-800
        text-white
        rounded-full
        w-10
        h-10
        flex
        items-center
        justify-center
        font-semibold
        absolute
        select-none
        top--5
        left--5
      ">
      {{ initials(sender.name) }}
    </span>
    <p>{{  message }}</p>
  </div>
</template>

<script>
export default {
  name: "TicketMessage",
  props: {
    message: String,
    sender: Object
  },
  setup(props) {
    const initials = (name) => name.slice(0,1) + name.split(' ')[name.split(' ').length-1].slice(0,1)

    return {
      initials
    }
  }
}
</script>

<style scoped>
.top--5 {
  top: -20px;
}
.left--5 {
  left: -20px;
}
</style>