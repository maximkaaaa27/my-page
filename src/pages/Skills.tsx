import React from 'react'
import { About } from '../about/about'

type SkillsProps = {data: About, language: string}

export const Skills = (props: SkillsProps) => {


  return (
    <>
    <h1>{(props.language === 'Rus') ? 'Навыки': 'Skills'}</h1>
    </>
  )
}