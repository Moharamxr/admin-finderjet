import clsx from 'clsx'
import React from 'react'

type DataFelidProps = {
  label: string
  value: string
  extraStyle?: string
}

const DataFelid :React.FC<DataFelidProps> = (
  {label='Felid Label', value='Felid Value', extraStyle=''}
) => {
  return (
    <div className={clsx('flex flex-col gap-3 w-full ', extraStyle)}>
      <p className='text-headlines text-base font-medium'>{label}</p>
      <p className='text-sm text-suede'>{value}</p>
    </div>
  )
}

export default DataFelid