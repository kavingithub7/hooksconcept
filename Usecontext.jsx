import { useContext ,createContext} from "react";
const context = createContext("");
function Main()
{
    return(
        <context.Provider value = "new value gdggg">
            <Newfunctionone/>
            <Newfunctiontwo/>
            <Newfunctionthree/>
        
        </context.Provider>

    )
}

function Newfunctionone()
{
   const a = useContext(context);

    return (<p>{a}</p>);
}

function Newfunctiontwo()
{
   const b = useContext(context);

   return (<p>{b}</p>);
}

function Newfunctionthree()
{
   const c = useContext(context);
   return (<p>{c}</p>);
}


export default Main;