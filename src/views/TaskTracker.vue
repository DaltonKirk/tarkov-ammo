<template>
  <div class="task-tracker">
    <input
      v-model="searchQ"
      placeholder="Search Tasks"
      class="task-searchbar"
      @keyup="filterTasks"
    />
    <div style="text-align:right">{{ completedCount }}/{{ tasks.length }}</div>
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
    <TaskList
      :tasks="remainingTasks"
      v-else-if="showIncomplete && !showCompleted"
    />
    <TaskList :tasks="tasks" v-else-if="showCompleted && showIncomplete" />
  </div>
</template>

<script>
import taskData from '@/data/tasks.js';
import TaskList from '@/components/TaskList';
import ProgressBar from '@/components/ProgressBar';

export default {
  components: {
    TaskList,
    ProgressBar,
  },
  metaInfo: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          'Tarkov task tracker. A simple tool to track the tasks you have completed.',
      },
    ],
  },
  data: () => {
    return {
      tasks: taskData().tasks,
      showCompleted: true,
      showIncomplete: true,
      searchQ: '',
    };
  },

  methods: {
    filterTasks() {
      if (this.searchQ != '') {
        this.tasks = this.tasks.filter((task) => {
          return (
            task.title.toLowerCase().indexOf(this.searchQ.toLowerCase()) > -1
          );
        });
      } else {
        this.tasks = taskData().tasks;
      }
    },
  },

  mounted() {
    for (var i = 0; i < this.tasks.length; i++) {
      this.tasks[i].completed = localStorage[this.tasks[i].title] === 'true';
    }
  },
  computed: {
    remainingTasks: function() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks: function() {
      return this.tasks.filter((task) => task.completed);
    },
    completedCount: function() {
      return this.tasks.filter((task) => task.completed).length;
    },
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

.task-searchbar {
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  outline: none;
  border: none;
}

.task-searchbar:hover {
  outline: rgba(145, 255, 145, 0.5);
}
</style>
