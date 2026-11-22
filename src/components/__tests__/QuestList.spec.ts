import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import QuestList from '../QuestList.vue'

vi.mock('axios')

const testQuests = [
  { title: 'Quest A', module: 'Webtechnologien', status: 'TODO', xp: 10, createdBy: 'Ediz' },
  { title: 'Quest B', module: 'Controlling', status: 'DONE', xp: 20, createdBy: 'Malik' },
]

describe('QuestList', () => {
  it('zeigt den übergebenen Titel an', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: testQuests })
    const wrapper = mount(QuestList, { props: { title: 'Meine Quests' } })
    expect(wrapper.text()).toContain('Meine Quests')
  })

  it('rendert eine Zeile pro Quest aus dem Backend', async () => {
    vi.mocked(axios.get).mockResolvedValue({ data: testQuests })
    const wrapper = mount(QuestList, { props: { title: 'Test' } })
    await flushPromises()
    expect(axios.get).toHaveBeenCalled()
    expect(wrapper.findAll('tbody tr').length).toBe(2)
  })
})
