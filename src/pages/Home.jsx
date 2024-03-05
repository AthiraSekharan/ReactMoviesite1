import React from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import { useState } from 'react'

function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")

  const [uploadVideoResponse,setUploadVideoResponse] = useState("")

  return (
   <> 
   <div className='mt-5'>
   </div>



   <div className='ro'>
   <div className='col-lg- '>
<div className='container '>
<div className='col-lg-1 bg-black' style={{width:'100%',fontFamily:'-moz-initial',}} >
    <Category  removeCategoryVideoResponse={removeCategoryVideoResponse} />
  
</div>  
</div></div>
   <Add setUploadVideoResponse={setUploadVideoResponse} />
<div style={{fontFamily:'-moz-initial'}} className='ms-5'><h4 className='ms-5'>All Videos</h4>
  <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse} />
</div>







   </div>
   </>
  )
}

export default Home