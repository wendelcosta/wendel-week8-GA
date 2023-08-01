import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const SearchPage = () => {
	const [query, setQuery] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(query)
		navigate(`/search/${query}`)
	}

	const handleChange = (e) => {
		setQuery(e.target.value)
	}

	return (
		<Container maxWidth='md' sx={{ textAlign: 'center' }}>
			<h1>Flicker Search</h1>
			<form onSubmit={handleSubmit}>
				{/* <input type='text' value={query} onChange={(e) => handleChange(e)} /> */}
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='center'
					spacing={2}
				>
					<TextField
						id='outlined-basic'
						label='Search'
						variant='outlined'
						value={query}
						onChange={(e) => handleChange(e)}
					/>
					{/* <button>Search</button> */}
					<Button type='submit' variant='text'>
						Click to search
					</Button>
				</Stack>
			</form>
			<Outlet />
		</Container>
	)
}
export default SearchPage
