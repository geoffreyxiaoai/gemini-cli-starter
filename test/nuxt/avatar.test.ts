import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Avatar from '../../app/components/Avatar.vue'

describe('Avatar', () => {
  it('renders the initial correctly', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'G',
        bgColor: 'default'
      }
    })
    expect(wrapper.text()).toContain('G')
  })

  it('applies the correct background color class', async () => {
    const wrapper = await mountSuspended(Avatar, {
      props: {
        initial: 'A',
        bgColor: 'primary'
      }
    })
    const avatar = wrapper.find('.avatar')
    expect(avatar.classes()).toContain('bg-primary')
  })

  it('renders with secondary background color', async () => {
      const wrapper = await mountSuspended(Avatar, {
        props: {
          initial: 'B',
          bgColor: 'secondary'
        }
      })
      expect(wrapper.find('.bg-secondary').exists()).toBe(true)
  })
})
