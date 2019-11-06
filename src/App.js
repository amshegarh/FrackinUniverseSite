import React from 'react';
import styled from 'styled-components';

import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import image_main from './images/1117522608_preview_066.jpg';
import image from './images/frackinuniverse_1.jpg';
import image2 from './images/1117522608_preview_027.jpg';
import image3 from './images/4b09b33563cf6ab111ef58b994cc925a.png';
import image4 from './images/hqjcy25f2maz.png';
import image5 from './images/lFpqNio.png';
import logo from './images/starboundlogo.png';

const text = `Regna terrae, cantate Deo,
                        psallite Domino
                        qui fertis super caelum
                        caeli ad Orientem
                        Ecce dabit voci Suae
                        vocem virtutis,
                        tribuite virtutem Deo.

                        Exorcizamus te, omnis immundus spiritus
                        omnis satanica potestas, omnis incursio
                        infernalis adversarii, omnis legio,
                        omnis congregatio et secta diabolica.

                        Ergo draco maledicte
                        et omnis legio diabolica adjuramus te.
                        cessa decipere humanas creaturas,
                        eisque aeternae Perditionis venenum propinare. [*a see above]

                        Vade, Satana, inventor et magister
                        omnis fallaciae, hostis humanae salutis.
                        Humiliare sub potenti manu dei,
                        contremisce et effuge, invocato a
                        nobis sancto et terribili nomine,
                        quem inferi tremunt.

                        Ab insidiis diaboli, libera nos, Domine.
                        Ut Ecclesiam tuam secura tibi facias
                        libertate servire, te rogamus, audi nos.
                        Ut inimicos sanctae Ecclesiae humiliare digneris,
                        te rogamus, audi nos.

                        Ut inimicos sanctae Ecclesiae
                        te rogamus, audi nos. [*b see above]

                        Terribilis Deus de sanctuario suo. [*c see above]
                        Deus Israhel ipse truderit virtutem
                        et fortitudinem plebi Suae.
                        Benedictus Deus. Gloria Patri.`;

class Author extends React.Component {
    render() {
        const StyledCol = styled(Col)`
  background: #2f2f2f;
  padding: 0.5rem;
`;
        const StyledParagraph = styled.p`
  margin: 0;
  font-size: small;
  color: white;
`;
        return (
            <Container fluid>
                <Row>
                    <StyledCol>
                        <StyledParagraph>Made by <a href="https://t.me/amshegarh">amshegarh</a></StyledParagraph>
                    </StyledCol>
                </Row>
            </Container>
        );
    }
}

class Block extends React.Component {
    render() {
        const Wrapper = styled(Container).attrs(props => ({
            fluid: true
        }))`
  background: black url(${this.props.img ? this.props.img : null}) center no-repeat;
  background-size: cover;
  box-shadow: inset  0 0 25px 50px black;
  ${this.props.height ? "height:" + this.props.height + "px;" : null}
`;
        const ColWrapper = styled(Col)`
padding: 3rem;
  box-shadow: 0 0 15px 50px black;
  background: black;
`;

        return (<Wrapper>
            {
                this.props.right &&
                <Row><Col md={6} xs={0} xl={8}/><ColWrapper xl={4} md={6}
                                                            xs={12}>{this.props.children}</ColWrapper></Row>
            }
            {
                this.props.left &&
                <Row><ColWrapper xl={4} md={6} xs={12}>{this.props.children}</ColWrapper><Col xl={8} md={6}
                                                                                              xs={0}/></Row>
            }
            {
                !(this.props.right || this.props.left) &&
                <Row className="d-flex justify-content-center"><ColWrapper xl={4} md={6}
                                                                           xs={12}>{this.props.children}</ColWrapper></Row>
            }
        </Wrapper>);
    }
}

class Logo extends React.Component {
    render() {
        const Wrapper = styled(Container).attrs(props => ({
            fluid: true
        }))`
  background: black url(${this.props.img ? this.props.img : null}) center no-repeat;
  background-size: cover;
  box-shadow: inset  0 0 25px 50px black;
  height: 50vh;
  padding: 3rem;
  position: relative;
`;

        const LogoImg = styled.img.attrs(props => ({className: "img-fluid"}))`
        vertical-align: middle;
        max-height:60%;
    max-width: 75%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
        `;

        return (<Wrapper>
            {
                <LogoImg src={logo} alt={"logo"}/>
            }
        </Wrapper>);
    }
}

export default class App extends React.Component {
    render() {

        return (
            <div>
                <Logo img={image_main}/>
                <Block img={image} right>
                    <h1>TEST DESCRIPTION</h1>
                    <p>{text}</p>
                </Block>
                <Block img={image2}>
                    <h1>Hello joppa</h1>
                    <p>{text}</p>
                </Block>
                <Block img={image3} left>
                    <h1>TEST DESCRIPTION 2</h1>
                    <p>{text}</p>
                </Block>
                <Block img={image4}>
                    <h1>TEST DESCRIPTION 3</h1>
                    <p>{text}</p>
                </Block>
                <Block img={image5} right>
                    <h1>TEST DESCRIPTION 4</h1>
                    <p>{text}</p>
                </Block>
                <Author/>
            </div>
        );
    }
}
