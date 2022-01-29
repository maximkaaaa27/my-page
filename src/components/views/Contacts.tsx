import React, { useState } from "react";
import { Button, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useIcons } from "../../assets/icons";




export const Contacts = () => {


  const [tooltipText, setTooltipText] = useState('Copy to clipboard')
  const myMail = 'max_005_27@inbox.lv';
  const mySkype = 'maximkaaaa27';
  const mail = useIcons('mail');
  const skype = useIcons('skype');
  const clipboard = useIcons('clipboard');


  const copyToClipboard = (payload: string) => {
    navigator.clipboard.writeText(payload);
    setTooltipText('Copied');
    setTimeout(() => setTooltipText('Copy to clipboard'), 1000);
  }
  
  return (
    <>
      <InputGroup className="my-3">
        <InputGroup.Text>{mail}</InputGroup.Text>
        <InputGroup.Text>{myMail}</InputGroup.Text>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id='tooltip-copy-clipboard'>
              {tooltipText}
            </Tooltip>
          }
          >
            <Button variant="secondary"  onClick={() => copyToClipboard(myMail)}>{clipboard}</Button>
          </OverlayTrigger>
        
      </InputGroup>

      <InputGroup className="my-3">
        <InputGroup.Text>{skype}</InputGroup.Text>
        <InputGroup.Text>{mySkype}</InputGroup.Text>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip id='tooltip-copy-clipboard'>
              {tooltipText}
            </Tooltip>
          }
          >
        <Button variant="secondary" onClick={() => copyToClipboard(mySkype)}>{clipboard}</Button>
        </OverlayTrigger>
      </InputGroup>
    </>
  )
}
