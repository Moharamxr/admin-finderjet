import React from 'react'

type DataFelidProps = {
  label: string
  value: string
}

const DataFelid :React.FC<DataFelidProps> = (
  {label='Felid Label', value='Felid Value'}
) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <p className='text-headlines text-base font-medium'>{label}</p>
      <p className='text-sm text-suede'>{value}</p>
    </div>
  )
}

export default DataFelid