import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from '../elements/Button';

const Filter = ({ updateFilter }) => {
  return (
    <Container>
      <h2>Filter</h2>
      <div>
        <Button name="All" data="ALL" handleClick={updateFilter} />
        <Button name="Completed" data="COMPLETED" handleClick={updateFilter} />
        <Button name="Active" data="ACTIVE" handleClick={updateFilter} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  & > div {
    margin-left: auto;
  }
`;

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default Filter;
