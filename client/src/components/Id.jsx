import { useState } from "react";

function Id(){
    const [idRequest,setIdRequest] = useState('');
    const queryParameters = new URLSearchParams(window.location.search);
    setIdRequest(queryParameters.get("id"))
     return idRequest
};
export default Id;