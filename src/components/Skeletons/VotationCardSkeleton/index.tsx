import { Box, Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import { containerV1 } from '../../../styles/containers'

export default function VotationCardSkeleton() {
  return (
    <>
      <Stack
        spacing={2}
        alignItems='center'
        justifyContent='center'
        sx={{ my: 2 }}
      >
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
        <CustomSkeleton />
      </Stack>
    </>
  )
}

const CustomSkeleton = () => {
  return (
    <>
      <Stack
        spacing={1}
        sx={{
          ...containerV1,
        }}
      >
        <Stack
          spacing={2}
          direction='row'
          alignItems='center'
        >
          <Skeleton animation="wave" variant='circular' width={40} height={40} />

          <Stack spacing={0.5}>
            <Skeleton animation="wave" variant='text' width={100} height={10} />
            <Skeleton animation="wave" variant='text' width={100} height={10} />
          </Stack>
        </Stack>

        <Skeleton animation="wave" variant='rounded' height={300} />

        <Skeleton animation="wave" variant='text' height={15} />

        <Skeleton animation="wave" variant='text' height={30} />

        <Stack
          spacing={1}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack
            spacing={1}
            direction='row'
            alignItems='center'
          >
            <Skeleton animation="wave" variant='circular' width={40} height={40} />
            <Skeleton animation="wave" variant='circular' width={40} height={40} />
          </Stack>

          <Skeleton animation="wave" variant='circular' width={40} height={40} />
        </Stack>
      </Stack>
    </>
  )
}
