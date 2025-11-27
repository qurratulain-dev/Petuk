import React, { useState } from 'react';
import journey from '../../assets/journey.png';

const WhatWeDo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordions = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur 1...",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum nam repellat reiciendis numquam corporis error repudiandae!"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur 2...",
      content: "Extra content for second accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur 3...",
      content: "Extra content for third accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur 4...",
      content: "Extra content for fourth accordion. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className='max-w-6xl mx-auto px-5 pb-10 flex gap-10 justify-center items-start flex-col md:flex-row'>
        <div className='flex-1 flex flex-col'>
          <h2 className='text-zinc-800 text-4xl font-bold tracking-tight'>What We Do</h2>
          <p className='text-sm text-zinc-500 my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione corporis eveniet consectetur earum. </p>
          <p className='text-[12px] text-zinc-500 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugiat sapiente cupiditate qui, alias dolor? Adipisci unde voluptatem excepturi tempora?</p>
          {/*  List */}
          {accordions.map((item, index) => (
            <div key={item.id} className='mt-5 w-full border bg-orange-50 border-orange-300 rounded-lg'>
              {/* pra + icon */}
              <div 
                onClick={() => toggleAccordion(index)}
                className='flex justify-between items-center px-4 py-3 cursor-pointer text-zinc-700'>
                <p className='text-sm font-medium text-zinc-500'>{item.title}</p>
                <span className='text-xl font-bold text-orange-300'>{openIndex === index ? "−" : "+"}</span>
              </div>

              {/* Show/Hide*/}
              <div 
                className={`overflow-hidden transition-all duration-300 px-4 ${openIndex === index ? 'max-h-40 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}
                 bg-orange-400 text-white text-sm`} >
                {item.content}
              </div>

            </div>
          ))}
        </div>
        {/* Right*/}
        <div className='flex-1 md:flex flex-col mt-10 md:mt-0 hidden'>
          <img src={journey} alt="" className='h-[70vh] w-[60vw] rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
