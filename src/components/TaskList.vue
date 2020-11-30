<template>
  <ul class="task-list">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="task-list-item"
      :class="task.completed ? 'task-list-item--completed' : ''"
    >
      <div class="task-list-item__title">
        {{ task.title }}
      </div>
      <div>
        <button @click="toggleTaskCompletion(task)">
          {{ task.completed ? "Completed" : "Incomplete" }}
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tasks"],
  methods: {
    toggleTaskCompletion: function (task) {
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

  &--completed {
    button {
      background: rgba(145, 255, 145, 0.5);
      color: white;
    }
  }

  button {
    background: #fff;
    padding: 20px;
    min-width: 150px;

    font-size: 1rem;
    border: none;
  }
}
</style>