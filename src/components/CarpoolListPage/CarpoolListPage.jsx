import React, {useEffect} from 'react';
import {DataGrid} from "@mui/x-data-grid";
import {Button} from "@mui/material/";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from 'react-redux';
import Map from '../Map/Map';

const theme = createTheme({
    palette: {
        primary: {
            main: '#26a69a'
        },
        secondary: {
            main: '#1CCFCF'
        }
    }
});


function CarpoolListPage() {
    const dispatch = useDispatch();
    const carpool = useSelector(store => store.carpool);

    useEffect(() => {
        dispatch({type: 'FETCH_CARPOOLS'})
    }, [dispatch])

    console.log('Carpools are:', carpool);

    // const rows = carpool;

    const columns = [
        {
            field: 'fullName',
            headerName: 'Full Name',
            headerClassName: 'app-theme--header',
            width: 120
        },
        {
            field: 'region',
            headerName: 'Region',
            headerClassName: 'app-theme--header',
            width: 100
        },
        {
            field: 'city',
            headerName: 'City',
            headerClassName: 'app-theme--header',
            width: 100
        },
        {
            field: 'date',
            headerName: 'Graduation Date',
            headerClassName: 'app-theme--header',
            width: 130
        }, {
            field: 'needs_ride',
            headerName: 'Needs Ride',
            headerClassName: 'app-theme--header',
            width: 100,
            valueGetter: (params) => params.value ? `Yes` : `No`
        }, {
            field: 'provide_ride',
            headerName: 'Provide Ride',
            headerClassName: 'app-theme--header',
            width: 100,
            valueGetter: (params) => params.value ? `Yes` : `No`
        }
    ];
    return (
        <>
        <div>
            <ThemeProvider theme={theme}>
                <Box 
                sx={{height: 10, width: 10,
                  '& .app-theme--header':{
                    backgroundColor: "secondary",
                  },
                }}
                ></Box>
                <div style={
                    {
                        height: 400,
                        width: '100%',
                        padding: 10,
                        backgroundColor: "secondary"
                        // '& .app-theme--header':{
                        //   backgroundColor: "secondary",
                        // },
                        // color="secondary"
                        
                    }
                }>
                  {/*  */}
                    <DataGrid sx={{theme: "secondary"}} rows={carpool}
                        columns={columns}/>
                </div>
                {/* <Button variant="contained">
                    Edit User Info
                </Button> */} </ThemeProvider>
          </div>
          <Map />
        </>
    );


}

export default CarpoolListPage;
