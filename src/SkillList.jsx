import React from 'react';
import SkillListItem from './SkillListItem';
import './SkillList.css';

function SkillList({ skills }) {
  return (
    <div className="SkillList">
      <hr />
      <ul>
        {skills.map((skill, index) => (
          <SkillListItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default SkillList;

