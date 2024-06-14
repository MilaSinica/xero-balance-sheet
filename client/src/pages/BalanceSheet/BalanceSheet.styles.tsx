import styled from 'styled-components';
import { COLORS } from '../../definitions/constants';

export const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 3vw;
`;

export const Report = styled.div`
  margin-bottom: 3rem;
`;

export const ReportHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    margin: 0;
    font-size: 2.5rem;
    color: ${COLORS.mute};
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: ${COLORS.main};
  }

  p {
    margin: 0.75rem 0;
    color: ${COLORS.placeholder};
  }
`;