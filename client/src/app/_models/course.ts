import { Lesson } from "./lesson"
import { Meta } from "./meta"

export interface Course {
    id: string
    title: string
    tags: string[]
    launchDate: string
    status: string
    description: string
    duration: number
    lessonsCount: number
    containsLockedLessons: boolean
    previewImageLink: string
    rating: number
    meta: Meta
    lessons: Lesson[]
  }
  
