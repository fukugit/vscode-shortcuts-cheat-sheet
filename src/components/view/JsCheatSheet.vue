<template>

  

  <div class="container mt-1 p-3">
    <img alt="Vue logo" src="../../assets/logo.png">

    <div class="row">
      <div class="col-4">
        <button type="button" class="btn btn-primary" v-bind:disabled="show" @click="add()">Runun</button>
      </div>
      <div class="col-4">
        <!-- <button type="button" class="btn btn-primary rounded-circle">1</button> -->
        <button class="btn btn-primary rounded-circle animate__animated me-1 "
          :class="['className',
          {'animate__rubberBand':show, 'animate__delay-02s':show}]">1
        </button>
        <button class="btn btn-primary rounded-circle animate__animated me-1 "
          :class="['className',
          {'animate__rubberBand':show}]">2
        </button>
        <button class="btn btn-warning rounded-circle animate__animated me-1"
          :class="['className',
          {'animate__backInRight':show, 'animate__delay-02s':show, 'animate__rubberBand':showLast}]">3
        </button>
      </div>
      <div class="col-4">
        Column
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const show = ref(false)
const showLast = ref(false)

const add = (()=>{
  show.value = true
  showLast.value = true
  setTimeout(() => {
    show.value = false
  }, 500)
})

</script>

<style scoped>
.animate__delay-02s {
    animation-delay: 0.2s;
}
.animate__rubberBand {
  --animate-duration: 1s;
}
</style>