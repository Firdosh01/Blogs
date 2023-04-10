import React from 'react'
import { AppContext } from './Components/context/AppContext';
import { useEffect, useContext } from 'react';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='fixed bottom-0 flex items-center justify-center w-full bg-white border-2'>
      <div  className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-x-2'>

          {page > 1 &&
            (<button
              className='px-4 py-1 border-2 rounded-md'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>)
          }

          {page < totalPages &&
            (<button
              className='px-4 py-1 border-2 rounded-md'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>)
          }

        </div>


        <p  className='text-sm font-bold'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
