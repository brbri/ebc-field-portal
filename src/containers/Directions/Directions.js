import React, { Component } from "react";
import "./Directions.css";

class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        ebc: {
          pageTitle: "Directions",
          address: "3000 Tannery Way, Second Floor, Santa Clara, CA 95054",
          downloadHref:
            "https://paloaltonetworks.box.com/s/7rryvp1gx129to3n2e0el0hfn0l09zo9",
          parkingHref:
            "https://paloaltonetworks.box.com/s/2chs2qfwrf8webhmiggsbxd2zl1n91s6",
          parkingImg: "ebc-parking-map.png",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.148181528914!2d-121.98477020756988!3d37.38250539515626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9e5d80ab7b7%3A0x8786250dbbf62d2b!2s3000+Tannery+Way%2C+Santa+Clara%2C+CA+95054!5e0!3m2!1sen!2sus!4v1538515195045"
        },
        cbc: {
          pageTitle: "Directions",
          address:
            "De Entrée 99, Oval Tower, Floor 1–8, 1101 HE Amsterdam, The Netherlands",
          downloadHref:
            "https://paloaltonetworks.box.com/s/50lgmz2zo02eikgaffuabiendoweer83",
          parkingHref:
            "https://paloaltonetworks.box.com/s/ig5488bbn2mqojombshqzzmt3gfplc0t",
          parkingImg: "cbc-parking-map.png",
          maps:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.202398000781!2d4.937952365799752!3d52.312329729775406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60b97919c0203%3A0x29c1082128e6531!2sDe+Entree+99%2C+1101+HE+Amsterdam%2C+Netherlands!5e0!3m2!1sen!2sus!4v1541626356272"
        }
      }
    };
  }

  openModal = card => {
    this.setState({ currentCard: card, showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let location = this.props.match.params.id || "ebc";
    const { content } = this.state;
    return (
      <div className="ebc-field-portal-Directions">
        <div>
          <div className="App-body">
            <div className="page-title-container">
              <p className="page-title fancy">
                <span>{content[location].pageTitle}</span>
              </p>
            </div>
            <section className="maps-container">
              <iframe
                title="googleMapsDirections"
                src={content[location].maps}
                width="100%"
                allowFullScreen
              />
              <span className="address">{content[location].address}</span>
              <div className="save-copy-container">
                <span className="save-copy">
                  Want to save a copy of the directions?
                </span>
                <a target="_blank" href={content[location].downloadHref}>
                  <div className="btn-save">Download PDF</div>
                </a>
              </div>
            </section>
            <div className="page-title-container">
              <p className="page-title fancy">
                <span>Parking</span>
              </p>
            </div>
            <section className="parking-container">
              <img
                src={require(`./../../assets/img/${
                  content[location].parkingImg
                }`)}
                alt="parking map"
              />
              <div className="save-copy-container" />
              <div className="save-copy-container">
                <span className="save-copy">
                  Want to save a copy of the parking map?
                </span>
                <a target="_blank" href={content[location].parkingHref}>
                  <div className="btn-save">Download PDF</div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Directions;
