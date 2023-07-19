// material-ui
import { Checkbox, IconButton, TableCell, TableRow, Typography, Skeleton } from '@mui/material';

// assets
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import React from 'react';

const rowsList = [
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    },
    {
        id: '1',
        name: 'iets1'
    }
];

const RowSkeleton = ({ rowsPerPage, attributeAmmount }) => {
    return rowsList.slice(1 * rowsPerPage, 1 * rowsPerPage + rowsPerPage).map((row, index) => {
        if (typeof row === 'number') return null;
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell padding="checkbox" sx={{ pl: 3, pr: 3 }}>
                    <Checkbox
                        color="primary"
                        inputProps={{
                            'aria-labelledby': labelId
                        }}
                    />
                </TableCell>
                {attributeAmmount.map((key) => (
                    <TableCell key={key.label} component="th" id={labelId} scope="row" sx={{ cursor: 'pointer' }}>
                        <Typography variant="subtitle1" sx={{ color: 'grey.900' }}>
                            {' '}
                            <Skeleton variant="text" height={30} width={150} />{' '}
                        </Typography>
                    </TableCell>
                ))}

                <TableCell align="center" sx={{ pl: 3, pr: 3, width: 0 }}>
                    <IconButton size="large">
                        <MoreHorizOutlinedIcon sx={{ fontSize: '1.3rem' }} />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    });
};

export default RowSkeleton;
