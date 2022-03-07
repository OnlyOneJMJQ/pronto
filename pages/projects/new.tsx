import Link from 'next/link'
import { useState } from 'react'

export default function New() {
  const [projectName, setProjectName] = useState('')
  const [testAccounts, setTestAcccounts] = useState(0)

  function handleProjectName(e) {
    setProjectName(e.target.value.toLowerCase().split(' ').join(''))
  }

  function handleTestAccounts(e) {
    setTestAcccounts(parseInt(e.target.value, 0))
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-orange-300 flex p-4">
        <Link href="/">Pronto!</Link>
        <Link href="/projects/new"><a className="ml-auto">New Project</a></Link>
      </nav>

      <h1 className="text-2xl font-bold mb-4"><a>New Project</a></h1>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold" htmlFor="project-name">Project Name</label>
            <input className="block" type="text" name="project-name" onChange={(e) => handleProjectName(e)} />
          </div>

          <div>
          <p className="font-bold">Project Account</p>
            <p>{`${projectName}.testnet.near`}</p><br/>

            <p className="font-bold">Project URL</p>
            <p>{`${projectName}.pronto.is`}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-bold" htmlFor="project-accounts">Number of Accounts</label>
            <input className="block" type="number" name="project-accounts" value={testAccounts} onChange={(e) => handleTestAccounts(e)} min="0" />
          </div>

          <div>
            <p className="font-bold">Test Accounts ({testAccounts})</p>
            {[...Array(testAccounts)].map((testAccount, i) => {
              return <p key={testAccount}>{`user${i}.${projectName}.testnet.near`}</p>
            })}
          </div>
        </div>

        <div>
          <button className="bg-orange-300 px-4 py-2 hover:bg-orange-200" type="button">Create Project</button>
        </div>
      </div>

    </>
  )
}
