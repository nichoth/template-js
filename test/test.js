// @ts-check
'use strict'

import testContext from '@socketsupply/ssc-test/test-context'
import dom from '@socketsupply/test-dom'
import tapzero from 'tapzero'
const { test } = tapzero

testContext(tapzero)

test('find an element', async t => {
    const el = await dom.waitFor({
        selector: 'a'
    })

    t.ok(dom.isElementVisible(el), 'should find a visible link tag')
})
