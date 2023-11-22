import { useState,useEffect,createContext, useContext } from "react";
const context = createContext()
function Uc1()
{
    const [name,newname] = useState("naveen")
    useEffect(() => {
        setTimeout ( () => {
            newname("kavin")
        },3000)
    })
    return(
        <context.Provider value={name}>
          <Fn1/>
        </context.Provider>
)
}
function Fn1()
{
    return(
        <Fn2/>
    )
}
function Fn2()
{
    const setname = useContext(context)
    return(
        <p> my name is : {setname} !</p>
    )
}
export default Uc1;
