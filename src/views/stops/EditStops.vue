<template>
  <div>
    edit stops
  </div>
</template>
<script>
export default {
  name: 'edit-stops',
  props: {
    name: {
      type: String,
      default: null,
    },
    id: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      stops: '',
    };
  },
};
</script>
