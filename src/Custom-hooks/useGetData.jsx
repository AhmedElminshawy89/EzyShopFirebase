import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase.config'
import { collection,onSnapshot } from 'firebase/firestore'

const useGetData= collectionName=> {

    const [data,setData] = useState([])
    const collectionRef = collection(db,collectionName)

    useEffect(()=>{

        const getData = async()=>{
            await onSnapshot(collectionRef,(Snapshot)=>{
                setData(Snapshot.docs.map(doc=>({...doc.data(),id:doc.id})))
            })
        } 
        getData()
    },[])

   return {data}
}

export default useGetData
