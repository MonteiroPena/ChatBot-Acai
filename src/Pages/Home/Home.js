import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.min.css';
import './Home-style.css';
import Header from '../../Components/Header/Header';
import Cardapio from '../Cardapio/Cardapio'


const Combos = props => {
  const itens = props.promoction.map((item, index) => {
    return (
      <td key={index}>
        <div className="card">
          <div className="card-image">
            <img alt="" src={item.urlImg} />
          </div>
          <div className="card-content">
            <p>{item.descCombo}<b>{item.precoCombo}</b></p>
          </div>
        </div>
      </td>
    );
  });
  return (
    <div>
      {itens}
    </div>
  );
}

class Home extends Component {

  state = {
    promoction: [
      {
        urlImg: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/74698879_1499638613552261_5488931112950431744_o.jpg?_nc_cat=105&_nc_ohc=Sl_6b9mCHSQAQkYse7LOQ_T33mZewuY5Y_rPIF3Pr-imD4f-B-RWIwydA&_nc_ht=scontent.fsjk2-1.fna&oh=c856acd688242befef051213e6caa4f5&oe=5E4AC0DF",
        descCombo: "Combo 1:  Açai 700ml c/ creme de Maracujá",
        precoCombo: "R$ 12,00"
      },
      {
        urlImg: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/72211876_1477704522412337_3928136694754181120_o.png?_nc_cat=106&_nc_ohc=zutbaNYpYloAQlp3xszqkzE9oA82GHv4cEqSIIMlQyjUkNbR3-cX-Xgkw&_nc_ht=scontent.fsjk2-1.fna&oh=6bcdb9cd34e6d70c9a7195e20324583f&oe=5E774285",
        descCombo: "Combo 2:  Açai 700ml c/ creme de Limão",
        precoCombo: "R$ 12,00"
      },
      {
        urlImg: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/78071045_1516607305188725_4007591502376075264_o.jpg?_nc_cat=107&_nc_ohc=q0k9z9L18cUAQnhu8b33w1DFkSLmu_WQY1JvtJH8HjBvZUjM0I1nl1xkw&_nc_ht=scontent.fsjk2-1.fna&oh=cbe675974043b85d66e7a166fcf05217&oe=5E4262E4",
        descCombo: "Combo 3:  Açai 700ml c/ creme de Oreo",
        precoCombo: "R$ 15,00"
      },
      {
        urlImg: "https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC",
        descCombo: "Combo 4: :  Açai 700ml c/ creme de Avelã e Morango",
        precoCombo: "R$ 15,00"
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <Header />
        <h1>Cardápio de Açai</h1>
        <div className="container mb-10">
          <Cardapio />
        </div>
        <table>
          <tbody>
            <Combos promoction={this.state.promoction} />
          </tbody>
        </table>
      </Fragment>
    );
  }
}


export default Home;

