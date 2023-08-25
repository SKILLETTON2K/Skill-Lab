import React from 'react';
import './NewSkillForm.css';
import { useState } from 'react';

function NewSkillForm({ addSkill }) {
  const newFormState = {
    name: '',
    level: 3,
  };

  const [formData, setFormData] = useState(newFormState);

  const handleNewChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSkill(formData);
    setFormData(newFormState);
  };

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>
        Skill
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleNewChange}
        />
      </label>
      <label>
        Level
        <select
          name="level"
          value={formData.level}
          onChange={handleNewChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <button type="submit">ADD SKILL</button>
    </form>
  );
}

export default NewSkillForm;

