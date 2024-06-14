import styled from 'styled-components';
import { COLORS } from '../../definitions/constants';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 3rem;

  thead {
    background-color: ${COLORS.background};

    th {
      padding: 1.5vw;
      border: 0.125rem solid ${COLORS.border};
      text-align: left;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: ${COLORS.background};
    }

      td {
        padding: 1.5vw;
        border: 0.125rem solid ${COLORS.border};
        }
    }
  }
`;

export const SectionTitle = styled.td`
  padding: 1.5vw;
  font-weight: bold;
  background-color: ${COLORS.backgroundMute};
  text-align: left;
`;

export const SummaryCell = styled.td`
  padding: 1vw;
  font-weight: bold;
  background-color: ${COLORS.background};
  text-align: left;
`;