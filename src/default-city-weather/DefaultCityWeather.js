import React, {Component} from 'react'
import sun from '../assets/imgs/sun.png'

export class DefaultCityWeather extends Component {


    render() {
        return (

            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">Weather</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{'City name'} weather</h6>
                    <div className="form-group row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <small>Degree:</small>
                                    <bold>7</bold>
                                </div>
                                <div className="col-12">
                                    <small>Wind:</small>
                                    <bold>9 km/h - NW</bold>
                                </div>
                                <div className="col-12">
                                    <small>Condition:</small>
                                    <bold>CLOUDY</bold>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={sun} className="img-fluid" style={{width: 100, height: 'auto'}}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}