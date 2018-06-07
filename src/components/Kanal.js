import React ,{Component} from 'react'
import './App.css'
import axios from 'axios'




class Kanal extends Component {
  
  constructor() {
    super();
    this.state = {
      subs: undefined,
      klipovi: undefined,
      pregledi: undefined,
    };
  }

  componentDidMount() {
    axios.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCd4dAk4EfnzS88SIDBrJzhA&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => this.setState({
      subs: result.data.items[0].statistics.subscriberCount,
      klipovi:result.data.items[0].statistics.videoCount,
      pregledi:result.data.items[0].statistics.viewCount

    }))

    axios.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCd4dAk4EfnzS88SIDBrJzhA&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => console.log(result))
  };
  
  render() {
    return (
      <div className="kanal">
        <div className="klipovi">
          <div className="poslednji">
          <h2>Ime klipa</h2>
           <img src="http://via.placeholder.com/300x200" />
           <p>05.06.2018</p>
=          </div>
          <div className="ostali">
            <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
            </div>

                  <div className="klip-box">
              <h4>Ime klipa</h4>
              <img src="http://via.placeholder.com/150x90"/>
              <p>05.06.2018</p>
              </div>
              <div className="klip-box info">
              <p>Pregleda <br/>{this.state.pregledi}</p>
              <p>Subskrajbera <br/>{this.state.subs}</p>
              <p>Klipova <br/>{this.state.klipovi}</p>
            </div>
          </div>
        </div>
      </div>
    )};
  }

export default Kanal;