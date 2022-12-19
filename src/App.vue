<script setup>
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<template>
  <div flex justify-between p-10>
    <button i="dark:carbon-moon carbon-sun" @click="toggleDark()" text-3xl />
  </div>
  <RouterView />
</template>
<style>
  html.dark {
    color-scheme: dark;
  }
</style>
