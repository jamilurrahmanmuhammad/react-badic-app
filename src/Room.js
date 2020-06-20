import React from 'react';
import ReactDOM from 'react-dom';
import './room.css';

function Room(){
    const [isLit, setLit] = React.useState(true);
    return (
            <div className={isLit ? "lit" : "dark"}>
            the room is {isLit ? "lit" : "dark"}
            <br />
            <button onClick={() => setLit(!isLit)}>
                flip
            </button>
            </div>
    );

}

ReactDOM.render(<Room></Room>,document.getElementById('root'));

export default Room;