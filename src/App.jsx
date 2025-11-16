import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './Pages/Main'
import { Student_Questionaire } from './Pages/Student_Questionaire'
import { Student_Results } from './Pages/Student_Results'

import { Layout } from './Layout'

function App() {
    return (
        <div className='container'>
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                <Route path='/' element={<Main/>}/>
                <Route path='/student-questionaire' element={<Student_Questionaire/>}/>
                <Route path='/student-results' element={<Student_Results/>}/>
                </Route>
            </Routes>
        </Router>
        </div>
    )
}

export default App