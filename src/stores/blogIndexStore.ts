import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  const iconsList = reactive([
    {
      id: 0,
      iconName: 'iconfont icon-github-fill',
      content: 'Github',
      href: 'https://github.com/Links426',
    },
    { id: 1, iconName: 'iconfont icon-vuejs-line', content: 'BLog' },
  ])
  const projectList = reactive([
    {
      id: 0,
      icon: 'iconfont icon-sharpicons_paint-roller',
      title: 'Mini-vue',
      introduction: 'generate mini-vue production',
      href: 'https://www.baidu.com',
    },
    {
      id: 1,
      icon: 'iconfont icon-sharpicons_paint-roller',
      title: 'Mini-vue',
      introduction: 'generate mini-vue production',
      href: 'https://www.baidu.com',
    },
  ])
  const sloganList = reactive([
    { id: 0, value: 'God help those who help themselves' },
    { id: 1, value: 'A Front-end developert' },
    { id: 2, value: 'Keep learning...' },
  ])
  const blogList = reactive([
    {
      id: 0,
      title: '个人站',
      time: '2022-07-25',
      href: 'https://www.baidu.com',
    },
    {
      id: 1,
      title: '个人站',
      time: '2022-07-25',
      href: 'https://www.baidu.com',
    },
  ])

  return { iconsList, projectList, sloganList, blogList }
})
