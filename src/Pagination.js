import React from 'react'
import { AppContext } from './Components/context/AppContext';
import { useEffect, useContext } from 'react';

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div >
      <div>
        <div>

          {page > 1 &&
            (<button
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>)
          }

          {page < totalPages &&
            (<button
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>)
          }

        </div>


        <p >
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
