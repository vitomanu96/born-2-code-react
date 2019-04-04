import React, {Component} from 'react'
import sun from '../assets/imgs/sun.png'
import cloud from '../assets/imgs/cloud.png'
import mist from '../assets/imgs/mist.png'
import rain from '../assets/imgs/rain.png'
import {connect} from 'react-redux'
import {updateDefaultWeather} from './redux/weather.action'


export const CONDITION_TO_IMAGE_MAPPER = {
    cloudy: cloud,
    rainy: rain,
    foggy: mist,
    sunny: sun
}

const MOCK_WEATHER = {
    id: 1,
    city: 'Rome',
    temperature: 7,
    windDirection: 'NE',
    windSpeed: 12,
    condition: 'cloudy'
}

class DefaultCityWeatherComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isPendingRequest: false
        }
    }

    render() {
        return (

            <div className="card h-100">
                {this.props.weather && <div className="card-body">
                    <h5 className="card-title">Weather</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.weather.city || ''} weather</h6>
                    <div className="form-group row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <small>Degree:</small>
                                    <span className="ml-1 font-weight-bold">{this.props.weather.temperature || ''}
                                    </span>
                                </div>
                                <div className="col-12">
                                    <small>Wind:</small>
                                    <span className="ml-1 font-weight-bold">
                                        {this.props.weather.windSpeed || '-'} km/h {this.props.weather.windDirection || ''}
                                    </span>
                                </div>
                                <div className="col-12">
                                    <small>Condition:</small>
                                    <span className="ml-1 font-weight-bold">{this.props.weather.condition || '-'}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <img
                                alt={this.props.weather.condition || 'img'}
                                src={this.props.weather.condition ? CONDITION_TO_IMAGE_MAPPER[this.props.weather.condition] : '#'}
                                className="img-fluid" style={{width: 100, height: 'auto'}}
                            />
                        </div>
                    </div>

                </div>}
                {
                    this.state.isPendingRequest &&
                    <div className="spinner-border text-primary m-auto" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>
        )
    }

    componentDidMount() {
        // simulating fetch API
        this.setState({
            isPendingRequest: true
        })
        setTimeout(() => {
            this.props.updateWeather(MOCK_WEATHER)
            this.setState({
                isPendingRequest: false
            })
        }, 2134)
    }
}

const mapStateToProps = (state) => ({
    weather: state.defaultWeather
})

const mapDispatchToProps = (dispatch) => ({
    updateWeather: (weather) => dispatch(updateDefaultWeather(weather))
})

export const DefaultCityWeather = connect(mapStateToProps, mapDispatchToProps)(DefaultCityWeatherComponent)
