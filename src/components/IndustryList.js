import React from 'react';
import MentorList from './MentorList';

const industries = ['Industry 1', 'Industry 2', 'Industry 3']; // hardcoded industries

function IndustryList() {
  return (
    <div>
      <h2>Industries</h2>
      {industries.map((industry, index) => (
        <div key={index}>
          <h3>{industry}</h3>
          <MentorList industry={industry} />
        </div>
      ))}
    </div>
  );
}

export default IndustryList;
