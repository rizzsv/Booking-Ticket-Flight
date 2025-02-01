import React from 'react'

export default function SeatItem() {
  return (
    <div className="group flex shrink-0 w-[60px] h-[60px] items-center justify-center relative">
    <label htmlFor="1A" className="absolute font-bold text-[20px] group-has-[:disabled]:text-[#797684] group-has-[:checked]:text-flysha-black">1A</label>
    <input type="radio" name="seat" id="1A" className="w-[60px] h-[60px] appearance-none rounded-[15px] checked:bg-flysha-light-purple ring-2 ring-white checked:ring-flysha-light-purple disabled:ring-0 disabled:bg-flysha-dark-grey" //disabled 
     />
</div>
  )
}
