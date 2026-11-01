import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import QuestList from '../QuestList.vue'

describe('QuestList', () => {
  it('zeigt den übergebenen Titel an', () => {
    const wrapper = mount(QuestList, { props: { title: 'Meine Quests' } })
    expect(wrapper.text()).toContain('Meine Quests')
  })

  it('rendert eine Zeile pro Quest', () => {
    const wrapper = mount(QuestList, { props: { title: 'Test' } })
    expect(wrapper.findAll('tbody tr').length).toBe(4)
  })
})
