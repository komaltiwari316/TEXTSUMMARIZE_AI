import { use, useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [summary,setsummary]=useState('');


async function reviewText() {
  try {
    const res = await fetch('http://localhost:3000/ai/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }), // Send text properly
    });

    const data = await res.json(); 
    setsummary(data.summary);
  } catch (err) {
    console.error(err);
  }
}

function ResetInput(){
   setText('');
   setsummary('')
}


  return (
    <>
      <div style={{ display: 'flex', padding: '10px', alignItems: 'center', justifyContent: 'center', gap: '30px', height: '95vh' }}>
        <div style={{ backgroundColor: 'red', height: '90vh', width: '99vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write here..." style={{width: '90%',  height: '70%',  padding: '10px',  fontSize: '16px',  borderRadius: '5px',  border: 'none',  resize: 'none',display: 'flex',
            }}/>
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
            }}
            onClick={reviewText}
          >
            Summarize
          </button>
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              marginTop: '20px',
            }}
            onClick={ResetInput}
          >
            Reset
          </button>
        </div>

        {/* Blue Box (Output or Anything else) */}
        <div
          style={{
            backgroundColor: 'blue',
            height: '90vh',
            width: '99vh',
          }}
        >{summary}</div>
      </div>
    </>
  );
}

export default App;
