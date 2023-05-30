import React, {useState} from 'react'
import {Input,Button,Typography,Checkbox,Radio} from 'antd'
import {CheckboxChangeEvent} from "antd/es/checkbox/Checkbox";



interface IData{
    firstName:string;
    lastName:string;
    email:string;
    passWorld:string;
    conFormPassWorld:string;
    language:string[];
    gender:string;
}

const Registration = ()=>{
    const [data,setData]=useState<IData>({
        firstName:'',
        lastName:'',
        email:'',
        passWorld:'',
        conFormPassWorld:'',
        language:[],
        gender:"",
    })

    const onHandleChange = (e:React.ChangeEvent<HTMLInputElement> |CheckboxChangeEvent)=>{
        e.stopPropagation()
        const {name,value,type,checked}=e.target;
        if(type==='checkbox') {
            if(data?.language?.includes(value)){
                const filterData=data?.language.filter((v)=>{
                    return v !== value
                });
                setData({...data,language: filterData} as any);
            }else {
                setData({...data, [name as string]: [...data?.language, value]});
            }

        }else{

            setData({...data, [name as string]: value});
        }
    }

    const onSubmit=()=>{
        console.log(data)
    }

    return(
        <div className='h-full w-[40vw] m-auto border-solid border-grayscale-200 border rounded-lg mt-10'>
           <div className='px-10'>
               <h1 className='text-3xl text-center text-green-800 py-5'>Sing Up</h1>
               <Input placeholder='First Name'
                      onChange={(e)=>onHandleChange(e)}
                      type='text'
                      className='py-2 my-2'
                      name='firstName'
                      value={data.firstName}
               />

               <Input placeholder='Last Name'
                      type='text'
                      onChange={(e)=>onHandleChange(e)}
                      className='my-2 py-2'
                      name='lastName'
                      value={data.lastName}/>

               <Input placeholder='Email'
                      type='text'
                      onChange={(e)=>onHandleChange(e)}
                      className='my-2 py-2'
                      name='email'
                      value={data.email}
               />

               <Input placeholder='PassWorld'
                      type='text'
                      onChange={(e)=>onHandleChange(e)}
                      className='my-2 py-2'
                      name='passWorld'
                      value={data.passWorld}
               />

               <Input placeholder='ConFormPassWorld'
                      type='text'
                      onChange={(e)=>onHandleChange(e)}
                      className='my-2 py-2'
                      name='conFormPassWorld'
                      value={data.conFormPassWorld}
               />

               <Typography className='text-lg'>Select Language:</Typography>
                <div className='flex gap-3'>
                    <Checkbox name='language'
                             checked={data?.language?.includes("CSS")}
                             onChange={(e)=>onHandleChange(e)}
                             type='checkbox'
                             value='CSS'
                   />CSS

                   <Checkbox name='language'
                             checked={data?.language?.includes("HTML")}
                             onChange={(e)=>onHandleChange(e)}
                             type='checkbox'
                             value='HTML'
                   />HTML

                   <Checkbox name='language'
                             checked={data?.language?.includes("JavaScript")}
                             onChange={(e)=>onHandleChange(e)}
                             type='checkbox'
                             value='JavaScript'
                   />JavaScript

                   <Checkbox name='language'
                             checked={data?.language?.includes("React Js")}
                             onChange={(e)=>onHandleChange(e)}
                             type='checkbox'
                             value='React Js'
                   />React Js
                </div>
                <Typography className='text-lg'>Select your Gender:</Typography>
               <Radio.Group name='gender' onChange={(e)=>onHandleChange(e)}>
                   <Radio
                          type='radio'
                          value='Male'
                   >Male</Radio>
                   <Radio
                          type='radio'
                          value='Female'
                   >Female</Radio>
                   <Radio
                          type='radio'
                          value='Other'
                   >Other</Radio>
               </Radio.Group>


               <div className="flex justify-center mt-10">
                   <Button onClick={()=>onSubmit()}
                           type='primary'
                           size='large'
                           className='bg-green-800 mb-5'
                   >
                       Registration
                   </Button>
               </div>

           </div>
        </div>
    )
}
export default Registration;
