export interface Cell {
    Value: string;
    Attributes?: { Value: string; Id: string }[];
}

export interface Row {
    RowType: string;
    Title?: string;
    Cells?: Cell[];
    Rows?: Row[];
}

export interface Report {
    ReportID: string;
    ReportName: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC: string;
    Rows: Row[];
}

export interface BalanceSheetResponse {
    Reports: Report[];
}
