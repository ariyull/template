import React, { Component } from 'react';


class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: ["sample data"]
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
            <div>
                {
                data.map(data => 
                    <div className="boxcontent1">
                    <p> text: {data.text} </p> <p> id: {data.id} </p> <p>date: {data.date} </p>
                    </div>)
                }
            </div>
        </div>
    )
    }
}
export default FetchTest
