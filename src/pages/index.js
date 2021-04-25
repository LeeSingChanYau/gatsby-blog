import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import me from './memoji.png';

library.add(fab, faCheckSquare, faCoffee)


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <img src={me} alt="me" className={indexStyles.me}/>
            <h1>Hello.</h1>
            <h2>I'm Alan, a software engineer and a computer science student living in beautiful California.</h2>
            <div>
                <FontAwesomeIcon icon={['fab', 'js']} size="6x" className={indexStyles.icon}/>
                <FontAwesomeIcon icon={['fab', 'node']} size="6x" className={indexStyles.icon}/>
                <FontAwesomeIcon icon={['fab', 'react']} size="6x" className={indexStyles.icon}/>
            </div>
        </Layout>
    )
}

export default IndexPage