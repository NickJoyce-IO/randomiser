import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([{ author: 'Loading...', quote: 'Loading...' }]);

  const fetchQuote = async () => {
    const res = await fetch('/api/quote');
    if (res.ok) {
      const json = await res.json();
      setData(json);
    }
    const colors = [
      '#39CCCC', '#85144b', '#FF4136', '#7FDBFF',
      '#3D9970', '#FFDC00', '#01FF70', '#2ECC40', '#FF851B'
    ];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => { fetchQuote(); }, []);

  return (
    <div>
      <div className="card">
        <div className="card-block">
          <h3 className="card-title">Quote Generator</h3>
          <br />
          <p className="card-text">{data[0].quote || 'Loading'}</p>
          <h6 className="card-subtitle mb-2 text-muted">-{data[0].author || 'Loading'}</h6>
          <div className="row">
            <div className="action col-sm">
              <button onClick={fetchQuote} className="btn btn-primary">New Quote</button>
            </div>
            <div className="col-sm">
              <div className="tweet">
                <a className="button" title="Tweet this quote!" target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?hashtags=quotes,famous&text=${data[0].quote} -${data[0].author}`}> 
                  <i className="fab fa-twitter-square" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
