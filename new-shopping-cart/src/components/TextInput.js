import React from 'react';

export const TextInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange({ value: e.target.value })}
  />
);

export default TextInput;
