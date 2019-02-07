import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSVG from '@fortawesome/free-solid-svg-icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
class IconContainer extends React.PureComponent {
  render () {
    const { iconList } = this.props.iconApp;
    return (
      <Row>
        {
          iconList.map((svgName, index) =>
          <CopyToClipboard text={svgName}
                onCopy={() => this.setState({copied: true})}>
            <Col key={index} xs={2} className="px-0 py-5 mx-3 my-3 border rounded">
              <FontAwesomeIcon icon={faSVG[svgName]} />
              
             <div
                title={svgName}
                className="text-center text-monospace pt-1"
                style={{fontSize: '14px', whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis'}}
              >
              <span>{svgName}</span>
            </div>
            </Col>
          </CopyToClipboard>
          )
        }

        
      </Row>
    )
  }
}

const mapStateToProps = ({iconApp}) => ({iconApp})

export default connect(mapStateToProps)(IconContainer);