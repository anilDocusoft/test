import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 340 },
    { field: 'Comment', headerName: 'Comment', width: 330 },

];



const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ data }) {
    console.log(data, 'kkkkkkkkkkk');

    const rows = data?.map(item => ({
        id: item.ID, // Map the ID field to 'id' for DataGrid
        Comment: item.Comment || '-',
    }));

    return (
        <Paper sx={{ height: '100%', width: '700px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
            />
        </Paper>
    );
}
