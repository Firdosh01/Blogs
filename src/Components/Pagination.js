import React from 'react'
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='fixed inset-x-0 bottom-0 flex items-center justify-center w-full py-2 bg-white border-2 border-t-2 border-t-gray-300'>
      <div  className='flex justify-between w-11/12 max-w-2xl py-2 mx-auto gap-x-3'>
        <div className='flex gap-x-2'>

          {page > 1 &&
            (<button
              className='px-4 py-1 border-2 border-gray-300 rounded-md'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>)
          }

          {page < totalPages &&
            (<button
              className='px-4 py-1 border-2 border-gray-300 rounded-md'
              onClick={() => handlePageChange(page + 1)}
              
              >
              Next
            </button>)
          }

        </div>


        <p  className='ml-auto text-sm font-semibold'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
