<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
  problems: Array,
});
const emits = defineEmits(['selectProblem']);

function select(problem) {
  emits('selectProblem', problem);
}
</script>

<template>
  <div>
    <h2>문제 리스트</h2>
    <ul>
      <li v-for="problem in problems" :key="problem.id" @click="select(problem)" style="cursor: pointer">
        <strong>{{ problem.title }}</strong>
        - 난이도: {{ problem.level }} - 태그: {{ problem.tags.join(', ') }}
      </li>
    </ul>
  </div>
</template>
