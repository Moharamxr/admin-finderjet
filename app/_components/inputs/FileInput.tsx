import React from 'react'

const FileInput = () => {
  return (
    <label htmlFor='reportFiles' className='block'>
      <input id='reportFiles' type="file" className="hidden" />
        <label className="block mb-2 text-subtitle font-medium">Upload photo</label>
        <div className="bg-[#F2F3F7] hover:bg-[#eaebee] transition-all duration-300 center border-primary border-separate border-spacing-11 rounded-md h-32 cursor-pointer  border-dashed border p-10">
            <div className="space-y-3">
                <p className='text-[#6B6969] text-center font-normal'>Drop your Photo here or click upload</p>
                <p className='font-bold text-primary text-center'>Upload</p>
            </div>
        </div>
    </label>
  )
}

export default FileInput
