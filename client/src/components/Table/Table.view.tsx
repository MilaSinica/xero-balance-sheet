import React from 'react';
import { Cell, Row } from '../../definitions/types';
import * as Styled from './Table.styles';

type TableProps = {
    cells?: Cell[];
    rows: Row[];
};

export const TableView: React.FC<TableProps> = ({ cells, rows }) => {
    return (
        <Styled.StyledTable>
            <thead>
                <tr>
                    {cells && cells.map((cell, idx) => (
                        <th key={idx}>{cell.Value}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, idx) => (
                    <React.Fragment key={idx}>
                        {row.RowType === 'Section' && (
                            <tr>
                                <Styled.SectionTitle colSpan={3}>{row.Title}</Styled.SectionTitle>
                            </tr>
                        )}
                        {row.Rows?.map((subRow, subIdx) => (
                            <tr key={subIdx}>
                                {subRow.Cells?.map((cell, cellIdx) => (
                                    <td key={cellIdx}>{cell.Value}</td>
                                ))}
                            </tr>
                        ))}
                        {row.RowType === 'SummaryRow' && (
                            <tr>
                                {row.Cells?.map((cell, cellIdx) => (
                                    <Styled.SummaryCell key={cellIdx}>{cell.Value}</Styled.SummaryCell>
                                ))}
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </Styled.StyledTable>
    );
};
