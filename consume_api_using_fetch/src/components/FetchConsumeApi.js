import React, { Component } from 'react'

export class FetchConsumeApi extends Component {

    constructor(props){
        super(props);
        this.state={
            photos:[]
        }
    }
    componentDidMount(){
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(response=> response.json())
        .then(response=>{
            this.setState({
                photos: response.photos
            })
        })
    }

  render() {
    return (
      <div className='container'>
        <h1 className='display-1'>Fetch Consume API- Mars</h1>
        <div className='card-group flex-column'>
            {
                this.state.photos.map(mars=>
                    <div className='card'>
                        <img src={mars.img_src} alt={mars.id} height="300" className='card-img-top'/>
                        <div className='card-header'>
                            <h3>{mars.id}</h3>
                            <p>{mars.sol}</p>
                        </div>
                    </div>
                    )
            }


        </div>
      </div>

    )
  }
}

export default FetchConsumeApi