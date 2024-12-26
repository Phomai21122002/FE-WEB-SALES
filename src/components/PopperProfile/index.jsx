import { memo } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function PopperProfile({ id, open, anchorEl, options }) {
    return (
        <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="bottom-end"
            modifiers={[
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ]}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1300,
            }}
        >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    width: 220,
                    boxShadow: 3,
                    borderRadius: 1,
                    border: '1px solid #ddd',
                }}
            >
                {options.map((option, index) => (
                    <Link key={option.label} to={option.link}>
                        <React.Fragment>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: 1,
                                    paddingRight: 1,
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: 'grey.200' },
                                }}
                            >
                                <Box sx={{ mr: 1 }}>{option.icon}</Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: 'left',
                                    }}
                                >
                                    {option.label}
                                </Typography>
                            </Box>
                            {index < options.length - 1 && <Divider />}
                        </React.Fragment>
                    </Link>
                ))}
            </Box>
        </Popper>
    );
}

export default memo(PopperProfile);
