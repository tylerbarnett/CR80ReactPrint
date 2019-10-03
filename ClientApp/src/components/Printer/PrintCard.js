import React, { useRef, useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import {
  Button, Modal, ModalHeader, ModalBody, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import QRCode from 'qrcode.react';
import './index.css'

class ComponentToPrint extends React.PureComponent {
  state = {
    show: false
  }
  render() {
    const { qrCode, azureKeys, user } = this.props
    //const profileImage = `${azureKeys.url + '/' + user.imageUrl + azureKeys.sasBlobToken}` 
    // transform: `rotate(90deg)`
    return (
      <Card body >
        <Row>
          <Col xs="5.5">
            <QRCode size="85" value="SDFSD" />
            <Row><br/></Row>
            <Row><br/></Row>
            <Row>
              <Col>
                Tyler Barnett
        </Col>
            </Row>
            <Row>
              <Col>Rocky Mountain Software</Col>
            </Row>
          </Col>
          <Col xs="auto">
            <Row>
              <img width="260" height="60"
                src="https://res.cloudinary.com/rockyms/image/upload/v1567695568/Picture1.png" alt="Logo" />
            </Row>
            <Row style={{fontSize:'12', color:'blue'}}>Teamwork, Innovation, Execution</Row>
            <Row style={{fontSize:'9px'}}>
            <font color="FF8000">
            Where Everyone Goes Home Safe And Healthy Every Day
            </font>
            </Row>
            <Row>
              <Col xs="3">
              </Col>
              <Col xs="3" style={{paddingLeft:'50px'}}>
                <img src="https://imcloudstorage.blob.core.windows.net/testprofile/avatar-2019-08-20-06-51-Tyler-Barnett.jpg?st=2019-09-26T22%3A32%3A27Z&se=2019-11-27T22%3A32%3A00Z&sp=rl&sv=2018-03-28&sr=b&sig=nYqMgRRMtM8ngHjwsfCKaB9o7ioxAjfXHWmJxLiYqIY%3D"
                  alt="Flowers in Chania" width="140" height="170" />
              </Col>
            </Row>
          </Col>
        </Row>

      </Card>



    );
  }
}

const PrintCard = ({ className, }) => {//azureKeys, user
  const [printModal, setPrintModal] = useState(false);
  const [user, setUser] = useState("jojo")
  const [show, setShow] = useState(false);
  const [qrCode, setQrCode] = useState('SDFSD');
  const [azureKeys, setAzureKeys] = useState();
  const componentRef = useRef();
  const modalStyle = {
    width: '30vw',
    maxWidth: '30vw',
    height: '60vw'
  }
  // useEffect(() => {
  //   setShow(props)
  // })

  return (
    <a>
      <Button outline color="success" onClick={() => setPrintModal(!printModal)}>Create Card</Button>
      <Modal style={modalStyle} isOpen={printModal} toggle={() => setPrintModal(!printModal)} style={{ width: '500px', height: '400px' }}>
        <ModalHeader toggle={() => setPrintModal(!printModal)}></ModalHeader>
        <ModalBody>

          <ComponentToPrint ref={componentRef} props={show} qrCode={qrCode} user={user} azureKeys={azureKeys} />
        </ModalBody>
        <ReactToPrint
          pageStyle="@page { size: CR80 landscape;}"
          trigger={() => <Button outline onClick={() => setShow(true)}>Print</Button>}
          content={() => componentRef.current}
        />
      </Modal>
    </a>
  );
};
export default PrintCard;