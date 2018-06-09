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
      plejlista: []
    };
  }

  componentDidMount() {
    axios.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCd4dAk4EfnzS88SIDBrJzhA&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => this.setState({
      subs: result.data.items[0].statistics.subscriberCount,
      klipovi:result.data.items[0].statistics.videoCount,
      pregledi:result.data.items[0].statistics.viewCount

    }))

    axios.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCd4dAk4EfnzS88SIDBrJzhA&maxResults=30&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => this.setState({
        plejlista: result.data.items
    }));
  };
  
  render() {

    let lista = this.state.plejlista;

    return (
      <div className="kanal">
        <div className="klipovi">
          <div className="poslednji">
          <h2>Ime klipa</h2>
           <img src="http://via.placeholder.com/300x200" />
           <p>05.06.2018</p>
=          </div>
          <div className="ostali">
          <div className="klip-box info">
              <h1>Plejliste</h1>
            </div>
          <div className="plejliste">
          
            {
              lista.map( (list) => 
                <div className="lista">
                  <h4>{list.snippet.title}</h4>
                  <img src={list.snippet.thumbnails.medium.url} />
{/*                   <p className="broj">{list.contentDetails.itemCount}</p>
 */}                </div>
              
              )}
          </div>

        
              <div className="klip-box info">
              <p className="pregledi">Pregleda <br/>{this.state.pregledi}</p>
              <p className="subs">Subskrajbera <br/>{this.state.subs}</p>
              <p className="klip">Klipova <br/>{this.state.klipovi}</p>
            </div>
          </div>
        </div>
      </div>
    )};
  }

export default Kanal;