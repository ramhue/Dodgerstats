import { rows } from './row.model';

export interface querryresult{
    created:string;
    totalSize:string;
    row:Array<rows>;
}