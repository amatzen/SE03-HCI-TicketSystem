<template>
  <button
      :title="title"
      @click.prevent="$emit('click')"
      class="p-3 px-5 font-semibold mt-4 rounded bg-gray-800 text-white"
      :class="{
        'block w-full': block,
        'bg-crimson-500': variant === 'crimson',
        'bg-tealish-500': variant === 'tealish',
        'bg-yellowish-500': variant === 'yellowish',
        'bg-indigo-500': variant === 'indigo',
      }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    variant: String,
    block: Boolean,
  }
}
</script>

<style scoped>

</style>