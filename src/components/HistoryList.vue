<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  history: Array,
});
const emits = defineEmits(['selectHistory']);

function select(item) {
  emits('selectHistory', item);
}
</script>

<template>
  <div>
    <h3>제출 기록</h3>
    <ul>
      <li v-for="item in history" :key="item.id" @click="select(item)" style="cursor: pointer">{{ item.date }} - {{ item.status }} - {{ item.codeSnippet.slice(0, 30) }}...</li>
    </ul>
  </div>
</template>
