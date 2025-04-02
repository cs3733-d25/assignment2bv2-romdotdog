import "./App.css"
import Title from "./components/Title"
import Intro from "./components/Intro"
import Hobby1 from "./components/Hobby1"
import Hobby2 from "./components/Hobby2"

function App() {
  return (
    <>
      <Title />
      <Intro name1="Roman" name2="Ben" />
        <Hobby1 />
        <Hobby2 />
    </>
  )
}

export default App
