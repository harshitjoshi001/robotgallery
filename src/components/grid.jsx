import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import data from '../data.json'
import '../App.css'
import dateFormat, { masks } from "dateformat"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../Redux/action';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {

    const dispatch = useDispatch()
    const Robots = useSelector(state => state.robots)
    useEffect(() => {
        dispatch(loadItems(data.data))
    }, [])

    return (
        <>
            <div className='grid'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {/* {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>xxs</Item>
                        </Grid>
                    ))} */}


                        {Robots.map((value, index) => {
                            return (<>
                                <Grid item xs={2} sm={4} md={4} key={index} className="Grid">
                                    <Item  ><img src={value.image} style={{ "boxShadow": "2px 2px 2px 2px grey" }}></img></Item>
                                    <Item><h3 style={{ "boxShadow": "2px 2px 2px 2px grey" }}> Name : {value.name}</h3></Item>
                                    <Item><h3 style={{ "boxShadow": "2px 2px 2px 2px grey" }}> Price : ฿{(value.price/.45).toFixed(2)}</h3></Item>
                                    <Item><h3 style={{ "boxShadow": "2px 2px 2px 2px grey" }}> Stock : {value.stock}</h3></Item>
                                    <Item><h3 style={{ "boxShadow": "2px 2px 2px 2px grey" }}> Material : {value.material}</h3></Item>
                                    <Item><h3 style={{ "boxShadow": "2px 2px 2px 2px grey" }}>createdAt : {dateFormat(value.createdAt, 'dd/mm/yyyy')}</h3></Item>
                                    <Link to={`/details/${index}`} ><button>view</button></Link>
                                </Grid>
                            </>)
                        })}

                    </Grid>


                </Box>
            </div>
        </>
    );
}