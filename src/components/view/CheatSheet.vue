<template>
  <draggable
    class="list-group"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null
    }"
    v-model="list"
    @start="drag = true"
    @end="drag = false"
    item-key="order"
    :animation="200"
  >
    <template #item="{ element }">
      <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
        {{ element }}
      </div>
    </template>
  </draggable>

</template>

<script setup>
import { ref } from 'vue';
import draggable from 'vuedraggable';
const list = ref(['AAA', 'BBBBBBB', 'CCCCCCCCCCCC', 'DDDDDDDDDDDDDDDDDDDD']);

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
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>