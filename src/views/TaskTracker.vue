<template>
  <div class="task-tracker">
    <div style="text-align:right">{{ completedCount }}/{{tasks.length}}</div>
    <ProgressBar :total="tasks.length" :value="completedCount" />
    <div class="filters">
      <div>
        <label>Completed:</label>
        <input type="checkbox" v-model="showCompleted" />
      </div>
      <div>
        <label>Incomplete:</label>
        <input type="checkbox" v-model="showIncomplete" />
      </div>
    </div>
    <TaskList :tasks="completedTasks" v-if="showCompleted && !showIncomplete" />
    <TaskList :tasks="remainingTasks" v-else-if="showIncomplete && !showCompleted" />
    <TaskList :tasks="tasks" v-else-if="showCompleted && showIncomplete" />
  </div>
</template>

<script>
import taskData from "@/data/tasks.js";
import TaskList from '@/components/TaskList'
import ProgressBar from '@/components/ProgressBar'
export default {
  components: {
    TaskList,
    ProgressBar
  },
  data: () => {
    return {
      tasks: taskData().tasks,
      showCompleted: true,
      showIncomplete: true,
    };
  },
  mounted() {
    for (var i = 0; i < this.tasks.length; i++) {
      this.tasks[i].completed = localStorage[this.tasks[i].title] === "true";
    }
  },
  computed: {
    remainingTasks: function () {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks: function () {
      return this.tasks.filter((task) => task.completed);
    },
    completedCount: function () {
      return this.tasks.filter((task) => task.completed).length;
    }
  },
};
</script>

<style lang="scss" scoped>
.task-tracker {
  max-width: 720px;
  margin: 0 auto;
}
.filters {
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
}
</style>