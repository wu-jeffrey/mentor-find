import React from 'react';
import Mentor from './Mentor';

const mentors = { // hardcoded mentors
  'Industry 1': ['Mentor 1', 'Mentor 2'],
  'Industry 2': ['Mentor 3', 'Mentor 4'],
  'Industry 3': ['Mentor 5', 'Mentor 6'],
};

function MentorList({ industry }) {
  return (
    <div>
      <h4>Mentors</h4>
      {mentors[industry].map((mentor, index) => (
        <Mentor key={index} name={mentor} />
      ))}
    </div>
  );
}

export default MentorList;
