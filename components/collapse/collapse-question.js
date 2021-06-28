import React, {useState} from 'react';



const Question = ({title, info}) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)}  className='bg-gray-300 text-center text-xl rounded-md my-2'>
          {title}
        </h4>
      </header>
      {expanded && <p>{info}</p>}
    </article>
    )
}

export default Question;