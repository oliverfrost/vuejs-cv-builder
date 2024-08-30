/**
 * TODO:
 * 1. Change dates to type Date
 */
export interface Candidate {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  address: string
  experiences: Experience[]
  education: Education[]
  certifications: Certification[]
  description: string
  references: any[]
  linkedin: string
  skills: Skill[]
}

export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

/**
 * TODO: Separate school and university types
 */
export interface Education {
  degree: string
  major: string
  school?: string
  university?: string
  location: string
  startDate: string
  endDate: string
  description: string
}

// export interface RequiredEducation extends Education {
//   school: string
// }

// export interface HigherEducation extends Education {
//   university: string
// }

export interface Certification {
  name: string
  date: string
}

export interface Skill {
  name: string
  score: number
}
