import React ,{Component} from 'react'
import './App.css'
import axios from 'axios'
import ReactPlayer from 'react-player'




class Kanal extends Component {
  
  constructor() {
    super();
    this.state = {
      subs: undefined,
      klipovi: undefined,
      pregledi: undefined,
      plejlista: [],
      video_ime : '',
      video_pregledi : '',
      video_link : '',
      id : ''
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

    axios.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Csnippet%2Cstatistics&id=bTSKyGUXy5o&key=AIzaSyDnyonG2rcsOLzKOw7BzQLv8Aao3VPiHvo")
    .then((result) => this.setState({
      video_ime: result.data.items[0].snippet.localized.title,
      video_pregledi: result.data.items[0].statistics.viewCount,
      id: result.data.items[0].contentDetails.id
    }))
    .catch((error) => console.log(error))
  };
  
  render() {

    let lista = this.state.plejlista;

    return (
      <div className="kanal">
        <div className="klipovi">
          <div className="poslednji">
          <h2>{this.state.video_ime}</h2>
          <ReactPlayer className="fullscreen-bg__video" playing="true"  url="https://www.youtube.com/watch?v=bTSKyGUXy5o"/>
           <p className="pregledi_najgledaniji">Pregleda <br/>{this.state.video_pregledi}</p>
          </div>
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