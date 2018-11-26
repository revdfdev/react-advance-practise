import React, { Component } from 'react'
import { Portal, absolute } from 'Utilities';
import Icon from "./Icon";
import { Card } from "./Cards";
import styled from 'styled-components';


export default class Modal extends Component {

    render() {
        const { children, on, toggle } = this.props;
    return (
        <Portal>
            {
                on && <ModalWrapper>
                    <ModalCard>
                        <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
                        <div>{children}</div>
                    </ModalCard>
                    <BackGround />
                </ModalWrapper>
            }
        </Portal>
      );
  }
}


const ModalWrapper = styled.div`
    ${absolute({})};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 10;
`;


const CloseButton = styled.button`
    border: none;
    background: transparent;
    padding: 10px;
    ${absolute({
        y: 'top',
        x: 'right'
    })}
`;


const BackGround = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    ${absolute({
        y: 'top',
        x: 'left'
    })}
`