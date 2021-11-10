import React, { Component } from 'react';


class FormTest extends Component {

    render(){ 
        return(
            <div className="container">
                <div className="row">
                    <form method="POST" enctype="multipart/form-data" class="form1">
                    <label for="text">
                        Text:
                        <input name="text" id = "text" type="text" />
                    </label>
                    <label for="date">
                        Date:
                        <input name="name" id = "name" type="date" />
                    </label>

                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}


export default FormTest
