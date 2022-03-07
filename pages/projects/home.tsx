import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  async function uploadToServer(event) {
    const body = new FormData()
    body.append("file", event.target.files[0])
    const response = await fetch("/api/file", {
      method: "POST",
      body
    })
    
    const responseJson = await response.json()
    const contractFilename = responseJson.filename

    if (response.status === 201) {
      localStorage.setItem('contract', contractFilename)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-orange-300 flex p-4 z-10">
        <Link href="/">Pronto!</Link>
        <Link href="/projects/new"><a className="ml-auto">New Project</a></Link>
      </nav>

      <h1 className="text-2xl font-bold mb-4"><a>My Project</a></h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <header className="bg-orange-300 p-4 w-100 flex">
            <span>INFO</span>
            {/* <button className="bg-white px-4 py-2 ml-auto" type="button" onClick={handleDeploy}>Upload</button> */}
          </header>
          <label className="block" htmlFor="myContract">Upload a WASM file here.</label>
          <input type="file" name="myContract" onChange={uploadToServer} />
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div>
            <header className="bg-orange-300 p-4 w-100">DATA</header>
          </div>

          <div>
            <header className="bg-orange-300 p-4 w-100">FORMS</header>
          </div>
        </div>
      </div>
    </>
  )
}