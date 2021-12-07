<template>
  <div class="mt-2 flex gap-3 items-center">
    <span
      class="
        w-7
        h-7
        max-w-7 max-h-7
        min-h-7 min-w-7
        bg-crimson-500
        rounded-full
        inline-block
      "
      :class="`bg-${color}-500`"
    ></span>
    <div>
      <p class="font-semibold">{{ text }}</p>
      <p class="text-sm text-gray-600">{{ randomRelativeDate() }} siden</p>
    </div>
  </div>
</template>

<script>
import { da } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";
import faker from "faker";

export default {
  name: "TimelineItem",
  props: {
    text: {
      type: String,
      required: true,
      default: "Supportsag oprettet",
    },
    color: {
      type: String,
      default: "crimson",
    },
  },
  setup(props) {
    const randomRelativeDate = () =>
      formatDistanceToNow(faker.date.recent(), {
        locale: da,
      });

    return {
      randomRelativeDate,
    };
  },
};
</script>
