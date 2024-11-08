import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {appId, serverSecret } from "./config";
const Room = () => {
  const { roomId } = useParams();
  const meeting=(element)=>{
   const token= ZegoUIKitPrebuilt.generateKitTokenForTest(appId,
    serverSecret,roomId,
     Date.now().toString(),Date.now().toString());
   const zc=ZegoUIKitPrebuilt.create(token);
    zc.joinRoom({
      container:element,
      scenario:{
        mode:ZegoUIKitPrebuilt.OneONoneCall
      },
      showScreenSharingButton:false,
      sharedLinks:[{
        name:"copy link",
        url:window.location.href
      }]
      
    });
  };
  // console.log({roomId});
  return (
    <div ref={meeting} style={{width:"100vh",height:"100vh"}}>
      
    </div>
  );
};
export default Room;

