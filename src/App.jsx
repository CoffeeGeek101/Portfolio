import React, { Suspense } from "react"
import FallBack from "./compnents/FallBack"

const Wrapper = React.lazy(()=> import('./compnents/Wrapper'))

function App() {

  return(
    <div>
      <Suspense fallback={<FallBack/>}>
      <Wrapper/>
      </Suspense>
    </div>
  )

}
export default App
