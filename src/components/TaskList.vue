<template>
  <ul class="task-list">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="task-list-item"
      :class="task.completed ? 'task-list-item--completed' : ''"
    >
      <div class="task-list-item__title">
        <div>
          {{ task.title }}
        </div>
        <div>
          <a :href="task.wiki" target="_blank" class="task-list-item__wiki"
            >View Wiki</a
          >
        </div>
      </div>
      <div>
        <button @click="toggleTaskCompletion(task)">
          {{ task.completed ? 'Completed' : 'Incomplete' }}
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    toggleTaskCompletion: function(task) {
      task.completed = !task.completed;
      localStorage[task.title] = task.completed;
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  list-style: none;
  padding: 0;
  overflow-y: auto;
  max-height: 50vh;
}

.task-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  padding: 10px;

  button {
    background: #fff;
    padding: 20px;
    min-width: 150px;

    font-size: 1rem;
    border: none;
  }

  &--completed {
    button {
      background: rgba(145, 255, 145, 0.5);
      color: white;
    }
  }
}

.task-list-item__title {
  text-align: start;
}

.task-list-item__wiki {
  text-decoration: none;
  color: rgba(145, 255, 145, 0.5);
}

.task-list-item__wiki:hover {
  text-decoration: underline;
}
</style>
