<template>
  <div>
    <input v-model="name" placeholder="Введите имя персонажа" />
    <CheckboxGroup v-model="selectedWeapons" :checkboxObjects="checkboxItems" />
    <div>
      <p>Имя персонажа: {{ name }}</p>
      <p>Выбранное оружие: {{ selectedWeapons }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useMainStore } from "./stores";
import CheckboxGroup from "./components/CheckboxGroup.vue";

const store = useMainStore();

const name = ref(store.name);
const selectedWeapons = ref(store.selected);

watch(name, (newName) => {
  store.updateName(newName);
});

watch(selectedWeapons, (newSelected) => {
  store.updateSelected(newSelected);
});

const checkboxItems = [
  { label: "Гравитационная пушка", value: "gravity-gun" },
  { label: "Пистолет", value: "pistol" },
  { label: "Шотган", value: "shotgun" },
  { label: "Автомат", value: "crossbow" }, // Без значения, вернёт true
];
</script>
