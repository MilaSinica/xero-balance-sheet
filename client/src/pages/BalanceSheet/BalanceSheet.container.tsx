import { useState, useEffect } from 'react';
import { getBalanceSheet } from '../../services/BalanceService';
import { BalanceSheetResponse } from '../../definitions/types';
import { BalanceSheetView } from './BalanceSheet.view';


export const BalanceSheetContainer: React.FC = () => {
    const [balanceSheet, setBalanceSheet] = useState<BalanceSheetResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBalanceSheet = async () => {
            try {
                const data = await getBalanceSheet();
                setBalanceSheet(data);
            } catch (err) {
                setError('Error fetching balance sheet data.');
            }
        };

        fetchBalanceSheet();
    }, []);

    return <BalanceSheetView balanceSheet={balanceSheet} error={error} />
};

