import React,{Fragment} from 'react'

const store=['','','']

function Column(){
     return(
          <tr>
               <td>Tênis</td>
               <td>Roupa</td>
          </tr>

     )
}

function App_Fragments(){

     const renderColumns=(element,key)=>(
          <Fragment key={`column-${key}`}>
               <Column/>
          </Fragment>
     )

     return(
          <>
               <div>
                    ReactJS!!!

               </div>
               <div>
                    Avançado!!!
               </div>
               <table>
                    {store.map(renderColumns)}
               </table>
          </>
     )
}

export default App_Fragments