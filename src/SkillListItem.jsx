import React from 'react';
import './SkillListItem.css';

function SkillListItem({ skill }) {
  return (
    <li className="SkillListItem">
      {skill.name}
      <span className="level">Level {skill.level}</span>
    </li>
  );
}

export default SkillListItem;