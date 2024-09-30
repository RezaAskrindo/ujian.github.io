import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { title: 'Hello', subTitle: 'World' } })
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.text()).toContain('World')
  })
})
