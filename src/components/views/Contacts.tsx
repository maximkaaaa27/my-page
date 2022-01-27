import React from "react";
import { useIcons } from "../../assets/icons";




export const Contacts = () => {

  const github = useIcons('github');
  const linkedin = useIcons('linkedin');
  const mail = useIcons('mail');
  const skype = useIcons('skype')
  return (
    <>
      {github}
      {linkedin}
      {mail}
      {skype}
    </>
  )
}
