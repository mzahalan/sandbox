<template>
  <div class="app">
    <header>
      <div class="order">
        <button @click="handleClick('title')">Order by Title</button>
        <button @click="handleClick('salary')">Order by Salary</button>
        <button @click="handleClick('location')">Order by Location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JobList from "./components/JobList.vue";
import Job from "./types/Job";
import OrderTerm from './types/OrderTerm';


export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "Farm Worker",
        location: "A Farm",
        salary: 30000,
        id: "1"
      },
      {
        title: "Farm Worker 2",
        location: "A Farm 2",
        salary: 30002,
        id: "2"
      },
      {
        title: "Farm Worker 3",
        location: "A Farm 3",
        salary: 30003,
        id: "3"
      },
      {
        title: "Farm Worker 4",
        location: "A Farm 4",
        salary: 30004,
        id: "4"
      },
    ]);

    const order = ref<OrderTerm>('title');

    const handleClick = (term :OrderTerm) => {
      order.value = term;
    };

    return {jobs, handleClick, order};
  }
});
</script>

<style>
header {
  text-align: center;
}

header .order {
  margin-top: 20px;
}

button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

</style>
