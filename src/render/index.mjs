// @ts-check
'use strict'

import addTest from '@socketsupply/ssc-test'
import Tonic from '@socketsupply/tonic'

class MyGreeting extends Tonic {
    render () {
        return this.html`
            <h1>Hello, World.</h1>
            <a href="/hello">link example</a>
        `
    }
}

Tonic.add(MyGreeting)

// `addTest` does nothing if `process.argv` does not include `--test=`
addTest()

