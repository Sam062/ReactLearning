import React from 'react';
import $ from 'jquery';


export default class NasaApiConsuming extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        var context = this;
        $.ajax({
            url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY',
            method: "GET",
            success: function (response) {
                context.setState({
                    photos: response.photos
                })
            }
        })
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h1 className='display-2 text-success'>Nasa Mars Rover Photos</h1>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Sol[Days On Mars]</th>
                                <th>Photo preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.photos.map(mars =>
                                    <tr>
                                        <td>{mars.id}</td>
                                        <td>{mars.sol}</td>
                                        <td>
                                            <img src={mars.img_src} alt='{mars.id}' width="300" height="200" />
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </>
        )
    }
}
