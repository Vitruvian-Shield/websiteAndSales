import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import over1 from '../../assets/over1.png';
import over2 from '../../assets/over2.png';
import over3 from '../../assets/over3.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '22px',
            fontWeight: 400,
            lineHeight: '26.47px',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: '2rem',
            color: "#FFFFFF",
        },
        h9: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '23px',
            lineHeight: '23px',
            color: "#000000",
        },
    },
});

const howData = [
    { title: 'Geo tracking feature show your location', image: over1 },
    { title: 'You can search for nearby watches', image: over2 },
    { title: 'Plots feature shows you the state of the body', image: over3 },
];

const HowBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
            backgroundColor='#0B0B0B73'
            width={'100%'}
            height={'auto'}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    gap={'18px'}
                    mt={'72px'}
                    mb={'100px'}
                >
                    <Typography variant='h3'>Mobile Overview</Typography>
                    <Typography variant='h6'>Lorem ipsum dolor sit amet consecteturLorem ipsum</Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={4}
                    mb={0}
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: { xs: '100%', sm: '323px' },
                                height: { xs: 'auto', sm: '507px' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#D9D9D9',
                                border: '1px solid #FFFFFF33',
                                borderRadius: '20px 20px 0 0',
                                overflow: 'hidden',
                                m:0,
                                p:0,
                            }}
                        >
                            {index % 2 === 1 ? (
                            // For odd indices: Image first, then the title
                            <>
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: '200px',
                                        height: '340px',
                                        objectFit: 'cover',
                                        
                                        mt: 'auto',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        flexGrow: 1,
                                        padding: 6,
                                        mt: 1,
                                    }}
                                >
                                    <Typography
                                    variant='h9'
                                        gutterBottom
                                        sx={{
                                            mb: '48px',
                                            fontFamily: 'Lato',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                            lineHeight: '21.66px',
                                        }}
                                    >
                                        {box.title}
                                    </Typography>
                                </Box>
                            </>
                        ) : (
                            // For even indices: Title first, then the image
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        flexGrow: 1,
                                        padding: 6,
                                        mt: 1,
                                    }}
                                >
                                    <Typography
                                    variant='h9'
                                        gutterBottom
                                        sx={{
                                            mt: '48px',
                                            fontFamily: 'Lato',
                                            fontWeight: 600,
                                            fontSize: '18px',
                                            lineHeight: '21.66px',
                                        }}
                                    >
                                        {box.title}
                                    </Typography>
                                </Box>
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: '200px',
                                        height: '340px',
                                        objectFit: 'cover',
                                        mb: '24px',
                                        mt: 'auto',
                                    }}
                                />
                            </>
                        )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HowBox;
