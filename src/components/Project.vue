<template>
  <div>
    <div class="container text-center mt-5">
      <h4> {{posts[0].title}}</h4>
      <p>Content</p>
      <p>Date</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Object,
  }
}
</script>

<style>

</style>
