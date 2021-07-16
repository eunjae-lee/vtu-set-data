<template>
  <div>hello {{ name }}</div>
</template>

<script>
export default {
  inject: {
    name: { from: '$name' },
  },
};
</script>
