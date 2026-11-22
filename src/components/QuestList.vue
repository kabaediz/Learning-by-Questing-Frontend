<template>
  <h3>{{ title }}</h3>
  <table>
    <thead>
      <tr>
        <th>Quest</th>
        <th>Modul</th>
        <th>Status</th>
        <th>XP</th>
        <th>Erstellt von</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="quests.length === 0">
        <td colspan="5">Noch keine Quests vorhanden</td>
      </tr>
      <tr v-for="quest in quests" :key="quest.id">
        <td>{{ quest.title }}</td>
        <td>{{ quest.module }}</td>
        <td>{{ quest.status }}</td>
        <td>{{ quest.xp }}</td>
        <td>{{ quest.createdBy }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { Quest } from '@/types'

defineProps<{
  title: string
}>()

const quests: Ref<Quest[]> = ref([])

async function loadQuests() {
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL
  try {
    const response = await axios.get<Quest[]>(baseUrl + '/quests')
    quests.value = response.data
  } catch (error) {
    console.error('Quests konnten nicht geladen werden:', error)
  }
}

onMounted(() => {
  loadQuests()
})
</script>

<style scoped>
h3 {
  text-align: center;
}
table {
  margin-left: auto;
  margin-right: auto;
}
th, td {
  padding: 0.3rem 0.8rem;
}
</style>