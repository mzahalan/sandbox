<template>
  <div class="app">
    <JobList :jobs="jobs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JobList from "./components/JobList.vue";
import Job from "./types/Job";


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
    return {jobs};
  }
});
</script>

<style></style>
