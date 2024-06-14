import React from 'react';
import { BalanceSheetResponse } from '../../definitions/types';
import { parseDateUTCString } from '../../definitions/utils';
import Table from '../../components/Table';
import * as Styled from './BalanceSheet.styles';

type BalanceSheetProps = {
    error: string | null;
    balanceSheet: BalanceSheetResponse | null;
}

export const BalanceSheetView: React.FC<BalanceSheetProps> = ({ error, balanceSheet }) => {
    if (error) {
        return <div>{error}</div>;
    }

    if (!balanceSheet) {
        return <div>Loading...</div>;
    }

    return (
        <Styled.Container>
            {balanceSheet.Reports.map((report, index) => (
                <Styled.Report key={index}>
                    <Styled.ReportHeader>
                        <h2>{report.ReportName}</h2>
                        <h3>{report.ReportTitles.join(' - ')}</h3>
                        <p>Report Date: {report.ReportDate}</p>
                        <p>Updated Date: {parseDateUTCString(report.UpdatedDateUTC)}</p>
                    </Styled.ReportHeader>
                    <Table rows={report.Rows} cells={report.Rows[0].Cells} />
                </Styled.Report>

            ))}
        </Styled.Container>
    );
};
