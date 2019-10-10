import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { viewFiltredList } from '../actions/actionCreators';
import Filter from '../components/Filter';

const FilterParent = ({ filter, ...props }) => {
  const updateFilter = value => {
    // eslint-disable-next-line no-console
    console.log(value);
    filter(value);
  };
  return <Filter updateFilter={updateFilter} {...props} />;
};

const mapDispatchToProps = {
  filter: viewFiltredList,
};

FilterParent.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterParent);
