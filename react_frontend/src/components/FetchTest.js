import React, { Component } from 'react';


class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [1,2,3,4,5],
        };
      }

    async componentDidMount() {
        const result = await fetch(
            'http://localhost:3001', { method: 'GET' }
            )
        const fetched_info = await result.json();
        alert(JSON.stringify(fetched_info));
        this.setState({data:fetched_info})
    }
    


render() {
    let { data } = this.state;
    return (
        <div>
            <h1>here is the data:</h1>
           <p>  {data.map(data => <div>{data.text} {data.id} {data.date} </div> ) }</p>
        </div>
    )
    }
}
export default FetchTest
