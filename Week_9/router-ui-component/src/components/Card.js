import cx from 'classnames'
import {twMerge} from 'tailwind-merge'


export default function Card({ title, description }){
    
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onClick}>Edit</button>
      </div>
    );
  };