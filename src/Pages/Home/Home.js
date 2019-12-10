import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'materialize-css/dist/css/materialize.min.css';
import './Home-style.css';
import Header from '../../Components/Header/Header';
import Cardapio from '../Cardapio/Cardapio'

class Home extends Component {
  state = {
    acai: [
      {
        tamanho: '300ml',
        preco: 'R$ 4,00',
        adicional: 'Leite em pó',
        precoAdicional: 'R$ 1,00'
      },
      {
        tamanho: '500ml',
        preco: 'R$ 6,00',
        adicional: 'Leite condensado',
        precoAdicional: 'R$ 1,00'
      },
      {
        tamanho: '700ml',
        preco: 'R$ 8,00',
        adicional: 'Granola',
        precoAdicional: 'R$ 1,00'
      },
      {
        tamanho: '1L',
        preco: 'R$ 10,00',
        adicional: 'Paçoca',
        precoAdicional: 'R$ 1,00'
      }
    ]
  }
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Cardápio de Açai</h1>
        <div className="container mb-10">
          <Cardapio acai={this.state.acai} />
        </div>
        <div>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-image">
                  <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/74698879_1499638613552261_5488931112950431744_o.jpg?_nc_cat=105&_nc_ohc=Sl_6b9mCHSQAQkYse7LOQ_T33mZewuY5Y_rPIF3Pr-imD4f-B-RWIwydA&_nc_ht=scontent.fsjk2-1.fna&oh=c856acd688242befef051213e6caa4f5&oe=5E4AC0DF" />
                </div>
                <div className="card-content">
                  <p>Combo 1:  Açai 700ml c/ creme de Maracujá <b>R$ 12,00</b></p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-image">
                  <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/72211876_1477704522412337_3928136694754181120_o.png?_nc_cat=106&_nc_ohc=zutbaNYpYloAQlp3xszqkzE9oA82GHv4cEqSIIMlQyjUkNbR3-cX-Xgkw&_nc_ht=scontent.fsjk2-1.fna&oh=6bcdb9cd34e6d70c9a7195e20324583f&oe=5E774285" />
                </div>
                <div className="card-content">
                  <p>Combo 2:  Açai 700ml c/ creme de Limão <b>R$ 12,00</b></p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-image">
                  <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/78071045_1516607305188725_4007591502376075264_o.jpg?_nc_cat=107&_nc_ohc=q0k9z9L18cUAQnhu8b33w1DFkSLmu_WQY1JvtJH8HjBvZUjM0I1nl1xkw&_nc_ht=scontent.fsjk2-1.fna&oh=cbe675974043b85d66e7a166fcf05217&oe=5E4262E4" />
                </div>
                <div className="card-content">
                  <p>Combo 3:  Açai 700ml c/ creme de Oreo <b>R$ 15,00</b></p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-image">
                  <img src="https://scontent.fsjk2-1.fna.fbcdn.net/v/t1.0-9/p960x960/77184963_1520497128133076_1144388276468056064_o.jpg?_nc_cat=104&_nc_ohc=uSNT4ZLYNV8AQnwiwHlszAm56q1Mn5IVtiGaUU5gvi2USvbzhiT0p8qRw&_nc_ht=scontent.fsjk2-1.fna&oh=476997515c9283cf5a7e390af4bb5c74&oe=5E8126AC" />
                </div>
                <div className="card-content">
                  <p>Combo 4: :  Açai 700ml c/ creme de Avelã e Morango <b>R$ 15,00</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Home;

