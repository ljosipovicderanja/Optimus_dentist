<template>
  <div id="commentSection">
    <blockquote class="blockquote text-center">
      <p class="mb-0">{{ comment }}</p>
      <hr class="solid" />
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "CommentSection",
  props: {
    comment: String,
  },
  data() {
    return {};
  },
  setup() {},
  methods: {},
};
</script>
<style scoped>
hr.solid {
  border-top: 1px solid #d5dde4;
}
</style>
