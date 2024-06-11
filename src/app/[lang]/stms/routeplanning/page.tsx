'use client'
import * as React from 'react'
import { useState } from 'react'
import type { ChangeEvent } from 'react'

import { Grid, Typography, Box, Button, Radio, InputAdornment, Switch, Tooltip, List, ListItem } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import MapContainer from './map'
import CustomTextField from '@/@core/components/mui/TextField'

const StmsRouteplanning = () => {
  const [value2, setValue2] = useState<string>('controlled-checked')
  const [value, setValue] = useState<string>('singlepoint')
  const [value3, setValue3] = useState<string>('controlled-checked3')
  const [locations, setLocations] = useState([''])
  const [locations2, setLocations2] = useState([''])
  const [showTextField, setShowTextField] = useState(false)
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const [isSwitchOn2, setIsSwitchOn2] = useState(false)
  const [breaks, setBreaks] = useState([{}])

  const Dot = styled('div')(({ color }) => ({
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: color || '#a5f3a4' // Default color if none is provided
  }))

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    }
  }))

  const timeIntervals1 = []

  for (let i = 8; i <= 24; i++) {
    timeIntervals1.push(i + ':00')
  }

  const timeIntervals2 = []

  for (let i = 1; i <= 11; i++) {
    timeIntervals2.push(i + ':00')
  }

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },

    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }))

  function createData(
    name: string,
    cost: string,
    price: string,
    profitmr: string,
    measurement: string,
    total: string,
    profit: string
  ) {
    return { name, cost, price, profitmr, measurement, total, profit }
  }

  const rows = [
    createData('Driver hours', '€ 4', '€ 8', '100%', '200 HRs', '€ 1,600', ' € 800'),
    createData('KMs Driven', '€ 4', '€ 8', '100%', '200 HRs', '€ 1,600', ' € 800'),
    createData('Load', '€ 4', '€ 8', '100%', '200 HRs', '€ 1,600', ' € 800')
  ]

  const handleAddBreak = () => {
    setBreaks([...breaks, {}])
  }

  const handleRemoveBreak = (index: number) => {
    const newBreaks = breaks.filter((_, i) => i !== index)

    setBreaks(newBreaks)
  }

  const handleSwitchChange3 = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsSwitchOn2(event.target.checked)
  }

  const handleSwitchChange2 = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setIsSwitchOn(event.target.checked)
  }

  const handleSwitchChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setShowTextField(event.target.checked)
  }

  const handleAddLocation2 = () => {
    setLocations2([...locations2, ''])
  }

  const handleAddLocation = () => {
    setLocations([...locations, ''])
  }

  const handleRemoveLocation2 = (index: number) => {
    const newLocations = [...locations2]

    newLocations.splice(index, 1)
    setLocations2(newLocations)
  }

  const handleRemoveLocation = (index: number) => {
    const newLocations = [...locations]

    newLocations.splice(index, 1)
    setLocations(newLocations)
  }

  const handleChangeLocation2 = (index: number, value: string) => {
    const newLocations = [...locations2]

    newLocations[index] = value
    setLocations2(newLocations)
  }

  const handleChangeLocation = (index: number, value: string) => {
    const newLocations = [...locations]

    newLocations[index] = value
    setLocations(newLocations)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value)
  }

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue3((event.target as HTMLInputElement).value)
  }

  return (
    <Box>
      <Grid
        spacing={6}
        justifyContent='center'
        alignItems='center'
        direction='row'
        sx={{
          backgroundColor: '#f0f3ee'
        }}
      >
        <Grid>
          <Box className='bg-[#f7fdea] w-full flex container'>
            <Grid lg={10} xs={10} className='flex flex-row flex-wrap items-center justify-center w-full gap-4'>
              <Box className='flex'>
                <i className={'tabler-route'} />
                <Typography variant='h5'>Route </Typography>
              </Box>
              <Box className='flex'>
                <i className={'tabler-wallpaper'} />
                <Typography variant='h5'>Planning </Typography>
              </Box>
              <Box className='flex'>
                <i className={'tabler-viewfinder'} />
                <Typography variant='h5'>Board View </Typography>
              </Box>
            </Grid>
            <Grid xs={2} lg={2} className='flex items-end justify-end '>
              <Button
                variant='contained'
                className='lg:h-20 h-16 rounded-none  bg-gradient-to-r from-[#85c933] to-[#337a34]'
              >
                <i className={'tabler-plus'} /> Add Route
              </Button>
            </Grid>
          </Box>
          <Box className='flex  flex-col bg-[#f7fdea]  p-0 border-b-[#337a34]'>
            <Grid container className='flex flex-col lg:flex-row'>
              <Grid item xs={12} lg={3} spacing={4} className='flex flex-col '>
                <Box className='flex w-full  justify-center bg-gradient-to-r from-[#85c933] to-[#337a34]'>
                  <Typography variant='h5' className='p-4 text-2xl font-bold text-white uppercase'>
                    Summary
                  </Typography>
                </Box>
                <Box className='flex items-center self-start px-2 py-1'>
                  <i className={'tabler-truck-delivery'} />
                  <Typography variant='h5' className='text-base font-bold '>
                    KMS Calculations
                  </Typography>
                </Box>
                <List className='self-start pt-0 pl-[27px]'>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <Typography className='flex'>
                          <Typography component='span' variant='h6' className='font-bold'>
                            Route :
                          </Typography>
                          <Typography component='span' variant='h6'>
                            121 KMs
                          </Typography>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <Typography className='flex'>
                          <Typography component='span' variant='h6' className='font-bold'>
                            Freight :
                          </Typography>
                          <Typography component='span' variant='h6'>
                            91 KMs
                          </Typography>
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Extra Travel:</b> 21 KMs
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Travel To:</b> 10 KMs
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Travel From:</b> 60 KMs
                        </span>
                      }
                    />
                  </ListItem>
                </List>
                <Box className='flex items-center self-start px-2 py-1'>
                  <i className={'tabler-clock'} />
                  <Typography variant='h5' className='text-base font-bold '>
                    Time Calculations
                  </Typography>
                </Box>
                <List className='self-start pt-0 pl-[27px]'>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      className='text-base '
                      primary={
                        <span>
                          <b>Loading:</b> 10 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Unloading:</b>5 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Breaks:</b> 180 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Travel To:</b> 20 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Travel From:</b> 75 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>One Side:</b> 55 Mins
                        </span>
                      }
                    />
                  </ListItem>
                  <ListItem className='self-start py-1'>
                    <ListItemText
                      primary={
                        <span>
                          <b>Full Trip:</b> 125 Mins
                        </span>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid xs={12} lg={9}>
                <MapContainer />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' className='flex flex-col mt-5 md:flex-row'>
        {/* Step 1 */}

        <Grid item xs={12} lg={4} className='text-black pe-5'>
          <Box className='flex items-center gap-1 '>
            <Typography variant='h5' className='font-bold text-primary'>
              Step 1:
            </Typography>
            <Typography variant='h5' className='font-bold text-black'>
              Picup & Dropoff
            </Typography>
          </Box>
          <Box className='flex flex-col w-full pt-2'>
            <CustomTextField label=' Route Name' placeholder='Type name of Route' id='form-props-full-width' />
            <CustomTextField
              select
              fullWidth
              defaultValue=''
              label='Assign Customer'
              id='custom-select-small'
              className='my-2'
            >
              <MenuItem value=''>
                <em>Select</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomTextField>
            <RadioGroup
              row
              aria-label='controlled'
              name='controlled'
              value={value}
              onChange={handleChange}
              className='gap-10 mb-2'
            >
              <FormControlLabel value='singlepoint' control={<Radio />} label='Single Point' />
              <FormControlLabel value='multipoint' control={<Radio />} label='Multi Point' />
            </RadioGroup>
            {value === 'singlepoint' && (
              <Box className='flex flex-col w-full gap-2 mb-2'>
                <CustomTextField
                  id='input-with-icon-adornment'
                  label='Pickup Location'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <i className='tabler-map-pin' />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomTextField
                  id='input-with-icon-adornment'
                  label='Dropof Location'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <i className='tabler-map-pin' />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            )}
            {value === 'multipoint' && (
              <Box>
                {locations.map((location, index) => (
                  <Grid className='flex items-end w-full' key={index}>
                    <Grid item xs={8}>
                      <CustomTextField
                        label={`Pickup Location ${index + 1}`}
                        fullWidth
                        value={location}
                        onChange={e => handleChangeLocation(index, e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <i className='tabler-map-pin' />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    {locations.length > 1 && (
                      <Grid item xs={2} className='flex items-end justify-end pb-1'>
                        <Button
                          variant='contained'
                          size='medium'
                          className='flex items-center justify-center bg-[#e64449]'
                          onClick={() => handleRemoveLocation(index)}
                          startIcon={<i className='tabler-minus' />}
                          sx={{
                            '& .MuiButton-startIcon': {
                              display: 'flex',
                              marginRight: 0,
                              marginLeft: 0,
                              marginInlineEnd: 0
                            }
                          }}
                        ></Button>
                      </Grid>
                    )}
                    {index === locations.length - 1 && (
                      <Grid item lg={2} className='flex justify-end pb-1'>
                        <Button
                          variant='contained'
                          size='medium'
                          className='flex items-center justify-center bg-primary'
                          onClick={handleAddLocation}
                          startIcon={<i className='tabler-plus' />}
                          sx={{
                            '& .MuiButton-startIcon': {
                              display: 'flex',
                              marginRight: 0,
                              marginLeft: 0,
                              marginInlineEnd: 0
                            }
                          }}
                        ></Button>
                      </Grid>
                    )}
                  </Grid>
                ))}

                {locations2.map((location, index) => (
                  <Grid container className='flex items-end w-full mb-2' key={index}>
                    <Grid item lg={8}>
                      <CustomTextField
                        label={`Drop off Location ${index + 1}`}
                        fullWidth
                        value={location}
                        onChange={e => handleChangeLocation2(index, e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <i className='tabler-map-pin' />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                    {locations2.length > 1 && (
                      <Grid item lg={2} className='flex items-end justify-end pb-1'>
                        <Button
                          variant='contained'
                          size='medium'
                          className='flex items-center justify-center bg-[#e64449]'
                          onClick={() => handleRemoveLocation2(index)}
                          startIcon={<i className='tabler-minus' />}
                          sx={{
                            '& .MuiButton-startIcon': {
                              display: 'flex',
                              marginRight: 0,
                              marginLeft: 0,
                              marginInlineEnd: 0
                            }
                          }}
                        ></Button>
                      </Grid>
                    )}
                    {index === locations2.length - 1 && (
                      <Grid item lg={2} className='flex justify-end pb-1'>
                        <Button
                          variant='contained'
                          size='medium'
                          className='flex items-center justify-center bg-primary'
                          onClick={handleAddLocation2}
                          startIcon={<i className='tabler-plus' />}
                          sx={{
                            '& .MuiButton-startIcon': {
                              display: 'flex',
                              marginRight: 0,
                              marginLeft: 0,
                              marginInlineEnd: 0
                            }
                          }}
                        ></Button>
                      </Grid>
                    )}
                  </Grid>
                ))}
              </Box>
            )}

            <FormControlLabel
              control={<Switch size='small' checked={showTextField} onChange={handleSwitchChange} />}
              label='Will Vehicle Travel Extra KMs'
            />
            {showTextField && (
              <CustomTextField
                label='Enter KMs'
                placeholder='Enter Total Distance'
                InputProps={{
                  endAdornment: <InputAdornment position='end'>KM</InputAdornment>
                }}
              />
            )}
          </Box>
        </Grid>

        {/* Step 2 */}
        <Grid item lg={4} xs={12} className=''>
          <Box className='flex items-center gap-1 '>
            <Typography variant='h5' className='font-bold text-primary'>
              Step 2:
            </Typography>
            <Typography variant='h5' className='font-bold text-black'>
              Distance To & From
            </Typography>
          </Box>
          <Box className='flex flex-col w-full pe-5'>
            <Typography variant='h6' className='pt-5 mb-2 font-bold text-black'>
              Where Vehicle is Standing?
            </Typography>
            <RadioGroup
              row
              aria-label='controlled'
              name='controlled'
              value={value2}
              onChange={handleChange2}
              className='gap-10 mb-2'
            >
              <FormControlLabel value='controlled-checked' control={<Radio />} label='Custom Address ' />
              <FormControlLabel value='controlled-unchecked' control={<Radio />} label='Manual KMs' />
            </RadioGroup>

            {value2 === 'controlled-checked' && (
              <CustomTextField
                label='Enter Location of Truck'
                placeholder='Enter Location of Truck'
                id='form-props-full-width'
                className='mb-2'
              />
            )}

            {value2 === 'controlled-unchecked' && (
              <CustomTextField
                label='Enter KMs'
                placeholder='Enter Total Distance'
                id='form-props-full-width'
                className='mb-2'
              />
            )}

            <Box className='flex mb-2'>
              <FormControlLabel
                control={<Switch size='small' checked={isSwitchOn} onChange={handleSwitchChange2} />}
                label='Calculate time Automatically'
                className='w-3/5'
              />
              {isSwitchOn ? (
                <CustomTextField disabled label='' placeholder='450' />
              ) : (
                <CustomTextField label='' placeholder='' />
              )}
            </Box>
            <Typography variant='h6' className='pt-5 mb-2 font-bold text-black'>
              Where Vehicle will move after Delivery?
            </Typography>
            <RadioGroup
              row
              aria-label='controlled'
              name='controlled'
              value={value3}
              onChange={handleChange3}
              className='gap-10 mb-2'
            >
              <FormControlLabel value='controlled-checked3' control={<Radio />} label='Custom Address ' />
              <FormControlLabel value='controlled-unchecked3' control={<Radio />} label='Manual KMs' />
            </RadioGroup>

            {value3 === 'controlled-checked3' && (
              <CustomTextField
                label='Enter Location of Truck'
                placeholder='Enter Location of Truck'
                id='form-props-full-width'
                className='mb-2'
              />
            )}

            {value3 === 'controlled-unchecked3' && (
              <CustomTextField
                label='Enter KMs'
                placeholder='Enter Total Distance'
                id='form-props-full-width'
                className='mb-2'
              />
            )}

            <Box className='flex mb-2'>
              <FormControlLabel
                control={<Switch size='small' checked={isSwitchOn2} onChange={handleSwitchChange3} />}
                label='Calculate time Automatically'
                className='w-3/5'
              />
              {isSwitchOn2 ? (
                <CustomTextField disabled label='' placeholder='450' />
              ) : (
                <CustomTextField label='' placeholder='' />
              )}
            </Box>
          </Box>
        </Grid>

        {/* Step 3 */}
        <Grid item lg={4} xs={12} className='mb-3 '>
          <Box className='flex items-center gap-1 mb-6 '>
            <Typography variant='h5' className='font-bold text-primary'>
              Step 3:
            </Typography>
            <Typography variant='h5' className='font-bold text-black'>
              Time Management
            </Typography>
          </Box>
          <Box className='flex w-full gap-5 mb-3'>
            <CustomTextField
              label='Loading Time'
              placeholder='450'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|Min</InputAdornment>
              }}
            />
            <CustomTextField
              label='Unloading Time'
              placeholder='450'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|Min</InputAdornment>
              }}
            />
          </Box>

          <Box className='flex flex-col w-full'>
            {breaks.map((_, index) => (
              <Box className='flex items-end w-full gap-4 mb-2' key={index}>
                <Grid item xs={4}>
                  <CustomTextField select fullWidth defaultValue={0} label='Break' id='custom-select-small'>
                    <MenuItem value={0}></MenuItem>
                    <MenuItem value={0}>Select Type</MenuItem>
                    <MenuItem value={10}>Lunch</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={4}>
                  <CustomTextField
                    label='Time'
                    placeholder='450'
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>|Min</InputAdornment>
                    }}
                  />
                </Grid>
                {breaks.length > 1 && (
                  <Grid item xs={2} className='flex justify-end pb-1'>
                    <Button
                      variant='contained'
                      size='medium'
                      className='flex items-center justify-center bg-[#e64449]'
                      startIcon={<i className='tabler-minus' />}
                      onClick={() => handleRemoveBreak(index)}
                      sx={{
                        '& .MuiButton-startIcon': {
                          display: 'flex',
                          marginRight: 0,
                          marginLeft: 0,
                          marginInlineEnd: 0
                        }
                      }}
                    ></Button>
                  </Grid>
                )}

                {index === breaks.length - 1 && (
                  <Grid item xs={2} className='flex justify-end pb-1'>
                    <Button
                      variant='contained'
                      size='medium'
                      className='flex items-center justify-center bg-primary'
                      startIcon={<i className='tabler-plus' />}
                      onClick={handleAddBreak}
                      sx={{
                        '& .MuiButton-startIcon': {
                          display: 'flex',
                          marginRight: 0,
                          marginLeft: 0,
                          marginInlineEnd: 0
                        }
                      }}
                    ></Button>
                  </Grid>
                )}
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Step 4 */}
        <Grid lg={4} xs={12} className='flex flex-col pe-5 '>
          <Box className='flex items-center gap-1 my-6 '>
            <Typography variant='h5' className='font-bold text-primary'>
              Step 4:
            </Typography>
            <Typography variant='h5' className='font-bold text-black'>
              Time Management
            </Typography>
          </Box>
          <Box className='flex gap-4 mb-3'>
            <CustomTextField
              label='Per Hour Cost'
              placeholder='4'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Per Hour Price'
              placeholder='8'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Profit Margins'
              placeholder='100'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|%</InputAdornment>
              }}
            />
          </Box>
          <Box className='flex gap-4 mb-3'>
            <CustomTextField
              label='Per KM Cost'
              placeholder='4'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Per KM Price'
              placeholder='8'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Profit Margins'
              placeholder='100'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|%</InputAdornment>
              }}
            />
          </Box>
          <Box className='flex gap-4'>
            <CustomTextField
              label='Per Ton Cost'
              placeholder='4'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Per Ton Price'
              placeholder='8'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|€</InputAdornment>
              }}
            />
            <CustomTextField
              label='Profit Margins'
              placeholder='100'
              InputProps={{
                endAdornment: <InputAdornment position='end'>|%</InputAdornment>
              }}
            />
          </Box>
        </Grid>

        <Grid xs={12} lg={8} className='my-5'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell align='right'>Cost</StyledTableCell>
                  <StyledTableCell align='right'>Price</StyledTableCell>
                  <StyledTableCell align='right'>Profit&nbsp;Margin</StyledTableCell>
                  <StyledTableCell align='right'>Measurement</StyledTableCell>
                  <StyledTableCell align='right'>Total</StyledTableCell>
                  <StyledTableCell align='right'>Profit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component='th' scope='row'>
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align='right'>{row.cost}</StyledTableCell>
                    <StyledTableCell align='right'>{row.price}</StyledTableCell>
                    <StyledTableCell align='right'>{row.profitmr}</StyledTableCell>
                    <StyledTableCell align='right'>{row.measurement}</StyledTableCell>
                    <StyledTableCell align='right'>{row.total}</StyledTableCell>
                    <StyledTableCell align='right' className='flex items-center'>
                      {row.profit}
                      <i className='tabler-trending-up-2 bg-primary' />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} className='flex flex-col '>
        <Grid item xs={12} className='flex items-center gap-1 my-3'>
          <Typography variant='h5' className='font-bold text-primary'>
            TimeLine
          </Typography>
        </Grid>
        <Grid item xs={12} className='flex flex-col items-baseline gap-5 md:items-end md:flex-row'>
          <Grid item lg={3} xs={12} className='flex '>
            <CustomTextField label='Specify Start Time ' placeholder='Enter When to start' className='w-full' />
          </Grid>
          <Grid item lg={9} xs={12} className='flex flex-wrap gap-6'>
            <Box className='flex items-center gap-2'>
              <Dot color='#CBF2DC' />
              <Typography variant='h5'>Reach to Pickup</Typography>
            </Box>
            <Box className='flex items-center gap-2'>
              <Dot color='#C2EEF4' />
              <Typography variant='h5'> Loading/Unloading Truck</Typography>
            </Box>
            <Box className='flex items-center gap-2'>
              <Dot color='#FFE8D2' />
              <Typography variant='h5'> Travelling to Destination</Typography>
            </Box>
            <Box className='flex items-center gap-2'>
              <Dot color='#E1E1E4' />
              <Typography variant='h5'>Break</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid className='flex flex-row mt-5'>
        <Grid container columns={16} className='flex flex-col mt-5 lg:flex-row'>
          <Grid lg={1} className=' bg-[#CBF2DC]  h-28 lg:h-28  '>
            <Tooltip
              title={
                <React.Fragment>
                  Reach to Pickup Point <br />
                  10 KMs <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full bg-[#CBF2DC]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#C2EEF4]  h-28 lg:h-32 '>
            <Tooltip
              title={
                <React.Fragment>
                  Loading Truck <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full bg-[#C2EEF4]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={3} className=' bg-[#FFE8D2] h-28 lg:h-32'>
            <Tooltip
              title={
                <React.Fragment>
                  Driving to Point 1 - Avenue Garden ABC
                  <br />
                  100 Kms
                  <br />3 Hrs
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#FFE8D2]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#c2eef4] h-28 lg:h-32'>
            <Tooltip
              title={
                <React.Fragment>
                  Unloading Truck <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#c2eef4]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#cfd0d4]  h-28 lg:h-32'>
            <Tooltip
              title={
                <React.Fragment>
                  Lunch Break <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#cfd0d4]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={3} className=' bg-[#F9D4B1] h-28 lg:h-32'>
            <Tooltip
              title={
                <React.Fragment>
                  Driving to Point 2 - Hilland View <br />
                  200 KMs <br />4 Hrs
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#F9D4B1]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#C2EEF4] h-28 lg:h-32 '>
            <Tooltip
              title={
                <React.Fragment>
                  Unloading Truck <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#C2EEF4]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#E7E7E9] h-28 lg:h-32 '>
            <Tooltip
              title={
                <React.Fragment>
                  Lunch Break <br />
                  20 Mins
                </React.Fragment>
              }
              arrow
            >
              <Button fullWidth className='h-full hover:bg-[#E7E7E9]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={1} className=' bg-[#F7E0CA]  h-28 lg:h-32'>
            <Tooltip title='Add' arrow>
              <Button fullWidth className='h-full hover:bg-[#F7E0CA]'></Button>
            </Tooltip>
          </Grid>
          <Grid lg={3} className=' bg-[#CFD0D4] h-28 lg:h-32 '>
            <Tooltip title='Available Slot' arrow>
              <Button fullWidth className='h-full hover:bg-[#CFD0D4]'></Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid className='flex flex-col gap-5 mt-5 lg:hidden '>
          <React.Fragment>
            <Grid className='flex flex-col gap-5'>
              {timeIntervals1.map((time, index) => (
                <Typography variant='body2' key={index}>
                  {time}
                </Typography>
              ))}
            </Grid>
            <Grid className='flex flex-col gap-5'>
              {timeIntervals2.map((time, index) => (
                <Typography variant='body2' key={index}>
                  {time}
                </Typography>
              ))}
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>

      <Grid className='flex-wrap hidden gap-5 lg:flex md:flex-row'>
        <React.Fragment>
          <Grid className='flex flex-wrap gap-5'>
            {timeIntervals1.map((time, index) => (
              <Typography variant='body2' key={index}>
                {time}
              </Typography>
            ))}
          </Grid>
          <Grid className='flex flex-wrap gap-5'>
            {timeIntervals2.map((time, index) => (
              <Typography variant='body2' key={index}>
                {time}
              </Typography>
            ))}
          </Grid>
        </React.Fragment>
      </Grid>
    </Box>
  )
}

export default StmsRouteplanning
