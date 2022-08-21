import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Showtask(props) {
  return (
    <div className='container'>
         <ul className="list-group todos mx-auto text-light">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>{props.task}</span>
        <div className='btn-group'>
    <button className='action_btn delete'onClick={()=>{props.onSelcet(props.id)}}><i className="fa fa-trash" aria-hidden="true"></i>

</button>
<button className='action_btn edit' onClick={()=>{props.onEdit(props.id)}}><i className="fa fa-pencil-square-o" aria-hidden="true"></i>


</button>
    </div>
      </li>
      
    </ul>
   
    </div>
  )
}

export default Showtask