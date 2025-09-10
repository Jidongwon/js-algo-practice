<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  problem: Object,
});
</script>

<template>
  <div v-if="problem">
    <h2>{{ problem.title }}</h2>
    <p>
      <strong>설명:</strong>
      {{ problem.description }}
    </p>
    <p>
      <strong>입력 예시:</strong>
      {{ problem.inputExample }}
    </p>
    <p>
      <strong>출력 예시:</strong>
      {{ problem.outputExample }}
    </p>
    <p>
      <strong>제한 사항:</strong>
      {{ problem.constraints }}
    </p>
  </div>
  <div v-else>
    <p>문제를 선택하세요.</p>
  </div>
</template>
