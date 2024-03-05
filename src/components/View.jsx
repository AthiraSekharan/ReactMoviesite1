import { Row,Col } from 'react-bootstrap'
import Videocaed from './Videocaed'
import React, { useEffect,useState} from 'react'
import { UpdateCategoryAPI, getAllVideosAPI, getSingleCategoryAPI } from '../services/allAPI'


function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {
const [allVideos,setAllVideos]=useState([])

const [deleteVideoResponse,setDeleteVideoResponse]= useState("")

  const getAllVideos = async ()=>{
    const result =await getAllVideosAPI()
    if(result?.status==200){
setAllVideos(result?.data)  
  }
  }
  useEffect(()=>{
getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])
  //console.log(allVideos);


  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const handleCategoryVideo =async (e)=>{
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove video Id:${videoId} from category Id:${categoryId}`);
    //get a category 
    const {data}= await getSingleCategoryAPI(categoryId)
   
    const updatedVideoList =data.allVideos.filter(item=>item.id!=videoId)
    console.log(updatedVideoList);
    const {id,categoryName}=data
    const result =await UpdateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedVideoList})
    setRemoveCategoryVideoResponse(result.data)

  }
  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}> 

    {allVideos?.length>0? allVideos?.map((video,index)=>(
          <Col key={index} className='mb-4' sm={12} md={6} lg={3}>
        <Videocaed displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        ))
        :
        <div className='text-danger fw-bolder'>No Videos are upload yet!!!</div>
          }
      
    </Row>
    </>
  )
}

export default View