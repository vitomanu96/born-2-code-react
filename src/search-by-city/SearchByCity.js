import React, {Component} from 'react'

export class SearchByCity extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Search by city</h5>
                    <div className="row input-group">
                        <div className="col-6">
                            <input className="form-control" type="text" placeholder="Insert a city name"/>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary">SEARCH</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}