import React, { type FC } from 'react'
import FormAirplane from '../components/form-airplane';

// interface CreateAirplanePageProps {

// }

export const 
 
const CreateAirplanePage: FC = () => {
    return (
        <div>
          <div className='flex flex-row items-center justify-between'>
            <div className='my-5 text-2xl font-bold'>
                Tambah Data Airplane
            </div>
        </div>

        <FormAirplane type='ADD'/>
        </div>
    )
}

 
export default CreateAirplanePage;