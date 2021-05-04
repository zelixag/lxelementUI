<template>
  <div class="lx-button">
    <button @click="handleClick" ><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'LxButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }

}
</script>

<style>

</style>