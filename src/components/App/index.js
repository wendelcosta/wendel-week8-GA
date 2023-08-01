import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import SearchPage from '../SearchPage'
import SearchResults from '../SearchResults'
import PhotoResults from '../PhotoResults'

const App = () => {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<SearchPage />}>
					<Route index element={<p>enter search here...</p>} />
					<Route path='/search/:queryText' element={<SearchResults />} />
				</Route>
				<Route path='/photo/:photoId' element={<PhotoResults />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
