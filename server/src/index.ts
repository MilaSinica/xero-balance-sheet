import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/balance-sheet', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3000/api.xro/2.0/Reports/BalanceSheet');
        res.json(response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error: ', error.message);
        } else {
            console.error('Unexpected error: ', error);
        }
        res.status(500).json({ message: 'Error fetching balance sheet data' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;