export type Quest = {
  id?: number
  title: string
  module: string
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'
  xp: number
  createdBy: string
}
