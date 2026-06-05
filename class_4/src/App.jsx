import React from 'react'
import Navbar from './Navbar';

const App = () => {
  const userdata = {
    name1: 'john',
    options1: ['home', 'about', 'services', 'contact'],
    name2: 'doe',
    options2: ['book store', 'products', 'store', 'contact'],
    name3: 'jane',
    options3: ['apparel', 'men', 'women', 'refund'],
    name4: 'harshit',
    options4: ['courses', 'internships', 'jobs', 'callback'],
    name5: 'sarthak',
    options5: ['home', 'about', 'services', 'contact']
  }
  return (
    <div>
      <Navbar title={userdata.name1} link={userdata.options1} />
      <Navbar title={userdata.name2} link={userdata.options2} />
      <Navbar title={userdata.name3} link={userdata.options3} />
      <Navbar title={userdata.name4} link={userdata.options4} />
      <Navbar title={userdata.name5} link={userdata.options5} />
    </div>
  )
}

export default App
