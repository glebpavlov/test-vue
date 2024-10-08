import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const name = ref<string>(""); // Поле для имени
  const selected = ref<Array<string | boolean>>([]); // Поле для выбранных значений

  function updateName(newName: string) {
    name.value = newName;
  }

  function updateSelected(newSelected: Array<string | boolean>) {
    selected.value = newSelected;
  }

  return { name, selected, updateName, updateSelected };
});
