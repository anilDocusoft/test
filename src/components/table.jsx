import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'ForwardTo', headerName: 'ForwardTo', width: 230 },
    { field: 'UserEmail', headerName: 'UserEmail', width: 230 },

];



const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ data, setSelectedRow }) {

    const rows = data?.map(item => ({
        id: item.ID,
        ForwardTo: item.ForwardTo || '-',
        UserEmail: item.UserEmail || '-',
    }));
    const handleRowClick = (params) => {
        setSelectedRow(true);
        // setSelectedRow(params.row);
    };

    return (
        <Paper sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[10, 20, 50, 100]}
                onRowClick={handleRowClick}

            />
        </Paper>
    );
}
