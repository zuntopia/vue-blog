<template>
  <div>
      <h4> {{posts[$route.params.id].title}}</h4>
      <p> {{posts[$route.params.id].content}}</p>
  </div>

</template>

<script>
export default {
    props: {
        posts: Array
    }

}
</script>

<style>

</style>