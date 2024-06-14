import axios from 'axios';

const API_URL = 'http://localhost:3001/api/balance-sheet';

export const getBalanceSheet = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error: ', error.message);
        } else {
            console.error('Unexpected error: ', error);
        }
        throw new Error('Failed to fetch balance sheet data');
    }
};