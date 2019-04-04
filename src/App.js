import React, {Component} from 'react'
import {DefaultCityWeather} from './default-city-weather/DefaultCityWeather'
import {LatestResearch} from './latest-research/LatestResearch'
import {SearchByCity} from './search-by-city/SearchByCity'

class App extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-20p">
                        <div className="col-6">
                            <DefaultCityWeather/>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <SearchByCity/>
                                </div>
                                <div className="col-12 mt-5">
                                    <LatestResearch/>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
