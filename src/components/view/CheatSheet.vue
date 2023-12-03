<template>

  <div class="container mt-1">
    <router-link
      to="/js"
    >
      <p>js</p>
    </router-link>
    
    <img alt="Vue logo" src="../../assets/logo.png">

    <draggable 
      v-model="list" 
      group="people" 
      class="list-group"
      @start="drag=true" 
      @end="drag=false" 
      item-key="id"
      :animation="200">
      <template #item="{element}">
        <ul><li class="m1 item">{{element.name}}, {{element.id}}</li></ul>
      </template>
    </draggable>

    <div class="mt-5"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
const list = ref([
  {"name": "AAA","id": 1},
  {"name": "BBBBBBB","id": 2},
  {"name": "CCCCCCCCCCCCC","id": 3},
]);

</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
  background-color: red;
}
.item {
  background-color: yellow;
  cursor: move;
}
.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>