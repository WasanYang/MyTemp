export interface BasicTableProps<T> {
    dataSource: T[];
    children?: any;
    columns: ColumnsProps[]
}

export interface ColumnsProps {
    dataIndex: string;
    label: string;
    minWidth?: number;
    maxWidth?: number;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    renderRow?: (value: any) => React.ReactNode;
    renderColumn?: (value: any) => React.ReactNode;
    renderHeader?: (value: any) => React.ReactNode;
}