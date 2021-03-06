import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Leader from '../Leader';
import './LeaderBord.scss';

export const LeadeBord = ({ leaders, loadLeaders }) => {
  useEffect(
    () => {
      loadLeaders();
    }, [loadLeaders]
  );

  return (
    <section className="leaders-bord">
      <h2 className="leaders-bord__heading">
                Leader Bord
      </h2>
      {leaders.slice(-15).map(
        leader => <Leader key={leader.id} leader={leader} />
      )}
    </section>

  );
};

LeadeBord.propTypes = {
  leaders: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  loadLeaders: PropTypes.func.isRequired,
};
