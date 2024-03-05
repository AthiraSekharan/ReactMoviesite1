import {React,useState,useEffect} from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { UpdateCategoryAPI, addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI } from '../services/allAPI';
import Videocaed from './Videocaed';

function Category({removeCategoryVideoResponse}) {
  
const [allCategories,setallCategories]=useState([])
  const [categoryName,setCategoryName]= useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true)
  const handleAddCategory = async()=>{
    if(categoryName){
      await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllcategories()
    }else{
      alert("Please fill the form completelly!!!")
    }
  }

const getAllcategories = async ()=>{
const result =await getCategoryAPI()
setallCategories(result.data)
}
console.log(allCategories);
useEffect(()=>{
getAllcategories()
},[removeCategoryVideoResponse])

const dragOverCategory =(e)=>{
  e.preventDefault()
  console.log("Dragging over category");
}
const videoDropped =async(e,categoryId)=>{
  const videoId = e.dataTransfer.getData("videoId")
  console.log(`Video Dorpped withvId :${videoId},inside category Id :${categoryId}`);
  //get detail of video id
  const {data}= await getVideoAPI(videoId)
  console.log(data);
  //get category details where we have add video
  let selectedCategory = allCategories.find(item=>item.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  await UpdateCategoryAPI(categoryId,selectedCategory)
  getAllcategories()
}
const handleRemoveCategory = async(cId)=>{
  await removeCategoryAPI(cId)
  getAllcategories()
}


const videoDragStarted = (e,videoId,categoryId)=>{
  console.log(`Drag started from category Id:${categoryId} with video id:${categoryId}`);
  let dataShare = {videoId,categoryId}
  e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
}


  return (
<>
<div className="d-flex justify-content-around">
      <h3>Favourite Genres</h3>
       
        <button onClick={handleShow} style={{width:'50px',height:'40px'}} className="btn rounded  ms-2 rounded-circle btn-primary"><i class="fa-solid fa-plus"></i></button>
    </div>
    <div className='container-fluid mt-3'>
{allCategories.length>0? allCategories.map((item,index)=>(
  <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className='border rounded p-3 mb-2'>
     <div className='d-flex justify-content-between'>
        <h5>{item.categoryName}</h5>
        <button onClick={()=>handleRemoveCategory(item.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
  
       
     </div >

  <div className='row mt-2'>
       {
    item.allVideos?.length>0 &&
    item.allVideos?.map((video,index)=>(
      <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className='col-lg-6'>
        <Videocaed insideCategory={true} displayData ={video}/>
      </div>
    ))
  }
  
  </div>
    </div>
  ))

:
<div className='text-danger fw-bolder'>No Categories are added yet</div>}
    </div>
    

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
              label="Add Category"
              className="mb-3"
            >
              <Form.Control  value={categoryName} onChange={e=>setCategoryName(e.target.value)}  type="text" placeholder="Add Category" />
            </FloatingLabel>



           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} backdrop="static"
        keyboard={false}>
            Cancel
          </Button>
          <Button  onClick={handleAddCategory} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>

 </>
  )
}

export default Category