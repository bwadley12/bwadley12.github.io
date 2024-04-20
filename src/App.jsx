import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'

export default function App() {
  document.title = "Home";

  return (
      <>
        <NavBar />
        <h1>Home Page!</h1>
      </>
  )
}