import React from 'react'
import './app.css';

type Props = {}

export default async function About({}: Props) {
    // const result = await fetch(
    //     "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs"
    //     );
    // const data = await result.json();
    // const textInput = <input type="text" />
    // const okButton = <button className='text-red-800'>สักหน่อยมั้ยล่ะ</button>
  return (
    <div>
        <h1>About</h1>
        {/* <p>
            {textInput}
        </p>
        <p>
            {okButton}
        </p>
        <ul>
            {data.youtubes.map((e) => (
                <li key={e.id}> {e.title} </li>
            ))}
        </ul> */}
    </div>
  )
}