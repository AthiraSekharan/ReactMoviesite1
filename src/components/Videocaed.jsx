import {React,useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI } from '../services/allAPI';

function Videocaed({displayData,setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const deleteVideo = async(vId)=>{
    //api call
    const result=await removeVideoAPI(vId)
    setDeleteVideoResponse(result.data)
  }
  

  const dragStarted=(e,vId)=>{
    console.log(`Dragging started with video id : ${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }
  return (
    <>
    <Card draggable  onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow ms-5 me-5'>
{ !insideCategory &&     <Card.Img  onClick={handleShow} style={{width:'100%',height:'265px',borderRadius:'20px',cursor:'pointer'}} variant="top" src={displayData?.imageurl} />
}      <Card.Body>
        <Card.Title onClick={handleShow}><p>{displayData?.moviename}</p></Card.Title>


      <Card.Title className='d-flex justify-content-between'>
{   !insideCategory &&       <p>{displayData?.rating} <i className="fa-solid fa-star"></i></p>
}
        
{ !insideCategory && <button  onClick={()=>deleteVideo(displayData?.id)}  className='btn'><i className="fa-solid fa-trash text-danger"></i></button>

}
</Card.Title>
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={displayData?.videourl} title=""  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocaed