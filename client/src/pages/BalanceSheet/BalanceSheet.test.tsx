import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import BalanceSheet from '.';

const mock = new MockAdapter(axios);

describe('BalanceSheet component', () => {
    it('should render BalanceSheet', () => {
        const { container } = render(<BalanceSheet />);
        expect(container.innerHTML).toBeDefined();
    });

    it('should display balance sheet data', async () => {
        mock.onGet('http://localhost:3001/api/balance-sheet').reply(200, {
            Reports: [
                {
                    ReportID: 'BalanceSheet',
                    ReportName: 'Balance Sheet',
                    ReportTitles: ['Balance Sheet', 'Demo Company (AU)', 'As at 28 February 2018'],
                    UpdatedDateUTC: "\/Date(1519357171249)\/",
                    Rows: [
                        {
                            RowType: 'Header',
                            Cells: [
                                { Value: '' },
                                { Value: '28 Feb 2018' },
                                { Value: '28 Feb 2017' }
                            ]
                        },
                        {
                            RowType: 'Section',
                            Title: 'Assets'
                        },
                        {
                            RowType: 'Section',
                            Title: 'Bank',
                            Rows: [
                                {
                                    RowType: 'Row',
                                    Cells: [
                                        { Value: 'Business Bank Account' },
                                        { Value: '-2894.08' },
                                        { Value: '0.00' }
                                    ]
                                },
                                {
                                    RowType: 'SummaryRow',
                                    Cells: [
                                        { Value: 'Total Bank' },
                                        { Value: '3984.20' },
                                        { Value: '0.00' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        render(<BalanceSheet />);

        await waitFor(() => {
            expect(screen.getByText('Balance Sheet')).toBeInTheDocument();
        });

        expect(screen.getByText('Business Bank Account')).toBeInTheDocument();
        expect(screen.getByText('-2894.08')).toBeInTheDocument();
        expect(screen.getByText('Total Bank')).toBeInTheDocument();
    });

    it('should handle errors', async () => {
        mock.onGet('http://localhost:3001/api/balance-sheet').reply(500);

        render(<BalanceSheet />);

        await waitFor(() => {
            expect(screen.getByText('Error fetching balance sheet data.')).toBeInTheDocument();
        });
    });
});