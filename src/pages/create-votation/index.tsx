import { useState } from 'react'
import { Box, Typography, TextField, IconButton, Stack, Button } from '@mui/material'
import Header from '../../components/Header'
import { containerV1 } from '../../styles/containers'
import { inputStyle } from '../../styles/inputs'
import { PhotoCamera } from '@mui/icons-material'
import { containedButtonStyle } from '../../styles/buttons'

export default function CreateVotation() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <>
      <Header />

      <Box
        sx={containerV1}
        component="form"
        id="create-votation-form"
      >
        <Typography
          variant="h5"
          color="text.primary"
          sx={{ fontWeight: 'bold' }}
          align="center"
        >
          Create Votation
        </Typography>

        <TextField
          name='title'
          label='Title'
          variant='outlined'
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          sx={inputStyle}
        />

        <TextField
          name='description'
          label='Description'
          variant='outlined'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          fullWidth
          sx={inputStyle}
          rows={4}
          multiline
        />

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 1, }}
        >
          <TextField
            name='start-date'
            variant='outlined'
            type='date'
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            sx={{
              ...inputStyle,
              mb: 0,
            }}
          />

          <TextField
            name='end-date'
            variant='outlined'
            type='date'
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            sx={{
              ...inputStyle,
              mb: 0,
            }}
          />
        </Stack>

        <label
          htmlFor="contained-button-file"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            style={{ display: 'none' }}
            name="image-input"
            disabled={loading}
          />

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ fontWeight: 'bold' }}
            align="center"
          >
            Upload Image
          </Typography>

          <IconButton
            aria-label="upload picture"
            component="span"
            disabled={loading}
            sx={{
              color: 'text.primary',
            }}
          >
            <PhotoCamera />
          </IconButton>
        </label>

        <Button
          variant="text"
          sx={{
            ...containedButtonStyle,
            display: 'block',
            mx: 'auto',
            alignItems: 'center',
            color: 'common.white',
            mt: 1,
          }}
          disabled={(!title || !description || !startDate || !endDate) || loading}
        >
          Save
        </Button>
      </Box>
    </>
  )
}