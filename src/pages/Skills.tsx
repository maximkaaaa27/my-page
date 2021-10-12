import React from 'react'
import { Table } from 'react-bootstrap'
import { IAbout } from '../about/about'

type SkillsProps = { data: IAbout, language: string };

export const Skills = (props: SkillsProps) => {


  return (
    <Table striped bordered hover variant="dark"> 
      <thead>
        <tr>
          <th>{(props.language === 'Eng')? 'Basic skills' : 'Базовые навыки'}</th>
          <th>{(props.language === 'Eng')? 'Extra skills' : 'Дополнительные навыки'}</th>
        </tr>
      </thead>
      <tbody>
        {props.data.Skills.mainSkills.map((item, index) => {
          return (
            <tr key={index}>
            <td>{item}</td>
            <td>{props.data.Skills.otherSkills[index]}</td>
          </tr>
          )
        })}
      </tbody>
    </Table>
  );
};