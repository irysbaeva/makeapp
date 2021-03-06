import React, {Component} from 'react';
import {Affix, Card, Col, Collapse, Row} from 'antd';
import {GetUrlAC} from '../../redux/creators';
import {connect} from 'react-redux';
import ceramic_white from '../../img/kitchen/без плитки.png';
import kitchen from '../../img/kitchen/2.effectsResult.png';
import wall from '../../img/kitchen/плитка серая.png'

const {Meta} = Card;
const {Panel} = Collapse;

class ConstructorKitchen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      width: '100%',
      ceramic: ceramic_white,
      wall: wall,
      kitchen: kitchen,
      invert: "scale(-1,1)"
    }
  }

  render() {
    return (
    <div>
      <Row>
        <Affix offsetTop={10}>
          <Col style={{ margin: 5 }} span={13}>
          {/*<img key={'1'}*/}
          {/*   style={{position: 'absolute', zIndex: '1',transform:`${this.state.invert}`}}*/}
          {/*   src={this.state.ceramic}*/}
          {/*   width={this.state.width}*/}
          {/*   height={this.state.height}*/}
          {/*   alt={'test'}*/}
          {/*/>*/}
          {/*<img key={'2'}*/}
          {/*   style={{position: 'absolute', zIndex: '2',transform:`${this.state.invert}`}}*/}
          {/*   src={this.state.kitchen}*/}
          {/*   width={this.state.width}*/}
          {/*   height={this.state.height}*/}
          {/*   alt={'test'}*/}
          {/*/>*/}
          <img key={'1'}
               style={{position: 'absolute', zIndex: '1',transform:`${this.state.invert}`}}
               src={this.state.ceramic}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
          <img key={'1'}
               style={{position: 'absolute', zIndex: '2',transform:`${this.state.invert}`}}
               src={this.state.wall}
               width={this.state.width}
               height={this.state.height}
               alt={'test'}
          />
        </Col>
        </Affix>
        <Col span={10} style={{ float: "right" }}>
          <Collapse accordion className={'card-input'}>
            <Panel header="Фартук из плитки" key="1">
              {this.props.storage.ceramic.map((elem, index) =>
                <Col key={index} span={11} style={{margin: 6}}>
                  <Card
                    onClick={(e) => this.setState({wall: elem.img})}
                    hoverable
                    style={{width: 215}}
                    cover={<img alt="example" src={elem.sampleImage}/>}
                  >
                    <Meta title={elem.title} description={elem.descript}/>
                  </Card>
                </Col>
              )}
            </Panel>
            <Panel header="Кухня" key="2">
              {this.props.storage.kitchen.map((elem, index) =>
                  <Col key={index} span={11} style={{margin: 6}}>
                    <Card
                        onClick={(e) => this.setState({kitchen: elem.img})}
                        hoverable
                        style={{width: 215}}
                        cover={<img alt="example" src={elem.sampleImage}/>}
                    >
                      <Meta title={elem.title} description={elem.descript}/>
                    </Card>
                  </Col>
              )}
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>);
  }
}


function mapStateToProps(store) {
  return {
    storage: store.kitchenStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCeramicAC: (data) => {
      dispatch(GetUrlAC(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstructorKitchen);
