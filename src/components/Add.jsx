import {React,useState} from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () =>{ setShow(false);
  setUploadVideo({...uploadVideo,moviename:"",imageurl:"",videourl:"",rating:""})
  }
  const handleShow = () => setShow(true)


  const[uploadVideo,setUploadVideo]=useState({
    moviename:"",imageurl:"",videourl:"",rating:""
  })
  
const getYoutubeEmbededLink =(link)=>{
  if (link.includes("v=")) {
    let videoId = link.split("v=")[1].slice(0, 11)
    setUploadVideo({ ...uploadVideo,videourl: `https://www.youtube.com/embed/${videoId}` })
  } else {
    setUploadVideo({ ...uploadVideo,videourl: "" })
    alert("INPUT PROPER LINK!!!")
  }
}

console.log(uploadVideo);

const handleUpload = async ()=>{
  const { moviename,imageurl,videourl,rating } = uploadVideo
  if (moviename && imageurl && videourl && rating) {

    const result = await uploadVideoAPI(uploadVideo)  
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      alert(`Video'${result.data.caption}'uploaded successfully!!!`)
      setUploadVideoResponse(result.data)
      handleClose()


    } else {
      alert("API call Failed ...Please try after some time!!!")
    }
} else {
  alert("please fill the form completelly!!!")
}
}

  return (        
    <>
    
    <h3 className='ms-5 text-center mt-5' style={{fontFamily:'-moz-initial'}}>Upload Video <button onClick={handleShow} style={{width:'50px',height:'40px'}} className="btn rounded  ms-2 rounded-circle btn-primary"><i class="fa-solid fa-plus"></i></button></h3>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
              controlId="floatingInputCaption"
              label="Movie Name"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.moviename} onChange={e=>setUploadVideo({...uploadVideo,moviename:e.target.value})} type="text" placeholder="Movie Name" />
            </FloatingLabel>



            <FloatingLabel
              controlId="floatingInputCaption"
              label="Image url"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.imageurl}  onChange={e=>setUploadVideo({...uploadVideo,imageurl:e.target.value})} type="text" placeholder="Image url" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputCaption"
              label="Video url"
              className="mb-3"
            >
              <Form.Control  value={uploadVideo.videourl} onChange={e=>getYoutubeEmbededLink(e.target.value)} type="text" placeholder="Video url" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInputCaption"
              label="Rating"
              className="mb-3"
            >
              <Form.Control value={uploadVideo.rating}  onChange={e=>setUploadVideo({...uploadVideo,rating:e.target.value})} type="text" placeholder="Rating" />
            </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add