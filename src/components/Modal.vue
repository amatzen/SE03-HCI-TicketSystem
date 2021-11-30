<template>
  <div role="dialog" class="min-w-screen h-screen fixed left-0 top-0 flex justifty-center items-center inset-0 z-10 outline-none focus:outline-none">
    <div class="absolute bg-black opacity-20 inset-0 z-0"></div>
    <div class="z-20 flex bg-white mx-auto my-auto rounded overflow-hidden shadow-md">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>
