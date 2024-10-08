<template>
  <div>
    <label v-for="(item, index) in checkboxObjects" :key="index">
      <input
        :checked="modelValue.includes(item.value ?? true)"
        :value="item.value ?? true"
        type="checkbox"
        @change="onCheckboxChange($event, item.value ?? true)"
      />
      {{ item.label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
// Описание интерфейса CheckboxObject с дженериками
interface CheckboxObject<T = string | boolean> {
  label: string;
  value?: T;
}

// Пропсы компонента описаны через дженерики
const props = defineProps<{
  checkboxObjects: Array<CheckboxObject>; // Ожидается массив объектов CheckboxObject
  modelValue: Array<string | boolean>; // v-model принимает массив значений (строки или boolean)
}>();

// Описание событий компонента с дженериками
const emit = defineEmits<{
  (event: "update:modelValue", value: Array<string | boolean>): void;
}>();

// Функция обработки изменений чекбоксов
function onCheckboxChange(event: Event, value: string | boolean) {
  const checked = (event.target as HTMLInputElement).checked;
  const updatedModelValue = checked
    ? [...props.modelValue, value]
    : props.modelValue.filter((val) => val !== value);

  emit("update:modelValue", updatedModelValue); // Эмитим обновленное значение
}
</script>
