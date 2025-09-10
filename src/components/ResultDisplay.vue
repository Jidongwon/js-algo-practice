<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  result: String,
  error: String,
});
</script>

<template>
  <div>
    <h3>실행 결과</h3>
    <pre v-if="result" style="background: #f0f0f0; padding: 10px">{{ result }}</pre>
    <pre v-if="error" style="background: #ffe6e6; padding: 10px; color: red">{{ error }}</pre>
    <p v-if="!result && !error">아직 실행된 결과가 없습니다.</p>
  </div>
</template>
