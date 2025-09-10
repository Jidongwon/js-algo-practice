<script setup>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  modelValue: String,
});
const emits = defineEmits(['update:modelValue']);

const editorContainer = ref(null);
let editorInstance = null;

onMounted(() => {
  editorInstance = monaco.editor.create(editorContainer.value, {
    value: props.modelValue || '',
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });

  editorInstance.onDidChangeModelContent(() => {
    const value = editorInstance.getValue();
    emits('update:modelValue', value);
  });
});

onBeforeUnmount(() => {
  if (editorInstance) {
    editorInstance.dispose();
  }
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (editorInstance && editorInstance.getValue() !== newVal) {
      editorInstance.setValue(newVal);
    }
  },
);
</script>

<template>
  <div ref="editorContainer" style="width: 100%; height: 300px; border: 1px solid #ddd"></div>
</template>
