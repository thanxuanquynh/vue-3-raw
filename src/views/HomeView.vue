<script setup>
  import { useCounterStore } from "@/stores/counter"

  const counterStore = useCounterStore()

  const counter = $computed(() => counterStore.counter)

  const { increment } = counterStore
  console.log(getCurrentInstance())
</script>

<template>
  <div i-carbon-battery-quarter text-50 ml-10 />
  <div text="green 40" ml-10>{{ counter }}</div>

  <button @click="increment" b-1 p-2 rd-5 ml-10>Click to inscrease</button>
</template>
