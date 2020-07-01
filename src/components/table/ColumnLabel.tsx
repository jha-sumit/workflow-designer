export interface ColumnLabel<T> {
    disablePadding: boolean;
    id: keyof T;
    label: string;
    numeric: boolean;
}


