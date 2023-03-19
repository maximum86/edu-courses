import { Meta } from "./meta"

export interface Lesson {
    id: string
    title: string
    duration: number
    order: number
    type: string
    status: string
    link: string
    previewImageLink: string
    meta: Meta | undefined
  }