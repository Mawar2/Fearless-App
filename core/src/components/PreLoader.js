import React, {useState, useEffect} from 'react'
import ReactLoading from 'react-loading';
import logo from '../../src/images/purpleCow.jpg'

function PreLoader() {
    const [data, setData] = useState([]);
    const [done,setDone]=useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    setDone(true);
                });
        }, 8000);
    }, []);
    return (
        <div>
            {
                !done ? <ReactLoading
                        type="spinningBubbles"
                        color="#5b0f99"
                        height={200}
                        width={200}
                />
                    :
                    <img src={logo} alt="Purple Cow Logo"/>
            }
        </div>
    )
}

export default PreLoader

