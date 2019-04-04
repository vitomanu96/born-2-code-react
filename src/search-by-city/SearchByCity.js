import React, {Component} from 'react'

export const SearchByCity = (props) => {

    const handleClick = (e) => {
        console.log('CLICKED')
        // should dispatch action here
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Search by city</h5>
                <div className="row input-group">
                    <div className="col-6">
                        <input className="form-control" type="text" placeholder="Insert a city name"/>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary" onClick={handleClick}>SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}