<script setup>
import { ref } from 'vue';

import ProblemList from './components/ProblemList.vue';
import ProblemDetail from './components/ProblemDetail.vue';
import CodeEditor from './components/CodeEditor.vue';
import ResultDisplay from './components/ResultDisplay.vue';
import HistoryList from './components/HistoryList.vue';

// 문제 목록 예제 데이터
const problems = ref([
  {
    id: 1,
    title: '두 수의 합',
    level: 'Level 1',
    tags: ['배열', '해시'],
    description: '두 수를 더해서 target을 만드는 문제입니다.',
    inputExample: '[2,7,11,15], target=9',
    outputExample: '[0,1]',
    constraints: '1 <= nums.length <= 10^4',
  },
  {
    id: 2,
    title: '최대 부분 배열 합',
    level: 'Level 2',
    tags: ['배열', '분할 정복'],
    description: '연속된 부분 배열 중 합이 최대인 값을 찾는 문제입니다.',
    inputExample: '[-2,1,-3,4,-1,2,1,-5,4]',
    outputExample: '6',
    constraints: '1 <= nums.length <= 10^5',
  },
]);

const selectedProblem = ref(null);
const code = ref('// 코드를 여기에 작성하세요\n');
const result = ref('');
const error = ref('');
const history = ref([]);

function selectProblem(problem) {
  selectedProblem.value = problem;
  code.value = '// 코드를 여기에 작성하세요\n';
  result.value = '';
  error.value = '';
}

function runCode() {
  try {
    // 간단한 코드 실행 (안전성 주의 필요, 실제 프로젝트는 웹 워커나 서버 실행 권장)
    // eslint-disable-next-line no-eval
    const output = eval(code.value);
    result.value = String(output);
    error.value = '';
    addHistory(code.value, '성공', result.value);
  } catch (e) {
    result.value = '';
    error.value = e.message || '오류가 발생했습니다.';
    addHistory(code.value, '실패', error.value);
  }
}

function addHistory(codeSnippet, status, output) {
  history.value.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    codeSnippet: codeSnippet,
    status: status,
    output: output,
  });
}

function selectHistory(item) {
  code.value = item.codeSnippet;
  result.value = item.output;
  error.value = item.status === '실패' ? item.output : '';
}
</script>

<template>
  <div style="display: flex; gap: 20px">
    <aside style="width: 250px; border-right: 1px solid #ddd; padding-right: 10px">
      <ProblemList :problems="problems" @selectProblem="selectProblem" />
      <HistoryList :history="history" @selectHistory="selectHistory" />
    </aside>

    <main style="flex: 1">
      <ProblemDetail :problem="selectedProblem" />
      <CodeEditor v-model="code" />
      <button @click="runCode" style="margin-top: 10px">실행</button>
      <ResultDisplay :result="result" :error="error" />
    </main>
  </div>
</template>
