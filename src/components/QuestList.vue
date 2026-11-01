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
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Quest } from '@/types'

defineProps<{
  title: string
}>()

const quests: Ref<Quest[]> = ref([
  { id: 1, title: 'Thema 1: Web-Basics wiederholen', module: 'Webtechnologien', status: 'DONE', xp: 50, createdBy: 'Ediz' },
  { id: 2, title: 'Thema 4: Vue-Grundlagen lernen', module: 'Webtechnologien', status: 'IN_PROGRESS', xp: 100, createdBy: 'Malik' },
  { id: 3, title: 'Thema 7: Datenbankanbindung verstehen', module: 'Webtechnologien', status: 'TODO', xp: 80, createdBy: 'Ediz' },
  { id: 4, title: 'Thema 9: Betriebskosten Abrechnung', module: 'Controlling', status: 'IN_PROGRESS', xp: 35, createdBy: 'Malik' },
])
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