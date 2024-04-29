import { useState } from "react";

const AddUserForm=(props)=>{
    const initaialFormState={id:null,name:"",username:""}
    const [user,setUser]=useState(initaialFormState);
     
    const handleInputChange=(event)=>{
    const {name,value}=event.target
    setUser({...user,[name]:value})
    }

    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.username) return;
                props.addUser(user);
                setUser(initaialFormState);
            }
        }>
            <label>Name</label>
            <input type="text" onChange= {handleInputChange} name="name" value={user.name} />
            <label>UserNAME</label>
            <input type="text" onChange= {handleInputChange} name="username"  value={user.username}/>
            <button>Add new User</button>
        </form>
    )

}
export default AddUserForm;