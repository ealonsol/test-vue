import { shallowMount } from '@vue/test-utils'
import ItemList from '../../src/Views/ItemList.vue'
import Item from '../../src/components/Item.vue'

describe('ItemList.vue', () => {
  test('renders an Item for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    expect(wrapper.findAll(Item)).toHaveLength(window.items.length)
  })
  test('renders an Item with data for each item in window.items', () => {
    window.items = [{}, {}, {}]
    const wrapper = shallowMount(ItemList)
    const items = wrapper.findAll(Item)
    expect(items).toHaveLength(window.items.length)
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    })
  })
})
