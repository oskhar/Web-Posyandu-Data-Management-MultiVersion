'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import Illustrations from '@components/Illustrations'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

const NotFound = ({ mode }: { mode: Mode }) => {
  // Vars
  const darkImg = '/images/pages/misc-mask-dark.png'
  const lightImg = '/images/pages/misc-mask-light.png'

  // Hooks
  const miscBackground = useImageVariant(mode, lightImg, darkImg)

  return (
    <div className='flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden'>
      <div className='flex items-center flex-col text-center gap-10'>
        <div className='flex flex-col gap-2 is-[90vw] sm:is-[unset]'>
          <Typography className='font-medium text-8xl' color='text.primary'>
            404
          </Typography>
          <Typography variant='h4'>Page Not Found ⚠️</Typography>
          <Typography>We couldn&#39;t find the page you are looking for.</Typography>
        </div>
        <img
          alt='error-illustration'
          src='/images/illustrations/characters/5.png'
          className='object-cover bs-[400px] md:bs-[450px] lg:bs-[500px]'
        />
        <Button href='/' component={Link} variant='contained'>
          Back to Home
        </Button>
      </div>
      <Illustrations maskImg={{ src: miscBackground }} />
    </div>
  )
}

export default NotFound
