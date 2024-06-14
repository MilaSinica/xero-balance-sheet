import request from 'supertest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import app from '../index';

const mock = new MockAdapter(axios);

describe('GET /api/balance-sheet', () => {
    it('should return balance sheet data', async () => {
        mock.onGet('http://localhost:3000/api.xro/2.0/Reports/BalanceSheet').reply(200, {
            Reports: [
                {
                    ReportID: 'BalanceSheet',
                    ReportName: 'Balance Sheet',
                    ReportTitles: ['Balance Sheet', 'Demo Company (AU)', 'As at 28 February 2018'],
                    Rows: [],
                },
            ],
        });

        const response = await request(app).get('/api/balance-sheet');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('Reports');
        expect(response.body.Reports[0].ReportID).toBe('BalanceSheet');
    });

    it('should handle errors', async () => {
        mock.onGet('http://localhost:3000/api.xro/2.0/Reports/BalanceSheet').reply(500);

        const response = await request(app).get('/api/balance-sheet');
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message', 'Error fetching balance sheet data');
    });
});