import React ,{Component} from 'react'
import './App.css'
import axios from 'axios'




class Kanal extends Component {
  constructor() {
    super();
    this.state = {
      subs: 1
    };
  }

  componentDidMount() {
    axios.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCd4dAk4EfnzS88SIDBrJzhA&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => this.setState({
      subs: result.data.items[0].statistics.viewCount
    }))
  };

 
  
  render() {
    return (
      <div className="kanal">
        <div className="klipovi">
          <div className="poslednji">
          <h2>Ime klipa</h2>
           <img src="http://via.placeholder.com/400x300" />
           <p>05.06.2018</p>
           <p>{this.state.subs}</p>
          </div>
          <div className="ostali">
            <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/250x200"/>
              <p>05.06.2018</p>
            </div>
          </div>
        </div>
        <div className="subovi">
        </div>
      </div>
    )};
  }

export default Kanal;